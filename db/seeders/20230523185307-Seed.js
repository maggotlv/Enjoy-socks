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
      {},
    );
    await queryInterface.bulkInsert('Socks', [{
      colour: 'Белый',
      pattern: 'Гороховый',
      image: 'Йода',
      sockname: 'Белый Йода Гороховый',
      author: 1,
    },
    {
      colour: 'Синий',
      pattern: 'Полосатый',
      image: 'Лама',
      sockname: 'Синий Лама Полосатый',
      author: 1,
    },
    {
      colour: 'Черный',
      pattern: 'Клеточный',
      image: 'Кактус',
      sockname: 'Черный Кактус Клеточный',
      author: 1,
    },
    {
      colour: 'Зеленый',
      pattern: 'Звездный',
      image: 'Уточка',
      sockname: 'Зеленый Уточка Звездный',
      author: 2,
    },
    ], {});

    await queryInterface.bulkInsert('Carts', [{
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
    }], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Carts', null, {});
  },
};
