import { Component, OnInit } from '@angular/core';
import { locataire } from 'src/app/models/locataire';
import { ActivatedRoute, Route } from '@angular/router';
import { conciergeservice } from 'src/app/services/concierge.services';
import { Router } from '@angular/router';
import { locataireservice } from 'src/app/services/locataire.services';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'app-update-locataire',
  templateUrl: './update-locataire.component.html',
  styleUrls: ['./update-locataire.component.css']
})
export class UpdateLocataireComponent implements OnInit {
  private sub:any;
  private id:any;
  selected:"employe";
  myForm:FormGroup;
  l:locataire =new locataire(null!,null!,null!,null!,null!,null!,null!,null!,null!,null!);
  constructor(private route: ActivatedRoute,public locatairreService:locataireservice,
    public router:Router,public fb:FormBuilder)
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
      
      job: ['', Validators.required],
  
     

    })
    this.myForm.valueChanges.subscribe(console.log);
  }
  async getById(i:number) : Promise <locataire> {
    return new Promise ((resolve,reject)=> {
      this.locatairreService.getById (i).subscribe((res : any ) =>{
        this.l = res;
        resolve(this.l);
      },(error=>{
          alert("error");
          reject("error on get personne");
        })
      );
    });
  }
  update(){
    this.locatairreService.update(this.l).subscribe((res:any)=>{
      console.log("hhhhh",res)
      this.router.navigate(['/listeLocataire']);
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
