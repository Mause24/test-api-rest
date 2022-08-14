const { Router } = require("express")
const router = Router()

//Routes

router.get("/", (req, res) => {
    res.json({ greetings: "Hola gente" })
})

module.exports = router
