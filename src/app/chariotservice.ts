import {produit} from './produit'
export class chariotservice{
    private chariot:produit[];
    constructor(){
    this.chariot=[];
    }
    addChariot(name,description,prix,url){
    this.chariot.push(new produit(name,description,prix,url));
   
    }
    getChariot(){
        return this.chariot;
    }
}