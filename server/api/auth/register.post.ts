import { register } from "~~/server/services/auth.service"

export default defineEventHandler(async (event) => {
    try {
        const body = await readBody(event)
        
        return await register(body)
    } catch (error) {
        console.error(error)
        throw error
    }

})