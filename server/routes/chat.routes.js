import { Router } from "express"
import { verifyJWT } from "../middlewares/auth.js"
import { newGroupChat } from "../controllers/chat.controller.js"

const router = Router()


// authentication needed
router.use(verifyJWT)

router.post("/new-group", newGroupChat)



export default router