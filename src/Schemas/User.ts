const User = `
    extend type Query {
        Users: [User]
    }

    extend type Mutation {
        createUser(name: String!, address: String!): User
    }

    type User {
        name: String!,
        address: String!
    }
`;

export default User;