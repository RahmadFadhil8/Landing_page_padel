import { connectDB } from '../database/mongodb'

export default defineEventHandler(async () => {
  await connectDB()

  return {
    success: true,
    message: 'MongoDB Connected'
  }
})