import Member from '@models/Member';
import { Router } from 'express'

const memberRoutes = Router()

memberRoutes.get('/', async (req, res) => {
  const members = await Member.find();

  return res.status(200).json(members);
})

memberRoutes.post('/', async (req, res) => {
  const { name, age, nick, role, might, level, castle, status } = req.body;

  const member = await Member.create({
    name,
    age,
    nick,
    role,
    might,
    level,
    castle,
    status,
  });

  return res.status(200).json(member);
})

export default memberRoutes
