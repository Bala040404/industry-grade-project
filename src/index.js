import dotenv from "dotenv"
import {app} from "./app.js"
dotenv.config()

import connect from "./db/dbConnect.js";
connect()
.then(()=>{
    app.listen(process.env.PORT||4000,()=>{
        console.log(`listening on ${process.env.PORT}`)
    })
})
.catch((e)=>{
    console.log("error")
})
