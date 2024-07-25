import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { maison } from 'src/app/models/maison';
import { maisonservice } from 'src/app/services/maison.services';

@Component({
  selector: 'app-visualize-maison',
  templateUrl: './visualize-maison.component.html',
  styleUrls: ['./visualize-maison.component.css']
})
export class VisualizeMaisonComponent implements OnInit {
  private sub:any;
  private id:any;
  m:maison=new maison(null!,null!,null!,null!,null!,null!,null!,null!,null!);
  idd:number;
  etat:string;
  description:string;
  imm_name:string;
  constructor(private route: ActivatedRoute,public maisonService:maisonservice,public router:Router)
   {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; 
    })
    console.log(this.id);
    (async()=>
    {
      await this.getById(this.id)
    })();
    }

  ngOnInit(): void {
  }
  async getById(i:number) : Promise <maison> {
    return new Promise ((resolve,reject)=> {
      this.maisonService.getById (i).subscribe((res : any ) =>{
        this.m = res;
       this.idd=this.m.id;
       this.etat=this.m.etat;
       this.description=this.m.description;
       this.imm_name=this.m.immeuble.name;
        resolve(this.m);
      },(error=>{
          alert("error");
          reject("error on get maison");
        })
      );
    });
  }
 
}
