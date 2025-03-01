import express from "express"
import dotenv from "dotenv"
import conn from "./db.js"
import photoRoute from "./routes/photoRoute.js"

dotenv.config()

conn()

const app = express()

app.use(express.json())

const port = process.env.PORT

app.use("/photos",photoRoute)

app.get("/", (req, res) => {
    res.send("Index Sayfası 3")
})
app.listen(port, () => {
    console.log("Port çalıştı", port)
})