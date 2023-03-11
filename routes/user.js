import express, { Router } from "express";
import { signup, signin, updateuser, deleteuser, getuser, getuserbyId, filteruser } from "../controller/UserController.js";
const router = express.Router();


router.post('/signup', signup)
router.post('/signin', signin)
router.get('/getuser', getuser)
router.get('/getuser/:_id', getuserbyId)
router.patch('/updateuser/:_id', updateuser)
router.delete('/deleteuser/:_id', deleteuser)
router.post('/filteruser', filteruser)

export default router;