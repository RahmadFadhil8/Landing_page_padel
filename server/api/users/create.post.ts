import User from "~~/server/models/User";
import { connectDB } from '../../database/mongodb'

export default defineEventHandler(async (event) => {
    await connectDB()

    const body = await readBody(event)

    return await User.create(body)
})