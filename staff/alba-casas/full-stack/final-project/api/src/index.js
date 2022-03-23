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
  listJobsFromCandidate,
  deleteAccount,
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

    api.post("/auth", jsonBodyParser, authenticateUser);
    api.post("/candidate", jsonBodyParser, registerCandidate);
    api.delete("/users", jsonBodyParser, deleteAccount);
    api.get("/candidate/job", jsonBodyParser, listJobsFromCandidate);
    api.post("/company", jsonBodyParser, registerCompany);
    api.get("/company/job", listJobsFromCompany);
    api.post("/job", jsonBodyParser, createJob);
    api.patch("/job/apply/:jobId", jsonBodyParser, applyToJob);
    api.patch("/job/:jobId", jsonBodyParser, updateJob);
    api.get("/job", listJobs);
    api.get("/job/:jobId", retrieveJob);
    api.delete("/job/:jobId", jsonBodyParser, deleteJob);
    api.get("/users", jsonBodyParser, retrieveUser);
    api.patch("/users", jsonBodyParser, updateUser);
    api.patch("/users/change-password", jsonBodyParser, updateUserPassword);
    server.use("/api", api);

    server.listen(PORT, () => console.log("server started"));
  });
