import { BaseQuery } from './Base';
import { UserQuery, UserMutation } from './User';
import { BookQuery, BookMutation } from "./Book";

const Query = {
    ...BaseQuery,
    ...UserQuery,
    ...BookQuery,
};

const Mutation = {
    ...UserMutation,
    ...BookMutation
};

export default { Query, Mutation };