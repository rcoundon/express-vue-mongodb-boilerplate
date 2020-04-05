const User = require("../server/models/user");
const faker = require("faker");

const users = [
  {
    name: faker.name.firstName(),
    email: "admin@test.com",
    password: "test1234",
    role: "admin"
  },
  {
    name: faker.name.firstName(),
    email: "user@test.com",
    password: "test1234"
  }
];

exports.users = async () => {
  await User.deleteMany({});
  await new User(users[0]).save();
  await new User(users[1]).save();
};
