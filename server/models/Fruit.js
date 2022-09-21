const mongoose = require("mongoose");

const FruitSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "{PATH} must be present (From Server)"],
        minlength: [5, "{PATH} must be at least 5 chars long (From Server)"]
    },
    price: {
        type: Number,
        required: [true, "{PATH} must be present (From Server)"]
    },
    image:{
        type: String,
        required: [true, "{PATH} must be present (From Server)"]
    },
    description: {
        type: String,
        required: [true, "{PATH} must be present (From Server)"]
    }
}, {timestamps:true})

const Fruit = mongoose.model("Fruit", FruitSchema)

module.exports = Fruit;