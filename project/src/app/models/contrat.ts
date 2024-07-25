import { locataire } from "./locataire";
import { Locateur } from "./locateur";
import { maison } from "./maison";

export class Contrat {
    constructor(
        public id:number,
        public datedebut:Date,
        public datefin:Date,
        public prixfinal:number, 
        public locateur:Locateur,
        public locataire:locataire,
        public maison:maison
        
 )
    {
        
    }
}