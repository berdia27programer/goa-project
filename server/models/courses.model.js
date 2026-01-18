const mongoose = require("mongoose")

const courseSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true
    }

}, { timestamps: true });

const Course = mongoose.model("Courses", courseSchema)

module.exports = Course;