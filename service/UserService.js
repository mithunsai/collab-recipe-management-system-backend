import { User } from "../model/User.js"
export default {
    findByEmail: async (email) => {
        return User.findOne({ email })
    },
    findByName: async (name) => {
        return User.find({ name })
    },
    findById: async (id) => {
        return User.findOne({ id })
    },
    createUser: async (user) => {
        new User(user).save()
    }
}