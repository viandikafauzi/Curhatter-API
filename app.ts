import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import morgan from 'morgan'
import router from './router/router'
import connectDB from './config/db'

dotenv.config()
connectDB()

const app = express()
const PORT = process.env.APP_PORT
app.use(express.json())
app.use(cors())

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
}

app.use('/', router)

app.listen(PORT, () => {
    console.log(
        `⚡️ Server is running on ${process.env.APP_ENV} mode at https://${process.env.API_URL}:${PORT}`
    )
})
