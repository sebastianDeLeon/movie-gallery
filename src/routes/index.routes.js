import e, { Router } from "express";
import Pelicula from "../models/Pelicula";

//controllers
import { vistaAdmin } from "../controllers/getAdmin";
const router = Router();

//registro
router.get("/Registro", async (req, res) => {
  try {
    const p = await Pelicula.find().lean();
  
    res.render("sighup", { p });
  } catch (error) {
    
  }
});

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
