import { Router } from 'express'
import MemberRoutes from './member.routes'
import LoginRoutes from './login.routes'

const router = Router()

router.use('/', LoginRoutes)

router.use('/members', MemberRoutes)

export default router
