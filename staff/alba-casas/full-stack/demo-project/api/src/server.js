const {
  mongoose: { connect, disconnect },
} = require("data");
const express = require("express");
const {
  handlerRegister,
  handlerAuthenticateUser,
  handlerRetrieveUser,
  handlerUpdatePassword,
} = require("./handlers");
const {
  createNote,
  listNotes,
  updateNote,
  deleteNote,
  listPublicNotes,
  listPublicNotesFromUser,
  deleteUser,
  updateUser,
  retrieveNote,
} = require("logic");
const cors = require("cors");
const jwt = require("jsonwebtoken");

connect("mongodb://localhost:27017/demo-db")
  .then(() => console.log("db connected"))
  .then(() => {
    const server = express();

    server.use(cors());

    const jsonBodyParser = express.json();

    const api = express.Router();

    api.post("/users", jsonBodyParser, handlerRegister);

    api.post("/users/auth", jsonBodyParser, handlerAuthenticateUser);

    api.get("/users", handlerRetrieveUser);

    api.patch("/users/change-password", jsonBodyParser, handlerUpdatePassword);

    api.patch("/users", jsonBodyParser, (req, res) => {
      try {
        const {
          headers: { authorization },
          body: { name, email },
        } = req;

        const [, token] = authorization.split(" ");

        const payload = jwt.verify(token, "mi super secreto");

        const { sub: id } = payload;

        updateUser(id, { name, email })
          .then(() => res.status(204).send())
          .catch((error) => res.status(400).json({ error: error.message }));
      } catch (error) {
        res.status(400).json({ error: error.message });
      }
    });

    api.delete("/users", jsonBodyParser, (req, res) => {
      try {
        const {
          headers: { authorization },
          body: { password },
        } = req;

        const [, token] = authorization.split(" ");

        const payload = jwt.verify(token, "mi super secreto");

        const { sub: userId } = payload;

        deleteUser(userId, password)
          .then(() => res.status(204).send())
          .catch((error) => res.status(400).json({ error: error.message }));
      } catch (error) {
        res.status(400).json({ error: error.message });
      }
    });

    api.post("/notes", jsonBodyParser, (req, res) => {
      try {
        const {
          headers: { authorization },
          body: { text, color },
        } = req;

        const [, token] = authorization.split(" ");

        const payload = jwt.verify(token, "mi super secreto");

        const { sub: id } = payload;

        createNote(id, text, color)
          .then(() => res.status(201).send())
          .catch((error) => res.status(400).json({ error: error.message }));
      } catch (error) {
        res.status(400).json({ error: error.message });
      }
    });

    api.get("/notes", (req, res) => {
      try {
        const {
          headers: { authorization },
        } = req;

        const [, token] = authorization.split(" ");

        const payload = jwt.verify(token, "mi super secreto");

        const { sub: id } = payload;

        listNotes(id)
          .then((notes) => res.json(notes))
          .catch((error) => res.status(400).json({ error: error.message }));
      } catch (error) {
        res.status(400).json({ error: error.message });
      }
    });

    api.get("/notes/public", (req, res) => {
      try {
        listPublicNotes()
          .then((notes) => res.json(notes))
          .catch((error) => {
            res.status(400).json({ error: error.message });
          });
      } catch (error) {
        res.status(400).json({ error: error.message });
      }
    });

    api.get("/notes/:noteId", (req, res) => {
      try {
        const {
          headers: { authorization },
          params: { noteId },
        } = req;

        const [, token] = authorization.split(" ");

        const payload = jwt.verify(token, "mi super secreto");

        const { sub: userId } = payload;

        retrieveNote(userId, noteId)
          .then((note) => res.json(note))
          .catch((error) => res.status(400).json({ error: error.message }));
      } catch (error) {
        res.status(400).json({ error: error.message });
      }
    });

    api.patch("/notes/:noteId", jsonBodyParser, (req, res) => {
      try {
        const {
          headers: { authorization },
          body: { text, color, public },
          params: { noteId },
        } = req;

        const [, token] = authorization.split(" ");

        const payload = jwt.verify(token, "mi super secreto");

        const { sub: userId } = payload;

        updateNote(userId, noteId, text, color, public)
          .then(() => res.status(204).send())
          .catch((error) => res.status(400).json({ error: error.message }));
      } catch (error) {
        res.status(400).json({ error: error.message });
      }
    });

    api.delete("/notes/:noteId", jsonBodyParser, (req, res) => {
      try {
        const {
          headers: { authorization },
          params: { noteId },
        } = req;

        const [, token] = authorization.split(" ");

        const payload = jwt.verify(token, "mi super secreto");

        const { sub: userId } = payload;

        deleteNote(userId, noteId)
          .then(() => res.status(204).send())
          .catch((error) => res.status(400).json({ error: error.message }));
      } catch (error) {
        res.status(400).json({ error: error.message });
      }
    });

    api.get("/users/:userId/notes/public", (req, res) => {
      try {
        const {
          params: { userId },
        } = req;

        listPublicNotesFromUser(userId)
          .then((notes) => res.json(notes))
          .catch((error) => res.status(400).json({ error: error.message }));
      } catch (error) {
        res.status(400).json({ error: error.message });
      }
    });

    server.use("/api", api);

    server.listen(8080, () => console.log("server started"));
  });
