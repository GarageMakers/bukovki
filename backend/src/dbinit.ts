import dotenv from "dotenv";
const typeorm = require("typeorm");
import { Achievements, Appeals, ManagmentCompanies, Users, UsersGroups } from "./database/Entities";

dotenv.config();

console.log("dbinit.ts is running")
const dbConnection = () => {
(async () => {
    // Initialize a connection pool against the database.
    const connection = await typeorm.createConnection({
      type: "postgres",
      host: process.env.PGHOST,
      port: parseInt(process.env.PGPORT, 10),
      username: process.env.PGUSER,
      password: process.env.PGPASSWORD,
      database: process.env.PGDATABASE,
      entities: [ Users, ManagmentCompanies, UsersGroups, Appeals, Achievements ], 
    });
    console.log(connection);
});
};

dbConnection();
export default dbConnection;
