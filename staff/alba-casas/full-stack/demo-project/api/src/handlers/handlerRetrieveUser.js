const { retrieveUser } = require("logic");
const jwt = require("jsonwebtoken");

const handlerRetrieveUser = (req, res) => {
  try {
    const {
      headers: { authorization },
    } = req;

    const [, token] = authorization.split(" ");

    const payload = jwt.verify(token, "mi super secreto");

    const { sub: id } = payload;

    retrieveUser(id)
      .then((user) => res.json(user))
      .catch((error) => res.status(400).json({ error: error.message }));
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = handlerRetrieveUser;
