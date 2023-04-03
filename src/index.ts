import express from "express";

const app = express()

app.get("/", (_req, res, _next) => {
    res.send("Review Skill is live")
})

app.listen(300, () => {
    console.log(`Server running on port 3000`)
})