import { prop, Typegoose } from 'typegoose';
import * as mongoose from 'mongoose';

export class Book extends Typegoose {
    @prop({required : true})
    title: string;

    @prop({required : true})
    author: string;

    @prop()
    isbn: string;
    
    @prop()
    url: string;
}

export default new Book().getModelForClass(Book);