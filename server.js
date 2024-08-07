import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'
import route from './routes/userRoutes.js'
const app = express();
dotenv.config();
app.use(bodyParser.json())


const PORT = process.env.PORT;
const MONGOURL = process.env.MONGO_URL;

mongoose.connect(MONGOURL)
.then(() =>{
    console.log('연결 성공!')
    app.listen(PORT,()=>{
        console.log(`연결 성공 ! http://localhost:${PORT}`)
    })
})
.catch((error) => console.log(error))

app.use('/user',route)
