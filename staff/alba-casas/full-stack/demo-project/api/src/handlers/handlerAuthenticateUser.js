const { authenticateUser } = require("logic");
const jwt = require("jsonwebtoken");

const handlerAuthenticateUser = (req, res) => {
  try {
    const {
      body: { email, password },
    } = req;

    authenticateUser(email, password)
      .then((id) => {
        const token = jwt.sign(
          { sub: id, exp: Math.floor(Date.now() / 1000) + 60 * 60 },
          "mi super secreto"
        );

        res.json({ token });
      })
      .catch((error) => res.status(400).json({ error: error.message }));
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = handlerAuthenticateUser;
