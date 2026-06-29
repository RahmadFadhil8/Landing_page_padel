import User from "../models/User"
import type {RegisterDto} from '~/types/auth'
import { connectDB } from '../database/mongodb'

export async function register(data: RegisterDto) {

    await connectDB()

    const existingUser = await User.findOne({
        email: data.email
    }) 

    if (existingUser) {
        throw createError({
            statusCode: 409,
            statusMessage: 'Email sudah digunakan'
        })
    }

    // hash password



    // simpan user
    const user = await User.create({
        nama: data.nama,
        email: data.email,
        tel: data.tel,
        password: data.password, // nantik ganti pass yang sudah di-hash
        role:'user'
    })

    return {
        success: true,
        message: 'Register Berhasil',
        user
    }
}