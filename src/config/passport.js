import passport from 'passport'
import passportLocal from 'passport-local'

import { usuario } from "../models/Pelicula";

passport.use(new passportLocal({
    usernameField: 'email'
}, async (nombre,contraseña,done)=>{
    const us = await usuario.find({nombre: nombre})
    if(!us){
        return done(null,false,{message: 'not user found'})
    } else{
        const match = await usuario.desEn(contraseña)
        if(match){
            return done(null,us)
        } else{
            return done(null,false,{message:'incorrect password'})
        }
    }
}))

passport.serializeUser((user,done) =>{
    done(null,user.id)
})

passport.deserializeUser((user,done) =>{
    usuario.findById(id,(err,user)=>{
        done(err,user)
    })
})