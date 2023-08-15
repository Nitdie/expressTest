import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import morgan from "morgan"
import routes from "./routes"

const app = express();
app.use(morgan('combined'));
app.use(bodyParser.json())
app.use(cors())

app.use(routes)

const port = process.env.PORT || 8888
app.listen(port)
console.log(`SERVER STARTED ON http://localhost:${port}`)