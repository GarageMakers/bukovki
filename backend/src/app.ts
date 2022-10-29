import server from "./server";
const dotenv = require("dotenv");

dotenv.config()

const startServer = async () => {
  try {
    const app = await server();
    app?.listen(process.env.EXPPORT, () => {
      console.log(
        `###################################\nServer listening on port: ${process.env.EXPPORT}\n###################################`
      )
    });
  } catch (err) {
    console.log("Error in app.ts WITH server")
    console.log(err)
  }
};

startServer();