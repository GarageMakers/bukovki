const express = require("express");
const dotenv = require("dotenv");

const usersRouter = require("./api/routes/userRoutes")
const appealsRouter = require("./api/routes/appealsRoutes")

const server = async () => {
  const app = express()
  app.use('/', usersRouter)
  app.use('/', appealsRouter)
  try {
    await app
  } catch (error) {
    console.log(`Error in server.ts encountered`, error)
    return;
  }
  return app;
};

export default server;