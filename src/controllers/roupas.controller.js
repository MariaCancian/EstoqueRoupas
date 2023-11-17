import { Roupas } from "../roupas/roupas.js";
import { RoupasLista } from "../roupas/roupasList.js";

const list = new RoupasLista();

export const getRoupas = (req, res) => {
    let roupas = list.getTodasRoupas();

    const { tipo } = req.query;

    console.log(tipo)

    if (tipo) {
        roupas = list.getRoupaPeloTipo(tipo);
    } else {
        //todos
        roupas = list.getTodasRoupas();
    }

    console.log(roupas)

    if (roupas) {
        return res.status(200).send(roupas)
    } else {
        return res.status(200).send({ message: "não há roupas cadastradas", roupas })
    }

};



export const getRoupasId = (req, res) => {
    const { id } = req.params;
    const roupas = list.getRoupas(id)

    if (!roupas) {
        return res.status(404).send({ message: "roupa não encontrada" })

    }
    return res.status(200).send(roupas)
};


export const criaçãoRoupas = (req, res) => {
    const { nome, tipo, tam, cor, qnt, img } = req.body;
    const erros = [];

    if (nome.length < 6) {
        erros.push({ message: "mínimo 6 caracteres" })

    } if (nome.length > 40) {
        erros.push({ message: "máximo 40 caracteres" })

    }

    if (tipo.length > 50) {
        erros.push({ message: "máximo 50 caracteres" })
    }

    if (tam != " PP" || tam != "P" || tam != "M" || tam != "G" || tam != "GG" || tam != "XG") {
        erros.push({ message: "O tamanho do item deve ser apenas as strings PP, P, M, G, GG e XG. " })
    }

    if (cor.length > 20) {
        erros.push({ message: "máximo 20 caracteres." })
    }

    if (qnt < 1 || qnt > 15000 || !Number.isInteger) {
        erros.push({ message: "A quantidade em estoque deve ser um número inteiro positivo limitado a 15000." })
    }

    if (!img.match(/(https?:\/\/.*\.(?:png|jpg|jpeg))/i)) {
        erros.push({ message: "A imagem do item deve ser uma URL válida." });

    }

    if (!nome || !tipo || !tam || !cor || !qnt || !img) {
        return res.status(400).send({ message: "faltando informações necessárias" });


    }

    const roupa = new Roupas(nome, tipo, tam, cor, qnt, img);
    list.addRoupas(roupa);

    return res.status(200).send({ messagem: roupa })
};


export const atualizarRoupas = (req, res) => {
    const { id } = req.params;
    const { nome, tipo, tam, cor, qnt, img } = req.body;

    if (!nome || !tipo || !tam || !cor || !qnt || !img) {
        return res.status(400).send({ message: "não foi" })

    }

    const roupa = list.getRoupas(id);

    if (!roupa) {
        return res.status(404).send({ message: `aluno não encontrado` })
    }
    const atualizarRoupas = list.atualizarRoupas(id, nome, tipo, tam, cor, qnt, img)
    return res.status(200).send({ message: `Roupa atulizada com sucesso`, atualizarRoupas })
}


export const deleteRoupas = (req, res) => {
    const { id } = req.params;
    const roupa = list.getRoupas(id);

    if (!roupa) {
        return res.status(404).send({ message: "roupa não encontrada" })

    }

    list.deletarRoupas(id)
    return res.status(404).send({ message: "roupa deletada com sucesso" })
}