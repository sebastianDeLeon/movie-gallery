import express from "express";
import indexRoutes from "./routes/index.routes"
import path from "path"
import morgan from "morgan";
const app = express()


app.set('views', path.join(__dirname,"views"))
app.set('view engine',"pug")

//middleware
app.use(morgan("dev"))
app.use(express.urlencoded({extended:false}))
//rutas
app.use(indexRoutes)

export default app