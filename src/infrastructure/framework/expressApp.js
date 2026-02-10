// Express (Node.js) implementation
const express = require("express");
const UserService = require("../../application/userService");
const UserRepositoryMongo = require("../db/userRepository.mongo");
// const UserRepositoryPostgres = require('../db/userRepository.postgres'); // Uncomment to use Postgres

const app = express();
app.use(express.json());

// Choose DB implementation
const userRepository = new UserRepositoryMongo();
// const userRepository = new UserRepositoryPostgres(); // Uncomment to use Postgres
const userService = new UserService(userRepository);

app.post("/users", async (req, res) => {
  const { name, email } = req.body;
  const user = await userService.createUser(name, email);
  res.json(user);
});

app.get("/users", async (req, res) => {
  const users = await userService.getUsers();
  res.json(users);
});

module.exports = app;
