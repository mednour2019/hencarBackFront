import { Immeuble } from "./immeuble";

export class maison {
    constructor(
        public id:number,
        public description:string,
        public nb_chambres:number, 
        public type:string, 
        public ismeuble: string,
        public prix:number,
        public remisepromo :number,
        public etat: string,
        public immeuble: Immeuble,





        
       
    )
    {
        
    }
}