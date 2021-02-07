import { Router } from 'express'
import MemberRoutes from './member.routes'

const router = Router()

router.use('/members', MemberRoutes)

export default router
