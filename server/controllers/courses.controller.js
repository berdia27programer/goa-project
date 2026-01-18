const AppError = require("../utils/AppError.js")
const Course = require("../models/courses.model.js")
const catchAsync = require("../utils/catchAsync.js")

const getcourses = catchAsync(async (req, res, next) => {
    const courses = await Course.find();

    res.status(200).json(courses);
});

const getcourse = catchAsync(async (req, res, next) => {
    const { id } = req.params;

    const course = await Course.findById(id)

    if(!course){
        return next(new AppError('course not found', 404));
    }

    res.status(200).json(course);
});

const createcourse = catchAsync(async (req, res, next) => {
    const { content } = req.body;

    if (!content || content.trim() === "") {
        return next(new AppError("Content required!", 403))
    }

    const newcourse = await Course.create({
        content
    });

    res.status(201).json(newcourse)
});

const deletecourse = catchAsync(async (req, res, next) => {
    const { id } = req.params;

    const course = await Course.findById(id)

    if (!course) {
        return next(new AppError("course not found", 404))
    }
    
    await Course.findByIdAndDelete(id);

    res.send(`course ${course} is deleted!`)
});

const updatecourse = catchAsync(async (req, res, next) => {
    const { id } = req.params;
    const { content } = req.body;

    const course = await Course.findById(id)

    if (!course) {
        return next(new AppError("course not found", 404))
    }

    if(content) course.content = content;

    await course.save();

    res.status(200).json(course)
});

module.exports = { getcourses, getcourse, createcourse, deletecourse, updatecourse };