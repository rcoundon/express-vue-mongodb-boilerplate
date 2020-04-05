const expect = require("expect");
const app = require("../../../server");
const request = require("supertest");
const Item = require("../../../server/models/Item");
const { seedItems, populateItems } = require("./seed");
const { ObjectId } = require("mongodb");

beforeEach(populateItems);

describe("POST /items", () => {
  it("should create a new item", async () => {
    const body = { title: "Test title" };
    const res = await request(app)
      .post("/items")
      .send(body)
      .expect(200);
    expect(res.body.item.title).toBe(body.title);
    const items = await Item.find();
    expect(items.length).toBe(seedItems.length + 1);
    expect(items[seedItems.length].title).toBe(body.title);
  });
  it("should not create a new item with invalid data", async () => {
    await request(app)
      .post("/items")
      .send({})
      .expect(400);
    const items = await Item.find();
    expect(items.length).toBe(seedItems.length);
  });
});

describe("GET /items", () => {
  it("should get all items", async () => {
    const res = await request(app)
      .get("/items")
      .expect(200);
    expect(res.body.items.length).toBe(seedItems.length);
  });
});

describe("GET /items/:id", () => {
  it("should return item doc", async () => {
    const res = await request(app)
      .get(`/items/${seedItems[0]._id.toHexString()}`)
      .expect(200);
    expect(res.body.item.title).toBe(seedItems[0].title);
  });
  it("should return 404 if item not found", async () => {
    await request(app)
      .get(`/items/${new ObjectId().toHexString()}`)
      .expect(404);
  });
  it("should return 404 for invalid ID", async () => {
    await request(app)
      .get("/items/123")
      .expect(404);
  });
});
