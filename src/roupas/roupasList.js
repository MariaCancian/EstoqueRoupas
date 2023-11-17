export class RoupasLista{
    constructor(){
        this.roupas = [];
    }

    getTodasRoupas(){
        return this.roupas;
    }

    getRoupa(id){
        return this.roupas.find((roupa)=> roupa.id==id );
    }
    
    getRoupaPeloTipo(tipo){
        return this.roupas.filter((roupa) => roupa.tipo == tipo);
    }

    addRoupas(roupa){
        this.roupas.push(roupa);
    }


    atualizarRoupas(id,nome, tipo, tam, cor, qnt, img){
        this.roupas= this.roupas.map((roupa)=>{
            if(roupa.id==id){
                roupa.nome==nome;
                roupa.tipo==tipo;
                roupa.tam==tam;
                roupa.cor==cor;
                roupa.qnt==qnt;
                roupa.img==img;

            }
            return this.getRoupas(id)
        })
        
        return this.roupas;
    }

  deletarRoupas(id){
    this.roupas= this.roupas.filter((roupa)=>roupa.id!=id)
  }
}