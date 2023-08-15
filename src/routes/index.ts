import express from "express";
import db from "../database"
import RegistrationController from "../controllers/RegistrationController";
import LoginController from "../controllers/LoginController";

const router = express.Router();
router.get('/status',(req,res)=>{
    res.send({
        message:'STATUS RESPONS'
    })
})

router.post('/register',RegistrationController.register)
router.post('/login',LoginController.login)

export = router