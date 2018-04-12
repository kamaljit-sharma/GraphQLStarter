import { BaseQuery } from './Base';
import { UserQuery, UserMutation } from './User';

const Query = {
    ...BaseQuery,
    ...UserQuery
};

const Mutation = {
    ...UserMutation
};

export default { Query, Mutation };