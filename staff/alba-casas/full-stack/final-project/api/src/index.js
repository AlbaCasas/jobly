require("dotenv").config();

const {
  mongoose: { connect, disconnect },
} = require("data");
const express = require("express");
const {
  registerCandidate,
  authenticateUser,
  registerCompany,
  retrieveUser,
  createJob,
  listJobs,
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

    api.post("/candidate", jsonBodyParser, registerCandidate);
    api.post("/company", jsonBodyParser, registerCompany);
    api.post("/auth", jsonBodyParser, authenticateUser);
    api.get("/users", jsonBodyParser, retrieveUser);
    api.post("/job", jsonBodyParser, createJob);
    api.get("/job", listJobs);

    server.use("/api", api);

    server.listen(PORT, () => console.log("server started"));
  });
