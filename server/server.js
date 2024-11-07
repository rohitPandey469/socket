require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "https://linkk.netlify.app",
    methods: ["GET", "POST"],
  },
});
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const Link = require("./models/Link");

// Socket.io Client - Server Connection Code
io.on("connection", (socket) => {
  console.log("Client connected : ", socket.id);
  socket.on("disconnect", () => {
    console.log("User disconnected", socket.id);
  });
});

// Express Client - Server Connection calls code
app.get("/api/links", async (req, res) => {
  const links = await Link.find();
  res.json(links);
});

app.delete("/api/links/:id", async (req, res) => {
  const id = req.params.id;
  await Link.findByIdAndDelete(id);
  io.emit("linkRemoved", id); //Notified all clients of the change
  res.sendStatus(200);
});

server.listen(5000, () => console.log("Server running on port 5000"));
