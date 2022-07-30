import mongoose from 'mongoose'

mongoose.set("returnOriginal", false);

const connectionString = process.env.DB_URL || 'mongodb://localhost:27017/cat-store'

const mongooseConfig = {
  useNewUrlParser: true,
  useUnifiedTopology: true
}

mongoose.connect(connectionString, mongooseConfig)
  .catch((error) => console.log(error))

const db = mongoose.connection

db.on('connected', () => console.log('connected to db'))
db.on('disconnect', () => console.log('disconnected from db'))
db.on('error', (error) => console.error('db error: ', error))

export default db