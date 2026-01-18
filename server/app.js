const path = require("path")
const express = require("express")
const morgan = require("morgan")
const dotenv = require("dotenv")
const { default: mongoose } = require("mongoose")
const cors = require("cors")
const authRouter = require("./routes/auth.router.js")
const commentsRouter = require("./routes/comments.router.js")
const coursesRouter = require(path.join(__dirname, 'routes', 'course.router.js'))

dotenv.config()

const app = express()

if (process.env.NODE_ENV === "dev") {
    app.use(morgan("dev"))
}

app.use(express.json())
app.use(cors())

app.use("/api/auth", authRouter())
app.use("/api/comments", commentsRouter())
app.use("/api/courses", coursesRouter())

mongoose.connect(process.env.DATABASE)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log(`Server is running on port ${process.env.PORT}`)
        })
    }
    )
    .catch(err => console.error(`Error has been appeared: ${err}`))

