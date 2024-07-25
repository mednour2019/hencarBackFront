import { Component, OnInit } from '@angular/core';
import { Locateur } from 'src/app/models/locateur';
import { locateurservice } from 'src/app/services/locateur.services';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Concierge } from '../../../models/concierge';
import { Personne } from '../../../models/personne';
import { conciergeservice } from '../../../services/concierge.services';
import { PersonneService } from '../../../services/personne.services';
import {MatDialogModule} from '@angular/material/dialog';
import { Inject } from '@angular/core';    
import { DOCUMENT } from '@angular/common';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'app-add-locateur',
  templateUrl: './add-locateur.component.html',
  styleUrls: ['./add-locateur.component.css']
})
export class AddLocateurComponent implements OnInit {
  l:Locateur=new Locateur(null!,null!,null!,null!,null!,null!,null!,null!,null!);
  selected:"employe";
  myForm:FormGroup;
  constructor(public  locateurService:locateurservice,
    public router:Router,@Inject(DOCUMENT) private document: Document,public fb:FormBuilder)
     { 

     }

  ngOnInit(): void {
    console.log(" testtt",this.locateurService)
    this.myForm=this.fb.group({
      firstname: ['', [
         Validators.required,
         //Validators.email
         Validators.minLength(2),
         Validators.pattern('')
       ]],
       
 lastname: ['', [
   Validators.required,
  // Validators.email
  Validators.minLength(2),
  Validators.pattern('')
 ]],
 email: ['', [
   Validators.required,
   Validators.email
 ]],
 password:['', [
   Validators.required,
   Validators.pattern(''),
   Validators.minLength(2)
 ]],
   
 cin: ['', [
   Validators.required,
   //Validators.email
   Validators.minLength(2),
   Validators.pattern('')
 ]],
 
   
 tel: ['', [
   Validators.required,
  // Validators.email
  Validators.minLength(2),
  Validators.pattern('')
 ]],
 adresse: ['', [
   Validators.required,
  // Validators.email
  Validators.minLength(2),
  Validators.pattern('')
 ]],
     
       sexe: ['', Validators.required],
       
      
   
      
 
     })
     this.myForm.valueChanges.subscribe(console.log);
  }
  ajouter(){
    if(this.l.firstname==null){
      console.log("eeeeeeeeeee")
    }else{
    this.locateurService.add(this.l).subscribe((res:any)=>{
      console.log(res)
      console.log("hhhhhh",res)
    
     
      //this.router.navigate(['/listeConcierge']);
    
this.refresh();

      
    })
  
  }
  }
  refresh(){
    // this.router.navigate(['/addConcierge']);
     //this.router.navigate(["listeConcierge"]);
     this.document.location.reload();
   }


}
