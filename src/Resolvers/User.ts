import { User, UserModel } from '../Models';

const UserQuery = {
    Users: () => {
        return UserModel.find({ name : { $exists : true }});
    }
};

const UserMutation = {
    createUser: (root, args) => {
        return UserModel.create(args);
    }
};


export { UserQuery, UserMutation };