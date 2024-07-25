import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import {MatDialogModule} from '@angular/material/dialog';
import { Inject } from '@angular/core';    
import { DOCUMENT } from '@angular/common';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { Immeuble } from 'src/app/models/immeuble';
import { immeubleservice } from 'src/app/services/immeuble.services';
@Component({
  selector: 'app-add-immeuble',
  templateUrl: './add-immeuble.component.html',
  styleUrls: ['./add-immeuble.component.css']
})
export class AddImmeubleComponent implements OnInit {
  i:Immeuble=new Immeuble(null!,null!,null!);
  myForm:FormGroup;
  constructor(public  immeubleService:immeubleservice,
    public router:Router,@Inject(DOCUMENT) private document: Document,public fb:FormBuilder) { }

  ngOnInit(): void {
    console.log(" testtt",this.immeubleService)
    this.myForm=this.fb.group({
      name: ['', [
         Validators.required,
         //Validators.email
         Validators.minLength(2),
         Validators.pattern('')
       ]],
       
 adresse: ['', [
   Validators.required,
  // Validators.email
  Validators.minLength(2),
  Validators.pattern('')
 ]],
 
  })
     this.myForm.valueChanges.subscribe(console.log);
  }
  ajouter(){
    
    this.immeubleService.add(this.i).subscribe((res:any)=>{
      console.log(res)
      console.log("hhhhhh",res)

       this.router.navigate(['/listeImmeuble']);
    
this.refresh();
    })
    
  
  
  }
  refresh(){
    // this.router.navigate(['/addConcierge']);
     //this.router.navigate(["listeConcierge"]);
     this.document.location.reload();
   }

}
