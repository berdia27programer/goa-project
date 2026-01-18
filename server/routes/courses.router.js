const express = require('express');
const { getcourses, createcourse, getcourse, deletecourse, updatecourse } = require('../controller/courses.controller.js');
const protect = require('../middlewares/auth.middleware.js');

const coursesRouter = express.Router();

coursesRouter
    .route('/')
    .get(getcourses)
    .post(protect, createcourse)

coursesRouter
    .route('/:id')
    .get(getcourse)
    .delete(protect, allowedTo("admin", "moderator"),deletecourse)
    .patch(protect, allowedTo("admin", "moderator"), updatecourse)

module.exports = coursesRouter;