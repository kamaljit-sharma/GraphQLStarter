const Book = `
    extend type Query {
        Books: [Book]
    }

    extend type Mutation {
        createBook(title: String!, author: String!, isbn: String, url: String): Book
        updateBook(_id: String!, title: String!, author: String!, isbn: String, url: String): Book
        deleteBook(_id: String!): Book
    }

    type Book {
        _id: String!,
        title: String!,
        author: String!,
        isbn: String,
        url: String,
    }
`;

export default Book;