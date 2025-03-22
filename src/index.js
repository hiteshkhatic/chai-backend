import dotenv from "dotenv"
import connectDB from "./db/index.js";

dotenv.config({
    path: './env'
})


connectDB()
// require('dotenv').config({path: './env'}) 
// 2 met for env if have to use import  statement













//   import {DB_NAME} from "./constants.js"; use hi nahi kar rah (app 1)
// import mongoose, { connect } from "mongoose";   use hi nahi kar rah (app 1)


 // the first approach
 /*
import express from "express"
const app = express()
( async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error", (error) => {
            console.log("ERRR: ", error);
            throw error
        })

        app.listen(process.env.PORT, () => {
            console.log(`App is listening on port ${process.env.PORT}`);
        })

    } catch (error) {
        console.error("ERROR: ", error)
        throw err
    }
})()
*/
