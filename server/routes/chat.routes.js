import { Router } from "express"
import { verifyJWT } from "../middlewares/auth.js"

const router = Router()


// authentication needed
router.use(verifyJWT)





export default router