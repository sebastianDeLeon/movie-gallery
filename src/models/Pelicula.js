import { Schema,model } from "mongoose";
import br, { compare } from "bcrypt"
//Título, Director, Reseña, Actores, Año.
const usuarioSchema = new Schema({
    nombre : { 
        type : String,
        trim : true,
        unique: true        
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
usuarioSchema.methods.encryptar = async (contraseña ) =>{
    const salt = await br.genSalt(10)
    const hash = br.hash(contraseña,salt)
    return hash
}

usuarioSchema.methods.desEn = async function (contraseña) {
    return await compare(contraseña,this.contraseña)
}

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


export let usuario = model("Usuario",usuarioSchema)
export default model("Pelicula",movieSchema)