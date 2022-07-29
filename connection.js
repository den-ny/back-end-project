import mongoose from 'mongoose'
  
const mongooseConfig = {
  useNewUrlParser: true,
  useUnifiedTopology: true
}

mongoose.connect('mongodb://localhost:27017/cat-store', mongooseConfig)
const db = mongoose.connection
db.on('connected', () => console.log('connected to db'))
db.on('disconnect', () => console.log('disconnected from db'))
db.on('error', (error) => console.error('db error: ', error))

export default db
