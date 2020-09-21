export class produit{
    name:string;
    description:string;
    prix:number;
    quant:number;
    image:string;

    constructor(name,description,prix,image,quant){
        this.name=name;
        this.description=description;
        this.prix=prix;
        this.quant=quant;
        this.image=image;

    }
}