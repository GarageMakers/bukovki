const express = require("express");
const dotenv = require("dotenv");

const server = async () => {
  const app = express();
  try {
    await app
    return app;
  } catch (error) {
    console.log(`Error in server.ts encountered`, error)
  }
};

export default server