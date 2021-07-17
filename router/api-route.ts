import { Router } from 'express'

const router = Router()

router.get('/', (req, res) =>
    res.json({ success: true, message: 'Api server is running...' })
)

export default router
