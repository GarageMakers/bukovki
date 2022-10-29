const dotenv = require("dotenv");
const typeorm = require("typeorm");
import { Achievements, Appeals, ManagmentCompanies, Users, UsersGroups } from "./database/Entities";

dotenv.config();

console.log("dbinit.ts is running")
function dbConnection () {
(async () => {
    // Initialize a connection pool against the database.
    try {
      console.log("dbinit.ts is trying to connect to the database")
    const connection = await typeorm.createConnection({
      type: "postgres",
      host: process.env.PGHOST,
      port: parseInt(process.env.PGPORT, 10),
      username: process.env.PGUSER,
      password: process.env.PGPASSWORD,
      database: process.env.PGDATABASE,
      entities: [ Users, ManagmentCompanies, UsersGroups, Appeals, Achievements ], 
    });
  } catch (error) {
    console.log("Error in dbinit.ts", error)
  }
});
};

export default dbConnection;
