import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import morgan from "morgan"

const app = express();
app.use(morgan('combined'));
app.use(bodyParser.json())
app.use(cors())

app.get('/status',(req,res)=>{
    res.send({
      message:'STATUS RESPONS'
    })
})

app.post('/register',(req, res)=>{
    res.send({
        message:`${req.body.account}: REGISTERED!`
    })
})








const port = process.env.PORT || 8888
app.listen(port)
console.log(`SERVER STARTED ON http://localhost:${port}`)