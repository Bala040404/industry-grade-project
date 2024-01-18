import mongoose from "mongoose"
import {DB_NAME} from "../const.js"

async function connect(){
    try {
        const connectionInstance = await mongoose.connect(`${process.env.DB_URL}/${DB_NAME}`)
        console.log("connected to db")
        
    } catch (error) {
        console.log("error",error)
    }
}

export default connect;