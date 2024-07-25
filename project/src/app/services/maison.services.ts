import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Immeuble } from "../models/immeuble";
import { maison } from "../models/maison";


@Injectable({
    providedIn: 'root'
  })
  export class maisonservice{
      constructor(public http:HttpClient){

      }
      public getAll(){
        return this.http.get("http://localhost:8888/maison/getAll")
      }

      public  add(m:maison){
        return this.http.post("http://localhost:8888/maison/add",m,{responseType:"text"});
      }

      public getById(id:number){
        return this.http.get("http://localhost:8888/maison/getById/"+id);
      }
      
      public  update(m:maison){
        return this.http.post("http://localhost:8888/maison/update",m,{responseType:"text"});
      }

      public deleteById(id:number){
        return this.http.get("http://localhost:8888/maison/deleteById/"+id);
      }

      public  delete(m:maison){
        return this.http.post("http://localhost:8888/maison/delete",m,{responseType:"text"});
      }

      public getByImmeubleId(id:number){
        return this.http.get("http://localhost:8888/maison/getAllMaisonsByImmeuble/"+id);
      }
      public findByEtat()
      {
        return this.http.get("http://localhost:8888/maison/findByEtat");
      }
      public findMaisonContrat()
      {
        return this.http.get("http://localhost:8888/maison/findmaisoncontrat");
      }
  }