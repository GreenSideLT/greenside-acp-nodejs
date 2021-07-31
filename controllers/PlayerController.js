const { Op } = require('sequelize');
const Player = require('../models/Player');

exports.search = async (req, res) => {
  const { search } = req.params;
  const players = await Player.findAll({
    where: {
      [Op.or]: [
        {
          Vardas: {
            [Op.like]: `${search}%`,
          },
        },
        {
          player_LastLoginIP: {
            [Op.like]: `${search}%`,
          },
        },
        {
          player_RegistrationIP: {
            [Op.like]: `${search}%`,
          },
        },
      ],
    },
    limit: 5,
  });

  res.status(200).json(players);
};

exports.show = async (req, res) => {
  const { name } = req.params;

  const player = await Player.findOne({
    where: {
      Vardas: name,
    },
  });

  res.status(200).json(player);
};
