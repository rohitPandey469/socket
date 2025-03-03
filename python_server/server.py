from flask import Flask, jsonify
import gspread
from oauth2client.service_account import ServiceAccountCredentials
from datetime import datetime
import os
from dotenv import load_dotenv
load_dotenv()

app = Flask(__name__)

credentials_dict = {
    "type": os.getenv("GOOGLE_TYPE"),
    "project_id": os.getenv("GOOGLE_PROJECT_ID"),
    "private_key_id": os.getenv("GOOGLE_PRIVATE_KEY_ID"),
    "private_key": os.getenv("GOOGLE_PRIVATE_KEY").replace('\\n', '\n'),
    "client_email": os.getenv("GOOGLE_CLIENT_EMAIL"),
    "client_id": os.getenv("GOOGLE_CLIENT_ID"),
    "auth_uri": os.getenv("GOOGLE_AUTH_URI"),
    "token_uri": os.getenv("GOOGLE_TOKEN_URI"),
    "auth_provider_x509_cert_url": os.getenv("GOOGLE_AUTH_PROVIDER_X509_CERT_URL"),
    "client_x509_cert_url": os.getenv("GOOGLE_CLIENT_X509_CERT_URL"),
    "universe_domain": os.getenv("GOOGLE_UNIVERSE_DOMAIN"),
}

# Google Sheets API Setup
scope = ["https://spreadsheets.google.com/feeds", "https://www.googleapis.com/auth/drive"]
creds = ServiceAccountCredentials.from_json_keyfile_dict(credentials_dict, scope)
client = gspread.authorize(creds)
sheet = client.open("DM TRACKING").sheet1 # Ensure correct sheet name

@app.route("/increment", methods=["POST"])
def increment():
    try:
        # Define columns and start row
        date_column = "B"
        count_column = "C"
        start_row = 10  # Start checking from row 10

        # Get today's date in MM/DD/YYYY format
        today_date = datetime.today().strftime("%m/%d/%Y")

        # Get all dates from column B (starting from row 10)
        date_cells = sheet.col_values(2)[start_row - 1:]

        # Find the row where today's date is present or find the first empty row
        row_number = None
        for i, date in enumerate(date_cells):
            if date.strip() == today_date:  # Date found, update count
                row_number = start_row + i
                break
            if date.strip() == "":  # First empty cell found
                row_number = start_row + i
                sheet.update(values=[[today_date]], range_name=f"{date_column}{row_number}")  # Write today's date
                break

        if row_number is None:
            return jsonify({"error": "No available row found to update the sheet!"}), 500

        # Get current count from column C
        current_value = sheet.acell(f"{count_column}{row_number}").value
        new_value = int(current_value) + 1 if current_value and current_value.isdigit() else 1

        # Update column C with the incremented value
        sheet.update(values=[[new_value]], range_name=f"{count_column}{row_number}")

        return jsonify({"message": "Google Sheet updated successfully!", "row": row_number, "date": today_date, "count": new_value})

    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5001, debug=True)
