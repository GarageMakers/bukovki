import server from "./server";
import dbConnection from "./dbinit";
require('dotenv').config();

const startServer = async () => {

    dbConnection()
    console.log(
      `\nDataBase connected on port: ${process.env.PGPORT}\n`
    )
    const app = await server();
    app?.listen(process.env.EXPPORT, () => {
      console.log(
        `\nServer listening on port: ${process.env.EXPPORT}\n`
      )
    });
};

startServer();