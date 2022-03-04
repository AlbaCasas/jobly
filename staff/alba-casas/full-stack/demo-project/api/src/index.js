require("dotenv").config();

const {
  mongoose: { connect, disconnect },
} = require("data");
const express = require("express");
const {
  registerUser,
  authenticateUser,
  retrieveUser,
  updatePassword,
  updateUser,
  deleteAccount,
  createNote,
  listNotes,
  listPublicNotes,
  retrieveNote,
  updateNote,
  deleteNote,
  listPublicNotesFromUser,
} = require("./handlers");

const cors = require("cors");

const {
  env: { PORT, MONGODB_URL },
} = process;

connect(MONGODB_URL)
  .then(() => console.log("db connected"))
  .then(() => {
    const server = express();

    server.use(cors());

    const jsonBodyParser = express.json();

    const api = express.Router();

    api.post("/users", jsonBodyParser, registerUser);

    api.post("/users/auth", jsonBodyParser, authenticateUser);

    api.get("/users", retrieveUser);

    api.patch("/users/change-password", jsonBodyParser, updatePassword);

    api.patch("/users", jsonBodyParser, updateUser);

    api.delete("/users", jsonBodyParser, deleteAccount);

    api.post("/notes", jsonBodyParser, createNote);

    api.get("/notes", listNotes);

    api.get("/notes/public", listPublicNotes);

    api.get("/notes/:noteId", retrieveNote);

    api.patch("/notes/:noteId", jsonBodyParser, updateNote);

    api.delete("/notes/:noteId", jsonBodyParser, deleteNote);

    api.get("/users/:userId/notes/public", listPublicNotesFromUser);

    server.use("/api", api);

    server.listen(PORT, () => console.log("server started"));
  });
