const { Router } = require("express")
const router = Router()

//Routes

router.get("/", (req, res) => {
    res.json({ greetings: "Hola gente" })
})

router.use("/api/movies", require("./movies"))

module.exports = router
