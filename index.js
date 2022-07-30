import express from 'express'
import cors from "cors"
import morgan from "morgan"

import db from './db/connection.js'
import routes from './routes/index.js'

const app = express()
const PORT = process.env.PORT || 4000

app.use(express.json())
app.use(cors())
app.use(morgan("dev"))

app.use("/", routes)

db.on("connected", () => {
  console.clear()
  console.log("connected to mongodb")
  app.listen(PORT,
    () => console.log(`on port ${PORT}`))
})