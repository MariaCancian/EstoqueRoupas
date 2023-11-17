import { Router } from "express";
import { atualizarRoupas, criaçãoRoupas, deleteRoupas, getRoupas, getRoupasId } from "../controllers/roupas.controller.js";
//sempre importar o ROUTER

const roupasRoutes=Router();
//sempre criar uma variavel

roupasRoutes.get('/',getRoupas)
roupasRoutes.get('/:id',getRoupasId)
roupasRoutes.post('/',criaçãoRoupas)
roupasRoutes.put('/:id',atualizarRoupas)
roupasRoutes.delete('/:id',deleteRoupas)

export default roupasRoutes;

