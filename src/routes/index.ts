import express from "express";
import db from "../database"

const router = express.Router();
router.get('/status',(req,res)=>{
    res.send({
        message:'STATUS RESPONS'
    })
})

router.post('/register',(req, res)=>{
    // res.send({
    //     message:`${req.body.account}: REGISTERED!`
    // })
    const sql: string = "SELECT * FROM user"
    db.query(sql,(error,result)=>{
        if(error){
            console.log("SQL QUERY ERROR")
            res.send({state:1})
        }
        console.log("QUERIED")
        res.send({data:result})
    })
})

export = router