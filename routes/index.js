import express from "express"
import { createGoal, deleteGoal, editGoal, getAllGoals, getCreateForm, getGoal, updateGoal } from "../controllers/goalController.js"

const router = express.Router()

router.get("/", getAllGoals)
router.get("/add", getCreateForm)
router.post("/create", createGoal)
router.get("/edit/:id", editGoal)
router.post("/update/:id", updateGoal)
router.delete("/delete/:id", deleteGoal)

router.get("/:id", getGoal)


export default router;