import mongoose, { Model } from "mongoose";

const UserSchema = new mongoose.Schema(
    {
        nama:String,

        email:{
            type:String,
            required: true,
            unique: true
        },

        tel:String,

        password:String,

        role: {
            type:String,
            enum: ['admin', 'user'],
            default: 'user'
        },


        avatar: String
    },
    {
        timestamps: true
    }
)

const User =
  (mongoose.models.User as Model<any>) ||
  mongoose.model('User', UserSchema)

export default User