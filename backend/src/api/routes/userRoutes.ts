import dbConnection from "../../database/dbinit";
import { achievements, appeals, managmentcompanies, users, usersgroups } from "../../database/Entities"
const typeorm = require("typeorm")
const express = require("express")
const router = express.Router()

const usersRepository = dbConnection.getRepository(users);

router.get("/", async (req, res) => {
    const users = await usersRepository.find()
    res.send({users_: users})
});

module.exports = router;