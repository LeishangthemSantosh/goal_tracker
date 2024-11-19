import sqlite3 from "sqlite3"
import path from "path"

const db_path = path.resolve("my_goal.db")

const db = new sqlite3.Database(db_path, (err) => {
    if(err) {
        console.log("Error on db connection", err)
    }
    else {
        console.log("DB Successfully connected")
    };
})

export default db;