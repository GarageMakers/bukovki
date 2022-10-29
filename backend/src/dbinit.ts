import dotenv from "dotenv";
import { createConnection } from "typeorm";

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
    });
});
};

export default dbConnection;
