import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Immeuble } from "../models/immeuble";


@Injectable({
    providedIn: 'root'
  })
  export class immeubleservice{
      constructor(public http:HttpClient){

      }
      public getAll(){
        return this.http.get("http://localhost:8888/immeuble/getAll")
      }

      public  add(i:Immeuble){
        return this.http.post("http://localhost:8888/immeuble/add",i,{responseType:"text"});
      }

      public getById(id:number){
        return this.http.get("http://localhost:8888/immeuble/getById/"+id);
      }
      
      public  update(i:Immeuble){
        return this.http.post("http://localhost:8888/immeuble/update",i,{responseType:"text"});
      }

      public deleteById(id:number){
        return this.http.get("http://localhost:8888/immeuble/deleteById/"+id);
      }

      public  delete(i:Immeuble){
        return this.http.post("http://localhost:8888/immeuble/delete",i,{responseType:"text"});
      }
  }