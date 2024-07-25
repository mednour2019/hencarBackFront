import { Personne } from "./personne";

export class Concierge extends Personne{
    constructor(
        public id:number,
        public firstname:string,
        public lastname:string,
        public email:string,
        public password:string,
        public cin:string,
        public tel:string,
        public adress:string,
        public sexe:string
    ){
        super(id,firstname,lastname,email,password,cin,tel,adress,sexe)
    }
}