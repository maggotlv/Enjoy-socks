const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Carts extends Model {
    static associate(models) {
      this.belongsTo(models.Users, { foreignKey: 'user' });
      this.belongsTo(models.Socks, { foreignKey: 'sock' });
    }
  }
  Carts.init(
    {
      user: DataTypes.INTEGER,
      sock: DataTypes.INTEGER,
      count: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Carts',
    }
  );
  return Carts;
};
