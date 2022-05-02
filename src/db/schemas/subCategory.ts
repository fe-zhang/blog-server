import {Document, Schema} from 'mongoose';

export interface ISubCategory extends Document {
    subCategory: string;
    alias: string;
    parent: Schema.Types.ObjectId;
}

export const SubCategorySchema: Schema = new Schema({
    subCategory: {
        type: String,
        required: true,
        unique: true
    },
    alias: {
        type: String,
        required: true,
        unique: true
    },
    parent: {
        type: Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    }
});
