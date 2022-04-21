import "../models/Pelicula"

export const vistaAdmin = async (req, res) => {
    const p = await Pelicula.find().lean();
  
    res.render("index", { p });
  }