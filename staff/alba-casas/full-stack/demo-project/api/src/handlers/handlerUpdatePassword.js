const { updateUserPassword } = require("logic");
const jwt = require("jsonwebtoken");

const handlerUpdatePassword = (req, res) => {
  try {
    const {
      headers: { authorization },
      body: { currPassword, newPassword },
    } = req;

    const [, token] = authorization.split(" ");

    const payload = jwt.verify(token, "mi super secreto");

    const { sub: id } = payload;

    updateUserPassword({ id, currPassword, newPassword })
      .then(() => res.status(204).send())
      .catch((error) => res.status(400).json({ error: error.message }));
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = handlerUpdatePassword;
