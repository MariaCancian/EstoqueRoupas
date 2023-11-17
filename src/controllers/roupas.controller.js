import { Roupas } from "../roupas/roupas.js";
import { RoupasLista } from "../roupas/roupasList.js";

const list = new RoupasLista();

export const getRoupas = (req, res) => {
    const roupas = list.getTodasRoupas();

    if (roupas.length) {
        return res.status(200).send(roupas)
    }
    return res.status(200).send({ message: "não há roupas cadastradas" })
};



export const getRoupasId = (req, res) =>{
    const{id}= req.params;
    const roupas=list.getRoupas(id)

    if(!roupas){
        return res.status(404).send({message: "roupa não encontrada"})

    }
    return res.status(200).send(roupas)
};


export const criaçãoRoupas=(req, res)=>{
const{nome, tipo, tam, cor, qnt, img}=req.body;

if(!nome|| !tipo|| !tam|| !cor|| !qnt|| !img){
    return res.status(400).send({message: "faltando informações necessárias"})


}

const roupa = new Roupas(nome, tipo, tam, cor, qnt, img);
list.addRoupas(roupa);

return res.status(200).send({messagem: roupa})
};


export const atualizarRoupas = (req,res)=>{
    const{id}= req.params;
    const{nome, tipo, tam, cor, qnt, img}=req.body;

    if(!nome|| !tipo|| !tam|| !cor|| !qnt|| !img){
        return res.status(400).send({message: "não foi"})
    
}

const roupa = list.getRoupas(id);

if(!roupa){
    return res.status(404).send({ message: `aluno não encontrado` })
    }
    const atualizarRoupas= list.updateStudante(id,nome, tipo, tam, cor, qnt, img)
return res.status(200).send({message: atualizarRoupas})
}