const request = require("supertest");
const { app } = require("../../server");
const jwt = require("jsonwebtoken");
const config = require("../config/index");
const mockingoose = require("mockingoose");
const User = require("../api/user/users.model");
const usersService = require("../api/user/users.service");

describe("Tester API Clients", () => {
  let token;
  const USER_ID = "fake_user_id";
  const MOCK_DATA = [
    {
      _id: USER_ID,
      nom: "Ana",
      prenom: "Smith",
      email: "ana.smith@example.com",
      password: "azertyuiop",
      role: "client",
      ville: "Paris"
    }
  ];
  const MOCK_DATA_CREATED = {
    _id: "new_user_id",
    nom: "Test",
    prenom: "User",
    email: "test.user@example.com",
    password: "azertyuiop",
    role: "client",
    ville: "Paris"
  };

  beforeEach(() => {
    token = jwt.sign({ userId: USER_ID }, config.secretJwtToken);
    mockingoose(User).toReturn(MOCK_DATA, "find");
    mockingoose(User).toReturn(MOCK_DATA_CREATED, "save");
  });

  test("[Clients] Get All", async () => {
    const res = await request(app)
      .get("/api/clients")
      .set("x-access-token", token);
    expect(res.status).toBe(200);
    expect(res.body.length).toBeGreaterThan(0);
  });

  test("[Clients] Create Client", async () => {
    const res = await request(app)
      .post("/api/clients")
      .send(MOCK_DATA_CREATED)
      .set("x-access-token", token);
    expect(res.status).toBe(201);
    expect(res.body.nom).toBe(MOCK_DATA_CREATED.nom);
  });

  test("Est-ce usersService.getAll", async () => {
    const spy = jest
      .spyOn(usersService, "getAll")
      .mockImplementation(() => "test");
    await request(app).get("/api/clients").set("x-access-token", token);
    expect(spy).toHaveBeenCalled();
    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveReturnedWith("test");
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });
});
