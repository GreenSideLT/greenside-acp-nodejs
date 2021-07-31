const md5 = require('md5');
const jwt = require('jsonwebtoken');
const Player = require('../models/Player');

async function login(req, res) {
  const credentials = req.body;

  const player = await Player.findOne({
    where: {
      Vardas: credentials.name,
      player_RegistrationPassword: md5(credentials.password),
    },
  });

  if (!player) {
    return res.status(404).json({
      status: 'error',
      message: 'Blogas prisijungimo Vardas_Pavardė arba slaptažodis.',
    });
  }

  const tokenPayload = {
    ID: player.ID,
    Vardas: player.Vardas,
    player_RegistrationPassword: player.player_RegistrationPassword,
    playerAdmin: player.playerAdmin,
  };

  const token = jwt.sign(tokenPayload, process.env.JSON_SECRET);

  return res.status(200).json({
    status: 'success',
    token,
    user: tokenPayload,
  });
}

function attempt(req, res) {
  return res.status(200).json(req.player);
}

exports.login = login;
exports.attempt = attempt;
