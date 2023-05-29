/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Users',
      [
        {
          name: 'r',
          email: 'r@r.ru',
          password:
            '$2b$10$q5P7Qag6i1OqRf1lfamrOOtiRnDW7kc1AVX7KUmMnABst9kShmJu6',
        },
        {
          name: 'v',
          email: 'v@v.ru',
          password:
            '$2b$10$q5P7Qag6i1OqRf1lfamrOOtiRnDW7kc1AVX7KUmMnABst9kShmJu6',
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      'Socks',
      [
        {
          colour: '#997373',
          pattern: 'gorokhoviy.png',
          image: 'yoda.png',
          sockname: 'Белый Йода Гороховый',
          author: 1,
        },
        {
          colour: '#990073',
          pattern: 'sovremenniy.png',
          image: 'llama.png',
          sockname: 'Синий Лама Полосатый',
          author: 1,
        },
        {
          colour: '#497373',
          pattern: 'nauchniy.png',
          image: 'cactus.png',
          sockname: 'Черный Кактус Клеточный',
          author: 1,
        },
        {
          colour: '#007373',
          pattern: 'zvezdniy.png',
          image: 'duck.png',
          sockname: 'Зеленый Уточка Звездный',
          author: 2,
        },
      ],
      {}
    );

    await queryInterface.bulkInsert(
      'Carts',
      [
        {
          user: 1,
          sock: 1,
          count: 1,
        },
        {
          user: 1,
          sock: 2,
          count: 1,
        },
        {
          user: 1,
          sock: 3,
          count: 1,
        },
        {
          user: 2,
          sock: 4,
          count: 1,
        },
      ],
      {}
    );

    await queryInterface.bulkInsert(
      'Favorites',
      [
        {
          user: 1,
          sock: 1,
        },
        {
          user: 1,
          sock: 2,
        },
        {
          user: 1,
          sock: 3,
        },
        {
          user: 1,
          sock: 4,
        },
        {
          user: 2,
          sock: 3,
        },
        {
          user: 2,
          sock: 4,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Carts', null, {});
  },
};
