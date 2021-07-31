const jwt = require('jsonwebtoken');
const Player = require('../models/Player');

async function authenticatedMiddleware(req, res, next) {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) return res.sendStatus(401);

  try {
    const verifiedData = jwt.verify(token, process.env.JSON_SECRET);
    delete verifiedData.iat;

    const player = await Player.findOne({
      where: verifiedData,
    });

    if (!player) return res.sendStatus(401);

    req.player = player;
    next();
  } catch {
    res.sendStatus(401);
  }
}

module.exports = authenticatedMiddleware;
