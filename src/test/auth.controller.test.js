// src/test/auth.controller.test.js
const request = require("supertest");
const { app } = require("../../server");
const jwt = require("jsonwebtoken");
const config = require("../config/index");
const mockingoose = require("mockingoose");
const User = require("../api/user/users.model");
const Transporter = require("../api/transporteur/transporteur.model");

// Ajoutez ces lignes pour éviter l'erreur TextEncoder
const { TextEncoder, TextDecoder } = require('util');
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

describe("Auth Controller", () => {
  let token;
  const USER_ID = "507f1f77bcf86cd799439011";
  const TRANSPORTER_ID = "507f191e810c19729de860ea";

  const MOCK_USER = {
    _id: USER_ID,
    nom: "John",
    prenom: "Doe",
    email: "john.doe@example.com",
    password: "$2b$10$EixZaYVK1fsbw1ZfbX3OXePaWxn96p36bCF7d24/jlxdhl9C/4Mcm", // hashed 'password'
    role: "client",
    ville: "Paris"
  };

  const MOCK_TRANSPORTER = {
    _id: TRANSPORTER_ID,
    nom: "Jane",
    prenom: "Doe",
    email: "jane.doe@example.com",
    password: "$2b$10$EixZaYVK1fsbw1ZfbX3OXePaWxn96p36bCF7d24/jlxdhl9C/4Mcm", // hashed 'password'
    role: "transporter",
    ville: "Marseille",
    vehicle: "Van"
  };

  beforeEach(() => {
    token = jwt.sign({ userId: USER_ID, role: "client" }, config.secretJwtToken);
    mockingoose(User).toReturn(MOCK_USER, "findOne");
    mockingoose(User).toReturn(MOCK_USER, "save");
    mockingoose(Transporter).toReturn(MOCK_TRANSPORTER, "findOne");
    mockingoose(Transporter).toReturn(MOCK_TRANSPORTER, "save");
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  describe("POST /api/auth/login", () => {
    it("should return a token for valid credentials", async () => {
      const res = await request(app)
        .post("/api/auth/login")
        .send({ email: "john.doe@example.com", password: "password" });

      expect(res.statusCode).toEqual(200);
      expect(res.body).toHaveProperty("token");
    });

    it("should return 401 for invalid credentials", async () => {
      mockingoose(User).toReturn(null, "findOne");
      const res = await request(app)
        .post("/api/auth/login")
        .send({ email: "wrong@example.com", password: "wrongpassword" });

      expect(res.statusCode).toEqual(401);
      expect(res.body).toHaveProperty("message", "Email ou password incorrect");
    });
  });

  describe("POST /api/clients/register", () => {
    it("should register a new client and return a token", async () => {
      const res = await request(app)
        .post("/api/clients/register")
        .send({
          nom: "Jane",
          prenom: "Doe",
          email: "jane.doe@example.com",
          password: "password",
          ville: "Paris"
        });

      expect(res.statusCode).toEqual(201);
      expect(res.body).toHaveProperty("token");
    });

    it("should return 400 for missing fields", async () => {
      const res = await request(app)
        .post("/api/clients/register")
        .send({ nom: "Jane", prenom: "Doe", email: "jane.doe@example.com" });

      expect(res.statusCode).toEqual(400);
    });
  });

  describe("POST /api/transporters/register", () => {
    it("should register a new transporter and return a token", async () => {
      const res = await request(app)
        .post("/api/transporters/register")
        .send({
          nom: "John",
          prenom: "Doe",
          email: "john.doe@example.com",
          password: "password",
          ville: "Marseille",
          vehicle: "Van"
        });

      expect(res.statusCode).toEqual(201);
      expect(res.body).toHaveProperty("token");
    });

    it("should return 400 for missing fields", async () => {
      const res = await request(app)
        .post("/api/transporters/register")
        .send({ nom: "John", prenom: "Doe", email: "john.doe@example.com" });

      expect(res.statusCode).toEqual(400);
    });
  });
});
