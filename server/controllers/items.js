const Item = require('../models/Item');
const { ObjectId } = require('mongodb');

exports.list = async (req, res) => {
  try {
    const items = await Item.find();
    res.send({ items });
  } catch (err) {
    res.status(500).send();
  }
};

exports.create = async (req, res) => {
  const { title, artist, year, price, image } = req.body;
  const item = new Item({ title, artist, year, price, image });
  console.log('body', req.body);
  try {
    console.log(item);
    const doc = await item.save();
    res.send({ item: doc });
  } catch (err) {
    console.log(err);
    res.status(400).send(err.message);
  }
};

exports.read = async (req, res) => {
  if (!ObjectId.isValid(req.params.id)) {
    return res.status(404).send();
  }
  try {
    const item = await Item.findById(req.params.id);
    if (!item) {
      return res.status(404).send();
    }
    res.send({ item });
  } catch (err) {
    res.status(500).send();
  }
};
