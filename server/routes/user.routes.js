import {Router} from "express"
import { getProfile, login, logout, register, searchUser } from "../controllers/user.controller.js"
import {  singleAvatar } from "../middlewares/multer.js"
import { verifyJWT } from "../middlewares/auth.js"

const router = Router()

router.post("/register", singleAvatar, register )
router.post("/login", login )

// authentication needed
router.use(verifyJWT)
router.get("/profile",  getProfile )
router.get("/logout",  logout)
router.get("/search-user",verifyJWT,  searchUser)




export default router