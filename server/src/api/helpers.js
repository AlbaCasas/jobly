const jwt = require('jsonwebtoken');

function createTokenWithUserId(userId) {
  const token = jwt.sign(
    { sub: userId, exp: Math.floor(Date.now() / 1000) + 60 * 60 },
    process.env.JWT_SECRET
  );

  return token;
}

function verifyTokenAndGetUserId(req) {
  const {
    headers: { authorization },
  } = req;

  const [, token] = authorization.split(' ');

  const payload = jwt.verify(token, process.env.JWT_SECRET);

  const { sub: userId } = payload;

  return userId;
}

module.exports = {
  createTokenWithUserId,
  verifyTokenAndGetUserId,
};
