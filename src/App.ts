import * as express from 'express';
import * as dotenv from 'dotenv';
import * as bodyParser from 'body-parser';
import { graphiqlExpress, graphqlExpress } from 'apollo-server-express';
import schema from './schemaBuilder';
import { configureMongo } from './database.config';

class App {
    public express : any;

    constructor () {
        this.express = express();
        this.configureApp();
    }

    configureApp() {
        dotenv.config({path : '.env.example'});
        configureMongo();
        this.express.use('/graphql', bodyParser.json(), graphqlExpress({schema}));
        this.express.use('/graphiql', graphiqlExpress({
            endpointURL : '/graphql'
        }));
    }
}

export default new App().express;