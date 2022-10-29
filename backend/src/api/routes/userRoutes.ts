import dbConnection from "../../database/dbinit";
import { achievements, appeals, managmentcompanies, users, usersgroups } from "../../database/Entities"
const typeorm = require("typeorm")
const express = require("express")
const router = express.Router()

const usersRepository = dbConnection.getRepository(users);
const appealsRepository = dbConnection.getRepository(appeals);

router.get("/", async (req, res) => {
    const users = await usersRepository.find()
    res.send({usergroups: users})
});

router.get("/api/users", async (req, res) => {
    const users    = await usersRepository.find()
    res.send(users)
})

router.get("/api/users/:id", async (req, res)=>{
    const user    = await usersRepository.findOne({where: { id: req.params.id }})
    res.json({
        message:"success",
        payload: user
    })
})

router.post("/api/users", async (req, res) => {
    console.log("body", req.body)
    const user    = await usersRepository.create(req.body)
    const results = await usersRepository.save(user);
res.json({
message: "success",
payload: results
});
})

router.delete("/api/users/:id",async(req, res) => {
    const user   = await usersRepository.delete(req.params.id)
    res.json({
        message:"success",
    })
})

router.put("/api/users/:id", async(req, res) => {
    const user   = await usersRepository.findOne(req.params.id)
    usersRepository.merge(user, req.body);
    const result = await usersRepository.save(user);
    res.json({
        message:"success",
        payload:result
    })
})

module.exports = router;