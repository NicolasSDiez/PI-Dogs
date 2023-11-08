const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('temperaments', {

    UUID: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    }
  },
  {
    timestamps: false
  }
  );
};
