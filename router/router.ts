import { Router, Request, Response } from 'express'
import apiRoute from './api-route'

const router = Router()

router.get('/', (req: Request, res: Response) =>
    res.json({ success: true, message: 'Congratulation, you request an API!' })
)
router.use('/api', apiRoute)

export default router
