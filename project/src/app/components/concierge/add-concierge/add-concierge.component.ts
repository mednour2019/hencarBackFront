import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Concierge } from '../../../models/concierge';
import { Personne } from '../../../models/personne';
import { conciergeservice } from '../../../services/concierge.services';
import { PersonneService } from '../../../services/personne.services';
import {MatDialogModule} from '@angular/material/dialog';
import { Inject } from '@angular/core';    
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-add-concierge',
  templateUrl: './add-concierge.component.html',
  styleUrls: ['./add-concierge.component.css']
})
export class AddConciergeComponent implements OnInit {
  c:Concierge=new Concierge(null!,null!,null!,null!,null!,null!,null!,null!,null!);
  //personne:Personne=new Personne(null!,null!,null!,null!,null!,null!,null!,null!);
  constructor(/*public personneService:PersonneService,*/ public  conciergeService:conciergeservice,
    public router:Router,@Inject(DOCUMENT) private document: Document) { 
   }

  ngOnInit(): void {
    console.log(" testtt",this.conciergeService)
  }

  ajouter(){
    if(this.c.firstname==null){
      console.log("eeeeeeeeeee")
    }else{
    this.conciergeService.add(this.c).subscribe((res:any)=>{
      console.log(res)
      console.log("hhhhhh",res)
    
     
      this.router.navigate(['/listeConcierge']);
    
this.refresh();

      
    })
  
  }
  }

  refresh(){
    // this.router.navigate(['/addConcierge']);
     //this.router.navigate(["listeConcierge"]);
     this.document.location.reload();
   }
   keyPress(event: any) {
    const pattern = /[0-9\+\-\ ]/;

    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }

}
