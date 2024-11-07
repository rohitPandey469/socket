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
  { url: "https://www.google.com" },
  { url: "https://www.youtube.com" },
  { url: "https://github.com" },
  { url: "https://www.wikipedia.org" },
  { url: "https://www.reddit.com" },
  { url: "https://www.twitter.com" },
  { url: "https://www.linkedin.com" },
  { url: "https://www.facebook.com" },
  { url: "https://www.instagram.com" },
  { url: "https://www.stackoverflow.com" },
  { url: "https://www.medium.com" },
  { url: "https://www.producthunt.com" },
  { url: "https://www.dev.to" },
  { url: "https://www.pinterest.com" },
  { url: "https://www.twitch.tv" },
  { url: "https://www.netflix.com" },
  { url: "https://www.quora.com" },
  { url: "https://www.dropbox.com" },
  { url: "https://www.spotify.com" },
  { url: "https://www.airbnb.com" },
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
