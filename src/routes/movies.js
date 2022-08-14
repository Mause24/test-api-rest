const { Router } = require("express")
const router = Router()

const movies = [
    {
        id: 1,
        name: "Titanic",
    },
    {
        id: 2,
        name: "Forrest Gump",
    },
    {
        id: 3,
        name: "How to train your Dragon?",
    },
]

//Routes

router.get("/", (req, res) => {
    res.json(movies)
})

module.exports = router
