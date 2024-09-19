import express from 'express'
import UserService from '../service/UserService.js'
const router = express.Router()

router.post('/register', async (req, res, next) => {
    const user = await UserService.findByEmail(req.body.email)
    if (user) {
        res.status(500).send({ message: 'User already registered' })
    }
    else {
        await UserService.createUser(req.body.name, req.body.email, req.body.password)
        res.status(200).send({ message: 'Your account has been created' })
    }

})

export default router