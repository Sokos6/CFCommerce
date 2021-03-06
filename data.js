var faker = require('faker');
var data = [];
var categories = ['Geek', 'Pyrex', 'Books', 'Movies'];
faker.seed(100);
for (let i = 1; i <= 503; i++) {
  var category = faker.helpers.randomize(categories);
  data.push({
    id: i,
    name: faker.commerce.productName(),
    category: category,
    description: `${category}: ${faker.lorem.sentence(3)}`,
    price: Number(faker.commerce.price()),
  });
}

module.exports = function () {
  return {
    categories: categories,
    products: data,
    orders: [],
  };
};

// module.exports = function () {
//   return {
//     categories: categories,
//     prodcuts: data,
//     orders: [],

//     categories: ['Geek', 'Pyrex', 'Books'],
//     products: [
//       {
//         id: 1,
//         name: 'Autumn Harvest',
//         category: 'Pyrex',
//         description: 'Vintage Pyrex',
//         price: 40,
//       },
//       {
//         id: 2,
//         name: 'It',
//         category: 'Books',
//         description: 'Stephen King It',
//         price: 20,
//       },
//       {
//         id: 3,
//         name: 'TMNT',
//         category: 'Geek',
//         description: 'Turtles in a half shell',
//         price: 44,
//       },
//       {
//         id: 4,
//         name: 'Friendship Bowl',
//         category: 'Pyrex',
//         description: 'One of a kind',
//         price: 1000,
//       },
//       {
//         id: 5,
//         name: 'Nintendo',
//         category: 'Geek',
//         description: 'NES Games for sale',
//         price: 79500,
//       },
//       {
//         id: 6,
//         name: 'Optimus Prime',
//         category: 'Geek',
//         description: 'For Cybertron',
//         price: 16,
//       },
//       {
//         id: 7,
//         name: 'The Great Mouse Detective',
//         category: 'Books',
//         description: 'One of my favorite books!',
//         price: 6,
//       },
//       {
//         id: 8,
//         name: 'The Brave Little Toaster',
//         category: 'Geek',
//         description: 'Time flie by in the city of light!',
//         price: 9,
//       },
//       {
//         id: 9,
//         name: 'Clean Code',
//         category: 'Books',
//         description: 'Simply the Best',
//         price: 20,
//       },
//     ],
//     orders: [],
//   };
// };
