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
  updateUser,
  updateUserPassword,
  retrieveJob,
  deleteJob,
  applyToJob,
  updateJob,
  listJobsFromCompany,
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
    api.patch("/job/:jobId", jsonBodyParser, applyToJob);
    api.get("/job", listJobs);
    api.patch("/users", jsonBodyParser, updateUser);
    api.patch("/users/change-password", jsonBodyParser, updateUserPassword);
    api.get("/job/:jobId", retrieveJob);
    api.delete("/job/:jobId", jsonBodyParser, deleteJob);
    api.get("/company/job", listJobsFromCompany);
    api.patch("/company/job/:jobId", jsonBodyParser, updateJob);

    server.use("/api", api);

    server.listen(PORT, () => console.log("server started"));
  });
