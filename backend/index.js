import express, { json } from 'express'
import connectDB from './config/db.js'
import facultyRouter from './src/routes/facultyRouter.js'
import facultyLogin from './src/routes/facultyLogin.js'
import adminLogin from './src/routes/adminLogin.js'
import adminRouter from './src/routes/adminRouter.js'
import testRoute from './src/utility/wait.js'
import dotenv from 'dotenv'
import cors from 'cors'
const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}


const app = express()
const port = process.env.PORT || 5000

dotenv.config();
connectDB();
app.use(json())

app.use(cors(corsOptions)) // Use this after the variable declaration

app.use('/api',facultyRouter)
app.use('/api',facultyLogin)
app.use('/api',adminLogin)
app.use('/api',adminRouter)
app.use(testRoute)


app.listen(port, () => {
    console.log('[INFO] Server is up on port ' + port)
})