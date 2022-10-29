import dotenv from "dotenv";
const typeorm = require("typeorm");
import {Achievements, Appeals, ManagmentCompanies, Users, UsersGroups} from "./Entities"

dotenv.config();
export const dbConnection = new typeorm.DataSource({
  type: "postgres",
  host: process.env.PGHOST,
  port: parseInt(process.env.PGPORT, 10),
  username: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  database: process.env.PGDATABASE,
  entities: [Achievements, Appeals, ManagmentCompanies, Users, UsersGroups]
});

dbConnection.initialize()
.then( async () => {
  console.log("Connected")
}
).catch((err)  => console.log(` VLAD LOH${err}`));

export default dbConnection;