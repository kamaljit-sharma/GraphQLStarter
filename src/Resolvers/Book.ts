import { BookModel } from '../Models';

const BookQuery = {
    Books: () => {
        return BookModel.find({ });
    }
};

const BookMutation = {
    createBook: (root, args) => {
        return BookModel.create(args);
    },
    updateBook: async(root, args) => {
        const { _id } = args;
        await BookModel.findOneAndUpdate({_id}, args);
        return BookModel.findOne({_id});
    },
    deleteBook: async (root, args) => {
        const { _id } = args;
        const book = await BookModel.findOne({_id});
        await BookModel.remove({_id});
        return book;
    }
};


export { BookQuery, BookMutation };