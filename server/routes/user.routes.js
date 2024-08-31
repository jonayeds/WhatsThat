import {Router} from "express"
import { getProfile, login, register } from "../controllers/user.controller.js"
import {  singleAvatar } from "../middlewares/multer.js"
import { verifyJWT } from "../middlewares/auth.js"

const router = Router()

router.post("/register", singleAvatar, register )
router.post("/login", login )
router.get("/profile", verifyJWT, getProfile )



export default router