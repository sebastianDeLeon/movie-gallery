import e, { Router } from "express";
import Pelicula,{usuario} from "../models/Pelicula";
import passport from "passport";

//controllers
import { vistaAdmin } from "../controllers/getAdmin";
const router = Router();

//registro
router.get("/Registro", async (req, res) => {
  try {
    res.render("registrar");
  } catch (error) {
    alert(error);
  }
});

router.post("/Registro", async (req, res) => {
  try {

    const {nombre,contraseña,email} = req.body
    const errors =[]

    if(nombre.lenght <=0){
      errors.push({text:'por favor introduzca su nombre'})
    }
    if(contraseña.lenght <=4){
      errors.push({text:'la constraseña debe tener almenos 5 digitos'})
    }
    if(errors.length > 0){
      res.render("Registro",{errors,nombre,contraseña,email})
    }
    // const user = usuario(req.body);
    // await user.save();
    else{
    const user = usuario(req.body);
    user.contraseña = await user.encryptar(contraseña)
    await user.save();


    res.redirect("login");
  }
  } catch (error) {
    alert(error);
  }
});

//Login

router.get("/login", async (req, res) => {
  try {
    res.render("login")
  } catch (error) {
    alert(error);
  }
});

router.post("/login", async(req,res)=>{
  const {nombre,contraseña} = req.body
    const us = await usuario.findOne(nombre)
    const co = await usuario.findOne(contraseña)
    if((nombre===us)&(contraseña===co)){
      res.redirect("/")
    }
    else{
      res.render("login")
    }
    
  
} );

//Cargar
router.get("/", async (req, res) => {
  try {
    const p = await Pelicula.find().lean();
  
    res.render("index", { p });
  } catch (error) {
    
  }
});

router.get("/Hub", async (req, res) => {
  const p = await Pelicula.find().lean();

  console.log(p);
  res.render("Hub", { p });
});

router.post("/Buscar", async (req, res) => {
  
  try {
    console.log(req.body)
    const p = await Pelicula.find(req.body)
    res.render("Buscar",{p})
  } catch (error) {
    
  }
});
router.post("/BuscarU", async (req, res) => {
  
  try {
    console.log(req.body)
    const p = await Pelicula.find(req.body)
    res.render("BuscarU",{p})
  } catch (error) {
    
  }
});
//editar
router.get("/edit/:id", async (req, res) => {
  try {
    const e = await Pelicula.findById(req.params.id);

    console.log(e);
    res.render("edit", { e });
  } catch (error) {
    console.log(error);
  }
});

router.post("/edit/:id", async (req, res) => {
  try {
    const { id } = req.params;
  
    await Pelicula.findByIdAndUpdate(id, req.body);
    res.redirect("/");
  } catch (error) {
    
  }
});

//borrar
router.get("/delete/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await Pelicula.findByIdAndDelete(id);
    res.redirect("/");
  } catch (error) {
    console.log(error);
  }
});

//añadir
router.post("/Pelicula/Add", async (req, res) => {
  try {
    const pelicula = Pelicula(req.body);
    await pelicula.save();
    res.redirect("/");
  } catch (error) {
    console.log(error);
  }
});

export default router;
