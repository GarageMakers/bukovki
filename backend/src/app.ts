import server from "./server";
import dbConnection from "./dbinit";
const dotenv = require("dotenv");

dotenv.config()

const startServer = async () => {
  try {
    dbConnection()
    console.log(
      `###################################\nDataBase connected on port: ${process.env.PGPORT}\n###################################`
    )
  } catch(err) {
    console.log("Errot in app.ts WITH dbconnection")
  }
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