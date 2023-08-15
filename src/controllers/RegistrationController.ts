import db from "../database";

export default {
    async register (req, res){
        const account = req.body.account
        const pass = req.body.password
        // const sql: string = `SELECT * FROM user WHERE id = ${account}`
        const sql: string = `INSERT INTO \`users\` (\`id\`,\`pass\`) VALUES ('${account}','${pass}')`
        db.query(sql,(error,result)=>{
            // 插入错误
            if(error){
                res.status(400).send({
                    error:error
                })
            }
            else{
                console.log("REGISTERED")
                res.send()
            }
        })
    }
}
