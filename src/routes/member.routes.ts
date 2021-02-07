import Member, { MemberDocument } from '@models/Member';
import { Router } from 'express'

const memberRoutes = Router()

memberRoutes.get('/', async (req, res) => {
  const members = await Member.find();

  return res.status(200).json(members);
})

export default memberRoutes
