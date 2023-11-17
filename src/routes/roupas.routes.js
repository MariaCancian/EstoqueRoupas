import { Router } from "express";
import { criaçãoRoupas, getRoupas, getRoupasId } from "../controllers/roupas.controller.js";
//sempre importar o ROUTER

const roupasRoutes=Router();
//sempre criar uma variavel

roupasRoutes.get('/',getRoupas)
roupasRoutes.get('/:id',getRoupasId)
roupasRoutes.post('/',criaçãoRoupas)

export default roupasRoutes;

