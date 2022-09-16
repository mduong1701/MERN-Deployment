const mongoose = require("mongoose");

const PirateSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "{PATH} must be present (From Server)"],
        minlength: [5, "{PATH} must be at least 5 chars long (From Server)"]
    },
    position: {
        type: String,
        required: [true, "{PATH} must be present (From Server)"],
        minlength: [5, "{PATH} must be at least 5 chars long (From Server)"]
    },
    treasure: {
        type: Number,
        required: [true, "{PATH} must be present (From Server)"]
    },
    leg: {
        type: Boolean,
        default: true
    },
    eye: {
        type: Boolean,
        default: true
    },
    hand: {
        type: Boolean,
        default: true
    },
    image:{
        type: String,
        required: [true, "{PATH} must be present (From Server)"]
    },
    phrase: {
        type: String,
        required: [true, "{PATH} must be present (From Server)"]
    }
}, {timestamps:true})

const Pirate = mongoose.model("Pirate", PirateSchema)

module.exports = Pirate;