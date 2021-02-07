import { Router } from 'express'

const memberRoutes = Router()

memberRoutes.get('/', async (req, res) => {
  return res.status(200).json([]);
})

export default memberRoutes
