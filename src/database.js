import {connect} from "mongoose";

(async ()=>{
    try {
        const db = await connect("mongodb://localhost:27017/Peliculas")
        console.log("conectado a",db.connection.name)
    } catch (error) {
        console.log(error)
    }
})()