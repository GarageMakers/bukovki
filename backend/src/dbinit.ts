import dotenv from "dotenv";
import { createConnection } from "typeorm";
import { Achievements, Appeals, ManagmentCompanies, Users, UsersGroups } from "./database/Entities";

dotenv.config();

const dbConnection = () => {
(async () => {
    // Initialize a connection pool against the database.
    const connection = await createConnection({
      type: "postgres",
      host: process.env.PGHOST,
      port: parseInt(process.env.PGPORT, 10),
      username: process.env.PGUSER,
      password: process.env.PGPASSWORD,
      database: process.env.PGDATABASE,
      entities: [ Users, ManagmentCompanies, UsersGroups, Appeals, Achievements ], 
    });
});
};

export default dbConnection;
