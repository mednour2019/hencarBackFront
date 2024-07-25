import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { Router } from '@angular/router';
import { Concierge } from 'src/app/models/concierge';
import { conciergeservice } from 'src/app/services/concierge.services';

@Component({
  selector: 'app-update-concierge',
  templateUrl: './update-concierge.component.html',
  styleUrls: ['./update-concierge.component.css']
})
export class UpdateConciergeComponent implements OnInit {
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

  update(){
    this.conciergeService.update(this.c).subscribe((res:any)=>{
      console.log("hhhhh",res)
      this.router.navigate(['/listeConcierge']);
    })
  }
}
