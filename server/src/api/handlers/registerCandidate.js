const { registerCandidate } = require("../../logic");

module.exports = (req, res) => {
  try {
    const {
      body: { name, email, password, location, phone },
    } = req;

    registerCandidate(name, email, password, location, phone)
      .then(() => res.status(201).send())
      .catch((error) => res.status(400).json({ error: error.message }));
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
