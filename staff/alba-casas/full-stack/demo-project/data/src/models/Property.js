const { model } = require("mongoose");
const { property } = require("../schemas");

const Property = model("Property", property);

module.exports = Property;
