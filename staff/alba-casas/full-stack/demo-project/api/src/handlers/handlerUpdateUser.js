const { updateUser } = require("logic");
const jwt = require("jsonwebtoken");

const handlerUpdateUser = (req, res) => {
  try {
    const {
      headers: { authorization },
      body: { name, email },
    } = req;

    const [, token] = authorization.split(" ");

    const payload = jwt.verify(token, "mi super secreto");

    const { sub: id } = payload;

    updateUser(id, { name, email })
      .then(() => res.status(204).send())
      .catch((error) => res.status(400).json({ error: error.message }));
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = handlerUpdateUser;
