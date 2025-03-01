import mongoose from "mongoose";

const conn = () => {
    mongoose.connect(process.env.DB_URI, {
        dbName: "photo-app",
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => {
        console.log("db connected")
    }).catch((err) => {
        console.log("db error",err)
    })
}

export default conn