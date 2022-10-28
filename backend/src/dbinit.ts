import dotenv from "dotenv";
import { createConnection } from "typeorm";

dotenv.config();

(async () => {
    // Initialize a connection pool against the database.
    const connection = await createConnection({
      type: "postgres",
      host: "localhost",
      port: 5432,
      username: "postgres",
      password: process.env.PGPASSWORD,
      database: process.env.PGDATABASE,
    });
});
