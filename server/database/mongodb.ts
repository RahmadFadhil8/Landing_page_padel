import mongoose from 'mongoose'

export async function connectDB() {
    if(mongoose.connection.readyState >= 1){
        return
    }
    const config = useRuntimeConfig()

    await mongoose.connect(config.mongodbUri)

    console.log('mongoDB Connected')
}