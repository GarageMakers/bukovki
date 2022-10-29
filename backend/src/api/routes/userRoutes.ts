import dbConnection from "../../database/dbinit";
import { Achievements, Appeals, ManagmentCompanies, Users, UsersGroups } from "../../database/Entities"
const typeorm = require("typeorm")
const express = require("express")
const router = express.Router()

const usersRepository = dbConnection.getRepository(Users);

router.get("/", async (req, res) => {
    // dbConnection.connect()
    const users = await usersRepository.find()
    res.send({userGroups: `${users}`})
    // dbConnection.release()
});

module.exports = router;