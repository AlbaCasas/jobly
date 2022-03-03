const {
  mongoose: { connect, disconnect },
} = require("data");
const express = require("express");
const {
  handlerRegister,
  handlerAuthenticateUser,
  handlerRetrieveUser,
  handlerUpdatePassword,
  handlerUpdateUser,
  handlerDeleteAccount,
  handlercreateNote,
  handlerListNotes,
  handlerListPublicNotes,
  handlerRetrieveNote,
  handlerUpdateNote,
  handlerDeleteNote,
  handlerListPublicNotesFromUser,
} = require("./handlers");
const cors = require("cors");

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

    api.patch("/users", jsonBodyParser, handlerUpdateUser);

    api.delete("/users", jsonBodyParser, handlerDeleteAccount);

    api.post("/notes", jsonBodyParser, handlercreateNote);

    api.get("/notes", handlerListNotes);

    api.get("/notes/public", handlerListPublicNotes);

    api.get("/notes/:noteId", handlerRetrieveNote);

    api.patch("/notes/:noteId", jsonBodyParser, handlerUpdateNote);

    api.delete("/notes/:noteId", jsonBodyParser, handlerDeleteNote);

    api.get("/users/:userId/notes/public", handlerListPublicNotesFromUser);

    server.use("/api", api);

    server.listen(8080, () => console.log("server started"));
  });
