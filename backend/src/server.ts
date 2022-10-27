const express = require("express");
const dotenv = require("dotenv");

const server = async () => {
  const app = express();
  try {
    await app
    return app;
  } catch (err) {
    console.log(`Error in server.ts encountered`)
    console.log(err)
    return err;
  }
};

export default server