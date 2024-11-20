import express from "express";
import db from "./database/init.js";
import methodOverride from "method-override";
import path from "path"
import router from "./routes/index.js";

const app = express()

app.set('view engine', 'ejs')
app.set('views', path.join('template'));

app.use(express.json())
app.use(express.urlencoded({ "extended": true }))

app.use(methodOverride("_method"));

app.get("/", (req, res) => {
    res.send("Works")
})
app.use("/goal", router)

app.listen(80, () => {
    console.log("Server started");
})