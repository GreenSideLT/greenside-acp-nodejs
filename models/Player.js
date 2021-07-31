const { Model, DataTypes, INTEGER } = require('sequelize');
const sequelize = require('../database');


class Player extends Model {

}

Player.init({
    ID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    gID: {
        type: DataTypes.INTEGER,
    },
    Vardas: {
        type: DataTypes.STRING,
    },
    player_RegistrationPassword: {
        type: DataTypes.STRING,
    },
    playerAdmin: {
        type: DataTypes.INTEGER,
    },
    player_LastLoginIP: {
        type: DataTypes.STRING,
    },
    player_RegistrationIP: {
        type: DataTypes.STRING,
    }
}, {
    sequelize,
    createdAt: false,
    updatedAt: false,
    freezeTableName: 'true',
    tableName: 'players',
});




// try {
//     (async () => {
//         await Player.findOne({where: {Vardas: 'Aivaras_Vercetti'}});
//     })();
//     } catch(e) {
//         console.log(e);
//     }



// const Player = sequelize.define('Player', {
//     Vardas: {
//         type: DataTypes.STRING,
//         allowNull: false,
//     },
//     player_RegistrationPassword: {
//         type: DataTypes.STRING,
//         allowNull: false,
//     },
// });

// try {
// (async () => {
//     await Player.findOne({where: {Vardas: 'Aivaras_Vercetti'}});
// })();
// } catch(e) {
//     console.log(e);
// }
// console.log(Player === sequelize.model.Player);

// class Player extends Model {
    
// }
// Player.init({}, {sequelize});

module.exports = Player;