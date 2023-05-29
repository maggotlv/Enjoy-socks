/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Socks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      colour: {
        type: Sequelize.STRING,
        defaultValue: 'red',
      },
      pattern: {
        type: Sequelize.STRING,
      },
      image: {
        type: Sequelize.STRING,
      },
      sockname: {
        type: Sequelize.STRING,
      },
      author: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: { tableName: 'Users' },
          key: 'id',
        },
        onDelete: 'cascade',
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date(),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date(),
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Socks');
  },
};
