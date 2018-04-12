import { makeExecutableSchema } from 'graphql-tools';
import Schemas from './Schemas';
import resolvers from './Resolvers';

export default makeExecutableSchema({
    typeDefs : [...Schemas],
    resolvers
});