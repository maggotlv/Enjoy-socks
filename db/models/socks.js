const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Socks extends Model {
    static associate(models) {
      this.belongsTo(models.Users, { foreignKey: 'author' });
      this.hasMany(models.Favorites, { foreignKey: 'sock' });
      this.hasMany(models.Carts, { foreignKey: 'sock' });
    }
  }
  Socks.init(
    {
      colour: DataTypes.STRING,
      pattern: DataTypes.STRING,
      image: DataTypes.STRING,
      sockname: DataTypes.STRING,
      author: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Socks',
    }
  );
  return Socks;
};
