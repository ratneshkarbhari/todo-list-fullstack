const express = require('express')
const dotenv = require("dotenv").config()
const port = process.env.PORT || 5000
const connectDB = require("./config/db")
const  {errorHandler} = require("./middleware/errorMiddleware")
var cors = require('cors')

const app = express()


connectDB()


app.use(cors());


app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use("/api/todos", require("./routes/todoRoutes"))

app.use(errorHandler)

app.listen(port, ()=>console.log(`Server started on port ${port}`))