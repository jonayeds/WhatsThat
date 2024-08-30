import {Router} from "express"
import { login, register } from "../controllers/user.controller.js"
import {  singleAvatar } from "../middlewares/multer.js"

const router = Router()

router.post("/register", singleAvatar, register )
router.post("/login", login )

export default router