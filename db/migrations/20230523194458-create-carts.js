/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Carts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      user: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: { tableName: 'Users' },
          key: 'id',
        },
        onDelete: 'cascade',
      },
      sock: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: { tableName: 'Socks' },
          key: 'id',
        },
        onDelete: 'cascade',
      },
      count: {
        type: Sequelize.INTEGER,
        defaultValue: 1,
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
    await queryInterface.dropTable('Carts');
  },
};
