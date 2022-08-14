const express = require("express")
const morgan = require("morgan")
const cors = require("cors")

const app = express()
const corsOpts = {
    origin: "*",

    methods: ["GET", "POST"],

    allowedHeaders: ["Content-Type"],
}

//Config

app.set("port", process.env.PORT || 3000)
app.set("json spaces", 2)

//Middlewares

app.use(morgan("dev"))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors(corsOpts))

//Routes
app.use(require("./routes/index"))

//Starting the server

app.listen(app.get("port"), () => {
    console.log(`Server on port ${app.get("port")}`)
})
