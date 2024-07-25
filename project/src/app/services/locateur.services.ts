import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { locataire } from "../models/locataire";
import { Locateur } from "../models/locateur";

@Injectable({
    providedIn: 'root'
  })
  export class locateurservice{
      constructor(public http:HttpClient){

      }
      public getAll(){
        return this.http.get("http://localhost:8888/locateur/getAll")
      }

      public  add(l:Locateur){
        return this.http.post("http://localhost:8888/locateur/add",l,{responseType:"text"});
      }

      public getById(id:number){
        return this.http.get("http://localhost:8888/locateur/getById/"+id);
      }
      
      public  update(l:Locateur){
        return this.http.post("http://localhost:8888/locateur/update",l,{responseType:"text"});
      }

      public deleteById(id:number){
        return this.http.get("http://localhost:8888/locateur/deleteById/"+id);
      }

      public  delete(l:Locateur){
        return this.http.post("http://localhost:8888/locateur/delete",l,{responseType:"text"});
      }
  }