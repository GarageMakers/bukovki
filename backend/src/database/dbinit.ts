import dotenv from "dotenv";
const typeorm = require("typeorm");
import {Achievements, Appeals, ManagmentCompanies, Users, UsersGroups} from "./Entities"

dotenv.config();
export const dbConnection = typeorm.createConnection({
  type: "postgres",
  host: process.env.PGHOST,
  port: parseInt(process.env.PGPORT, 10),
  username: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  database: process.env.PGDATABASE,
  entities: ["./*.ts"]
});

export default dbConnection;
