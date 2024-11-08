require("dotenv").config();
const mongoose = require("mongoose");
const Link = require("./models/Link");

// Connect to the database
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Database connected"))
  .catch((err) => console.error("Database connection error:", err));

// Example data to seed the `Link` collection
const seedData = [
  { url: "https://www.instagram.com/jessbeautylover" },
  { url: "https://www.instagram.com/sunshineskinclinic_official" },
  { url: "https://www.instagram.com/noora2mb" },
];

// Function to insert seed data
const seedDB = async () => {
  try {
    await Link.deleteMany({}); // Clear existing data
    await Link.insertMany(seedData); // Insert new data
    console.log("Database seeded successfully");
  } catch (error) {
    console.error("Error seeding database:", error);
  } finally {
    mongoose.connection.close(); // Close the connection after seeding
  }
};

seedDB();
