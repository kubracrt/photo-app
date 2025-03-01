import express from "express"

const app = express()

const port = 5000

app.get("/", (req, res) => {
    res.send("Index Sayfası 3")
})
app.listen(port, () => {
    console.log("Port çalıştı", port)
})