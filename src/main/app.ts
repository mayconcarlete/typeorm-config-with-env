import express from 'express'
import { getRepository } from 'typeorm'
import {User} from '../database/entities'
const app = express()

app.use(express.json())
app.get('/users', async (req, res) => {
    const userModel = getRepository(User)
    const users = await userModel.find()
    return res.status(200).json(users)
})
export default app