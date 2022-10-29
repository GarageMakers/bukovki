import dotenv from "dotenv";
const typeorm = require("typeorm");
import {achievements, appeals, managmentcompanies, users, usersgroups} from "./Entities"

dotenv.config();
export const dbConnection = new typeorm.DataSource({
  type: "postgres",
  host: process.env.PGHOST,
  port: parseInt(process.env.PGPORT, 10),
  username: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  database: process.env.PGDATABASE,
  entities: [achievements, appeals, managmentcompanies, users, usersgroups]
});

dbConnection.initialize()
.then( async () => {
  console.log("Connected")
}
).catch((err)  => console.log(`${err}`));

export default dbConnection;
