import { Component, OnInit } from '@angular/core';
import { Concierge } from 'src/app/models/concierge';
import { ActivatedRoute, Route } from '@angular/router';
import { Router } from '@angular/router';
import { conciergeservice } from 'src/app/services/concierge.services';

@Component({
  selector: 'app-visualise-concierge',
  templateUrl: './visualise-concierge.component.html',
  styleUrls: ['./visualise-concierge.component.css']
})
export class VisualiseConciergeComponent implements OnInit {
  private sub:any;
  private id:any;
  c:Concierge=new Concierge(null!,null!,null!,null!,null!,null!,null!,null!,null!);
  constructor(private route: ActivatedRoute,public conciergeService:conciergeservice,public router:Router)
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

  async getById(i:number) : Promise <Concierge> {
    return new Promise ((resolve,reject)=> {
      this.conciergeService.getById (i).subscribe((res : any ) =>{
        this.c = res;
        resolve(this.c);
      },(error=>{
          alert("error");
          reject("error on get personne");
        })
      );
    });
  }
  
}
