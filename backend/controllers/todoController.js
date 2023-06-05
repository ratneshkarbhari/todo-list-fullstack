const asyncHandler = require("express-async-handler")
const Todo = require("../models/todoModel")

// desc  fetch all goals
// route GET /api/users
// access public 
const getTodos = asyncHandler(async(req,res) => {


    const todos = await Todo.find({})


    res.status(200).send(todos)

})

const getTodo = asyncHandler(async(req,res) => {



    const todo = await Todo.findById(req.params.id)


    res.status(200).send(todo)


})


const setTodos = asyncHandler(async(req,res)=>{

    if(req.body.title){


        const todo = await Todo.create({
            title: req.body.title,
            details: req.body.details
        })

        res.status(200).json(todo)

    }else{

        res.status(400).json({message:"Please send title for todo"})

    }
    
})

const updateTodo = asyncHandler(async(req,res)=>{

    if(req.body.title){

        const todoToUpdate = Todo.findById(req.params.id)

        if (!todoToUpdate) {
            res.status(400)
            throw new Error("Todo not found")
        }

        const todo = await Todo.findByIdAndUpdate(req.params.id,{
            title: req.body.title,
            details: req.body.details
        },{
            new : true
        })

        res.status(200).json(todo)

    }else{

        res.send(400).json({message:"Please send title for todo"})

    }
    
})

const deleteTodo = asyncHandler(async(req,res)=>{

    
    const todoToDelete = await Todo.findById(req.params.id)
    if(!todoToDelete){
        res.status(400).json({status:"failure"})
        throw new Error("Todo not found")
    }

    await Todo.findByIdAndDelete(req.params.id)

    res.status(200).json({

        status: "success",
        message : "Todo deleted"
    })

})



module.exports = {getTodos,getTodo,setTodos,updateTodo,deleteTodo}