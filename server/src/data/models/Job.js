const { model } = require("mongoose");
const { job } = require("../schemas");

const Job = model("Job", job);

module.exports = Job;
