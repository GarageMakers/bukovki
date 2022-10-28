import dotenv from "dotenv";

dotenv.config();

import { createConnection } from "typeorm";

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
