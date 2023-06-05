const express = require("express")
const router = express.Router()

const {
    getTodos,getTodo,setTodos,updateTodo,deleteTodo} = require("../controllers/todoController")

// const {protect} = require("../middleware/authMiddleWare")

router.get("/",getTodos)
router.get("/:id",getTodo)
router.post("/",setTodos)
router.put("/:id",updateTodo)
router.delete("/:id",deleteTodo)

module.exports = router