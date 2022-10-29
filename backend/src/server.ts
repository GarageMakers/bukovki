const express = require("express");
const dotenv = require("dotenv");
// import { routedApp } from "./api/routes/commonRoutes" 

const server = async () => {
  const app = express()
  const api = require("./api/routes/commonRoutes")
  try {
    await app
  } catch (error) {
    console.log(`Error in server.ts encountered`, error)
    return;
  }
  return app;
};

export default server;