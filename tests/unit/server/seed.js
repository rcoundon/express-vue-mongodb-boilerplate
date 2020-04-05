const Item = require("../../../server/models/Item");
const { ObjectId } = require("mongodb");

const seedItems = [
  {
    title: "Test item 1",
    _id: new ObjectId()
  },
  {
    title: "Test item 2",
    _id: new ObjectId()
  }
];

const populateItems = async () => {
  await Item.deleteMany();
  await Item.insertMany(seedItems);
};

module.exports = { seedItems, populateItems };
