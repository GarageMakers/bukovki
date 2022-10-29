import dbConnection from "../../database/dbinit";
import { achievements, appeals, managmentcompanies, users, usersgroups } from "../../database/Entities"
const typeorm = require("typeorm")
const express = require("express")
const router = express.Router()

const appealsRepository = dbConnection.getRepository(appeals);

router.get("/api/appeals", async (req, res) => {
    const appeals = await appealsRepository.find()
    res.send(appeals)
});

router.get("/api/appeals/:id", async (req, res) => {
    const appeal = await appealsRepository.findOne({where: { id: req.params.appealid }})
    res.json({
        message:"success",
        payload: appeal
    })
})

router.post("/api/appeals", async (req, res) => {
    console.log("body", req.body)
    const appeal = await appealsRepository.create(req.body)
    const results = await appealsRepository.save(appeal);
res.json({
message: "success",
payload: results
});
})

router.delete("/api/appeals/:id",async(req, res) => {
    const appeal = await appealsRepository.delete(req.params.id)
    res.json({
        message:"success",
    })
})

router.put("/api/appeals/:id", async(req, res) => {
    const appeal = await appealsRepository.findOne(req.params.id)
    appealsRepository.merge(appeal, req.body);
    const result = await appealsRepository.save(appeal);
    res.json({
        message:"success",
        payload:result
    })
})

module.exports = router;