import mongoose, {Document, Schema} from 'mongoose';

export interface IUser extends Document {
    username: string;
    password: string;
    name: string,
    email: string,
    createTime: number,
    isAdmin: boolean,
    avatar: string
}


export const UserSchema: Schema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    createTime: {
        type: Number,
        default: Date.now()
    },
    isAdmin: {
        type: Boolean
    },
    avatar: {
        type: String
    }
});
