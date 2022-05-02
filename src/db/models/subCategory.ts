import {model} from 'mongoose';

import {SubCategorySchema, ISubCategory} from '../schemas/subCategory';

export default model<ISubCategory>('SubCategory', SubCategorySchema);
