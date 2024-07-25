import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Concierge} from "../models/concierge";
@Injectable({
    providedIn: 'root'
  })
  export class conciergeservice{
      constructor(public http:HttpClient){

      }
      public getAll(){
        return this.http.get("http://localhost:8888/concierge/getAll")
      }

      public  add(c: Concierge){
        return this.http.post("http://localhost:8888/concierge/add",c,{responseType:"text"});
      }

      public getById(id:number){
        return this.http.get("http://localhost:8888/concierge/getById/"+id);
      }
      
      public  update(c:Concierge){
        return this.http.post("http://localhost:8888/concierge/update",c,{responseType:"text"});
      }

      public deleteById(id:number){
        return this.http.get("http://localhost:8888/concierge/deleteById/"+id);
      }

      public  delete(c:Concierge){
        return this.http.post("http://localhost:8888/concierge/delete",c,{responseType:"text"});
      }
  }