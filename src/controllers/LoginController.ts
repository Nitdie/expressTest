import db from "../database";
import config from "../config";
import jwt from "jsonwebtoken"

function jwtSignUser(user){
    const ONE_DAY = 60 * 60 * 24
    return jwt.sign(user,config.authentication.jwtSecret,{
        expiresIn:ONE_DAY
    })
}
export default {
    async login (req, res){
        const account = req.body.account
        const pass = req.body.password
        const sql: string = `SELECT * FROM users WHERE id = '${account}' AND pass = '${pass}'`
        db.query(sql,(error,result)=>{
            //登陆失败
            if(result.length==0)
                res.status(400).send({"message":"Login Failed"})
            else{
                res.send({
                    message:"Login Success",
                    token:jwtSignUser(req.body)
                })
            }
        })
    }
}
