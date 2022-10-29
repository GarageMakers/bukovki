const express = require("express");
const dotenv = require("dotenv");

const usersRouter = require("./api/routes/userRoutes")

const server = async () => {
  const app = express()
  app.use('/', usersRouter)
  try {
    await app
  } catch (error) {
    console.log(`Error in server.ts encountered`, error)
    return;
  }
  return app;
};

export default server;