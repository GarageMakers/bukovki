const express = require("express");
const dotenv = require("dotenv");

const server = async () => {
  const app = express();
  const api = require("./api/routes")(app)
  try {
    await app
  } catch (error) {
    console.log(`Error in server.ts encountered`, error)
    return;
  }
  return app;
};

export default server;