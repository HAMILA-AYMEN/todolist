const express = require('express')
const app=express()
const port=4000
const cookieParser = require('cookie-parser')
const cors = require('cors')
const { createProxyMiddleware } = require('http-proxy-middleware');
const {userRouter}=require("./routers/userRouter")

app.use(cors({
    origin:"http://localhost:3000",
    credentials:true,
    optionsSuccessStatus:200
}))
//app.use(
   // createProxyMiddleware({
   ////   target: 'http://localhost:3000',
      //changeOrigin: false,
    //})
 // );

  app.use('/',userRouter)
  app.use(express.json());

  app.use(cookieParser())


app.listen(port,()=>{
    console.log(`your server is connected to http://localhost:${port}`)
}

)
