import { prop, Typegoose } from 'typegoose';
import * as mongoose from 'mongoose';

export class User extends Typegoose {
    @prop({required : true})
    name: string;

    @prop()
    address: string; 
}

export default new User().getModelForClass(User);