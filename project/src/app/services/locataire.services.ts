import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { locataire } from "../models/locataire";

@Injectable({
    providedIn: 'root'
  })
  export class locataireservice{
      constructor(public http:HttpClient){

      }
      public getAll(){
        return this.http.get("http://localhost:8888/locataire/getAll")
      }

      public  add(l:locataire){
        return this.http.post("http://localhost:8888/locataire/add",l,{responseType:"text"});
      }

      public getById(id:number){
        return this.http.get("http://localhost:8888/locataire/getById/"+id);
      }
      
      public  update(l:locataire){
        return this.http.post("http://localhost:8888/locataire/update",l,{responseType:"text"});
      }

      public deleteById(id:number){
        return this.http.get("http://localhost:8888/locataire/deleteById/"+id);
      }

      public  delete(l:locataire){
        return this.http.post("http://localhost:8888/locataire/delete",l,{responseType:"text"});
      }
  }