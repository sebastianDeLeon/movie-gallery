import { Schema,model } from "mongoose";
//Título, Director, Reseña, Actores, Año.

const usuarioSchema = new Schema({
    nombre : { 
        type : String,
        trim : true
    },
    contraseña : {
        type : String,
        trim : true
        
    },
    email : {
        type : String,
        trim : true
    
    }

},{
    timestamps : true,
    versionKey : false
})

export default model("Pelicula",usuarioSchema)