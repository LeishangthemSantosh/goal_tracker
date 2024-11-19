import db from "../database/init.js";

// OK
export const getAllGoals = async (req, res) => {
    const query = "SELECT * FROM goals";
    
    db.all(query, (err, rows) => {
        if (err) {
            console.error("Error fetching data:", err);
            res.status(500).send("Error fetching data");
        } else {
            res.render('index', { goals: rows });
        }
    });
}

// OK
export const getGoal = async (req, res) => {
    const query = "SELECT * FROM goals WHERE id = ?";
    const id = req.params.id;

    db.get(query, [id], (err, row) => {
        if (err) {
            console.error("Error fetching goal:", err);
            res.status(500).send("Error fetching goal");
        } else {
            res.render('view_goal', {goal: row});
        }
    });    
}

// OK
export const getCreateForm = async (req, res) => {
    res.render('create_goal')
}

// OK
export const createGoal = async (req, res) => {
    const { title, description } = req.body;

    const sql = "INSERT INTO goals (title, description) VALUES (?, ?)";

    db.run(sql, [title, description], function(err) {
        if (err) {
            console.log("Insert error", err);
            res.status(500).send("Error inserting data");
        } else {
            res.redirect('/goal');
        }
    });
}

// OK
export const editGoal = async (req, res) => {
    const { id } = req.params;
    const query = "SELECT * FROM goals WHERE id = ?";
    db.all(query, [id], (err, rows) => {
        if (err) {
            console.error("Error fetching data:", err);
            res.status(500).send("Error fetching data");
        } else {
            res.render('edit_goal', { goal: rows[0] });
        }
    });
}

// OK
export const updateGoal = async (req, res) => {
    const { id } = req.params;
    const { title, description } = req.body;

    const sql = "UPDATE goals SET title = ?, description = ? WHERE id = ?";
    db.run(sql, [title, description, id], function (err) {
        if (err) {
            console.log("Update error", err);
            res.status(500).send("Error updating goal");
        } else {
            res.redirect("/goal");
        }
    });
}

// 
export const deleteGoal = (req, res) => {
    const { id } = req.params;

    const sql = "DELETE FROM goals WHERE id = ?";
    db.run(sql, [id], function (err) {
        if (err) {
            console.log("Delete error", err);
            res.status(500).send("Error deleting goal");
        } else {
            res.redirect("/goal");
        }
    });
};