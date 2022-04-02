require('dotenv').config();

const express = require('express');
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
} = require('./handlers');

const api = express.Router();

api.post('/auth', authenticateUser);
api.post('/candidate', registerCandidate);
api.delete('/users', deleteAccount);
api.get('/candidate/job', listJobsFromCandidate);
api.post('/company', registerCompany);
api.get('/company/job', listJobsFromCompany);
api.post('/job', createJob);
api.patch('/job/apply/:jobId', applyToJob);
api.patch('/job/:jobId', updateJob);
api.get('/job', listJobs);
api.get('/job/:jobId', retrieveJob);
api.delete('/job/:jobId', deleteJob);
api.get('/users', retrieveUser);
api.patch('/users', updateUser);
api.patch('/users/change-password', updateUserPassword);

module.exports = api;
