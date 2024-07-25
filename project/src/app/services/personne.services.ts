import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Personne } from "../models/personne";

@Injectable({
    providedIn: 'root'
  })
  export class PersonneService{
      constructor(public http:HttpClient){

      }
      public getAll(){
        return this.http.get("http://localhost:8888/personne/getAll")
      }

      public  add(p:Personne){
        return this.http.post("http://localhost:8888/personne/add",p,{responseType:"text"});
      }

      public getById(id:number){
        return this.http.get("http://localhost:8888/personne/getById/"+id);
      }
      
      public  update(p:Personne){
        return this.http.post("http://localhost:8888/personne/update",p,{responseType:"text"});
      }

      public deleteById(id:number){
        return this.http.get("http://localhost:8888/personne/deleteById/"+id);
      }

      public  delete(p:Personne){
        return this.http.post("http://localhost:8888/personne/delete",p,{responseType:"text"});
      }
  }