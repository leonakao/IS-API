import User from '@models/User';
import { Router } from 'express'
import { compare } from '../services/crypt.service'

const LoginRoutes = Router()

LoginRoutes.post('/login', async (req, res) => {
  const { username, password } = req.body;

  const user = await User
    .findOne({
      username
    })
    .populate('member')

  if (!user || !(await compare(password, user.password))) {
    return res.status(401).send()
  }

  return res.status(200).send()
})

export default LoginRoutes
