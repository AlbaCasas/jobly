require("dotenv").config();

const {
  mongoose: { connect, disconnect },
} = require("data");
const express = require("express");
const { registerCandidate } = require("./handlers");

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

    api.post("/candidate", jsonBodyParser, registerCandidate);

    server.use("/api", api);

    server.listen(PORT, () => console.log("server started"));
  });
