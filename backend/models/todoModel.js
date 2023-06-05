const mongoose = require("mongoose")

const todoSchema = mongoose.Schema({
    title: {
        type: String,
        required: [true,"Please add a title value"]
    },
    details: {
        type: String
    },
},{
    timestamps: true
})

module.exports=mongoose.model("Todo",todoSchema)