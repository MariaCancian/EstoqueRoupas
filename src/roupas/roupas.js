import { v4 as uuidv4 } from 'uuid';

export class Roupas{
    constructor(nome, tipo, tam, cor, qnt, img){
        this.id = uuidv4();
        this.nome=nome;
        this.tipo=tipo;
        this.tam=tam;
        this.cor=cor;
        this.qnt=qnt;
        this.img=img;
    }
}