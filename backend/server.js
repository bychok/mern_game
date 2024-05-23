require("dotenv").config();
// Allows usage of environment variables

const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

const connectToDb = require("./config/connectToDb.js");
const Note = require("./models/note");
const notesController = require("./controllers/notesController.js");
const cors = require("cors");

// Middleware
app.use(express.json()); // Express to parse JSON bodies
app.use(cors()); // Allow cross-origin requests

// Initialize database connection
connectToDb();

// Routes
app.get("/api/notes", async (req, res) => {
  try {
    const notes = await Note.find(); // Assuming Note is a Mongoose model
    res.json(notes);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch notes" });
  }
});

app.get("/", (req, res) => {
  res.send("This is a Landing Page");
});

// CRUD routes for Notes model
app.get("/notes", notesController.fetchAllNotes); // GET all Notes - [Read]
app.get("/notes/:id", notesController.fetchNote); // GET a specific Note by ID - [Read]
app.post("/notes", notesController.createNote); // Create a Note - [Create / POST]
app.put("/notes/:id", notesController.updateNote); // Update a specific Note - [Update]
app.delete("/notes/:id", notesController.deleteNote); // Delete a specific Note - [Delete]

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

// Start server
app.listen(PORT, () => {
  console.log(`Express Server listening on port ${PORT}`);
});
