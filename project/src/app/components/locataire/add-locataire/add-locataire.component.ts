import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { locataire } from 'src/app/models/locataire';
import { Inject } from '@angular/core';    
import { DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';
import { locataireservice } from 'src/app/services/locataire.services';
import {ScrollingModule} from '@angular/cdk/scrolling';

@Component({
  selector: 'app-add-locataire',
  templateUrl: './add-locataire.component.html',
  styleUrls: ['./add-locataire.component.css']
})
export class AddLocataireComponent implements OnInit {
  myForm:FormGroup;
  selected:any;
 
  
  l:locataire=new locataire(null!,null!,null!,null!,null!,null!,null!,null!,null!,null!);

 

  constructor(public fb:FormBuilder,public  locataireService:locataireservice,
    public router:Router,@Inject(DOCUMENT) private document: Document) { }

  ngOnInit(): void {
    
   // console.log(" testtt",this.locataireService)
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
      agree:[false, [
        Validators.requiredTrue 

      
      ]],
      sexe: ['', Validators.required],
      job: ['', Validators.required],
  
     

    })
    this.myForm.valueChanges.subscribe(console.log);
  

  }
  
  ajouter(){

  
    this.locataireService.add(this.l).subscribe((res:any)=>{
      
      console.log("hhhhhh",res)
    
     
     
      
    })
    
  

  }
  get email()
  { return this.myForm.get('email')}
  get paswword()
  { return this.myForm.get('password')}
  get age()
  { return this.myForm.get('age')}
  get agree()
  { return this.myForm.get('agree')}
  get firstname()
  { return this.myForm.get('firstname')}
  get lastname()
  { return this.myForm.get('lastname')}
  get cin()
  { return this.myForm.get('cin')}
  get tel()
  { return this.myForm.get('tel')}
  get adresse()
  { return this.myForm.get('adresse')}
  get job()
  { return this.myForm.get('job')}


}
