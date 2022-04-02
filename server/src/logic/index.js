const registerCandidate = require('./registerCandidate');
const authenticateUser = require('./authenticateUser');
const registerCompany = require('./registerCompany');
const retrieveUser = require('./retrieveUser');
const createJob = require('./createJob');
const listJobs = require('./listJobs');
const updateUser = require('./updateUser');
const updateUserPassword = require('./updateUserPassword');
const retrieveJob = require('./retrieveJob');
const deleteJob = require('./deleteJob');
const applyToJob = require('./applyToJob');
const updateJob = require('./updateJob');
const listJobsFromCompany = require('./listJobsFromCompany');
const listJobsFromCandidate = require('./listJobsFromCandidate');
const deleteCandidate = require('./deleteCandidate');
const deleteAccount = require('./deleteAccount');

module.exports = {
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
  deleteCandidate,
  deleteAccount,
};
