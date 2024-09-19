import { User } from "../model/User.js"
export default {
    findByEmail: async (email) => {
        return User.findOne({ email })
    },
    findByName: async (userName) => {
        return User.find({ userName })
    },
    findById: async (id) => {
        return User.findOne({ id })
    },
    createUser: async (userName, email, password) => {
        const user = new User();
        user.userName = userName;
        user.email = email;
        user.password = password;
        user.save();
    }
}