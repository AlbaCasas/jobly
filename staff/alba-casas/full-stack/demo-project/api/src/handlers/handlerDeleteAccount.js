const { deleteUser } = require("logic");
const jwt = require("jsonwebtoken");

const handlerDeleteAccount = (req, res) => {
  try {
    const {
      headers: { authorization },
      body: { password },
    } = req;

    const [, token] = authorization.split(" ");

    const payload = jwt.verify(token, "mi super secreto");

    const { sub: userId } = payload;

    deleteUser(userId, password)
      .then(() => res.status(204).send())
      .catch((error) => res.status(400).json({ error: error.message }));
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = handlerDeleteAccount;
