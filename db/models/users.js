const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    static associate(models) {
      this.hasMany(models.Socks, { foreignKey: 'author' });
      this.hasMany(models.Favorites, { foreignKey: 'user' });
      this.hasMany(models.Carts, { foreignKey: 'user' });
    }
  }
  Users.init(
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Users',
    }
  );
  return Users;
};
