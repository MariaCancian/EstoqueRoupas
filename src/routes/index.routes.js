import { Router } from "express";
import roupasRoutes from './roupas.routes.js'

const rotas = Router();

rotas.use("/roupas", roupasRoutes)

rotas.get("/", (req, res)=>{
    return res.status(200).send({message: "servidor ok!"})
})

export default rotas;