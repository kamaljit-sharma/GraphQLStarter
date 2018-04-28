import * as mongoose from 'mongoose';
import * as bluebird from 'bluebird';

export const configureMongo = async () => {
    const mongoURL = process.env.MONGODB_URI || 'mongodb://localhost:27017/graphql';
    (<any>mongoose).Promise = bluebird;

    try {
        await mongoose.connect(mongoURL);
        console.log("Mongo connected");
    } catch (error) {
        console.log("Mongo db connection failed", error.message);
    }
};