const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Favorites extends Model {
    static associate(models) {
      this.belongsTo(models.Users, { foreignKey: 'user' });
      this.belongsTo(models.Socks, { foreignKey: 'sock' });
    }
  }
  Favorites.init(
    {
      user: DataTypes.INTEGER,
      sock: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Favorites',
    }
  );
  return Favorites;
};
