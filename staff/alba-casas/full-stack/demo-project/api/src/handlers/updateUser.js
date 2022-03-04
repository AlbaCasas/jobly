const { updateUser } = require("logic");
const { verifyTokenAndGetUserId } = require("../helpers");

module.exports = (req, res) => {
  try {
    const { body: { name, email }} = req;

    const id = verifyTokenAndGetUserId(req)
    
    updateUser(id, { name, email })
      .then(() => res.status(204).send())
      .catch((error) => res.status(400).json({ error: error.message }));
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
