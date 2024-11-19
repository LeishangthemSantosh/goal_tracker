import db from "./init.js"

const createGoalTableQuery = () => {
  const sql = `CREATE TABLE IF NOT EXISTS goals (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    title TEXT NOT NULL,
                    description TEXT NULL,
                    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
                )`;
  return sql;
};

const createDataBase = () => {
    db.run(createGoalTableQuery(), (err) => {
        if (err) {
          console.log("Create error", err);
        } else {
            console.log("DB Created");
            
        }
      });
}

createDataBase()