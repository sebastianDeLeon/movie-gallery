import { Schema,model } from "mongoose";
//Título, Director, Reseña, Actores, Año.

const movieSchema = new Schema({
    titulo : { 
        type : String,
        trim : true
    },
    director : {
        type : String,
        trim : true
        
    },
    reseña : {
        type : String,
        trim : true
        
    },
    link :{
        type : String,
        trim : true
        
    },
    año: {
        type : Number,
        trim : true
        
    },
    poster:{
        type: String,
        trim: true
    },
    actores :{
        type : Array,
        trim : true
        
    }

},{
    timestamps : true,
    versionKey : false
})

export default model("Pelicula",movieSchema)