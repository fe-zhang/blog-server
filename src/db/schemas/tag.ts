import {Document, Schema} from 'mongoose';

export interface ITag extends Document {
    path: string;
    name: string;
}


export const TagSchema: Schema = new Schema({
    path: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        unique: true
    }
});
