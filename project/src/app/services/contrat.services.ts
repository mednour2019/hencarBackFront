import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Contrat } from "../models/contrat";
import { locataire } from "../models/locataire";
import { Locateur } from "../models/locateur";

@Injectable({
    providedIn: 'root'
  })
  export class contratService{
      constructor(public http:HttpClient){

      }
      public getAll(){
        return this.http.get("http://localhost:8888/contrat/getAll")
      }

      public  add(c:Contrat){
        return this.http.post("http://localhost:8888/contrat/add",c,{responseType:"text"});
      }

      public getById(id:number){
        return this.http.get("http://localhost:8888/contrat/getById/"+id);
      }
      
      public  update(c:Contrat){
        return this.http.post("http://localhost:8888/contrat/update",c,{responseType:"text"});
      }

      public deleteById(id:number){
        return this.http.get("http://localhost:8888/contrat/deleteById/"+id);
      }

      public  delete(c:Contrat){
        return this.http.post("http://localhost:8888/contrat/delete",c,{responseType:"text"});
      }
  }