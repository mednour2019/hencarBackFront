import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { Router } from '@angular/router';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { Immeuble } from 'src/app/models/immeuble';
import { immeubleservice } from 'src/app/services/immeuble.services';
@Component({
  selector: 'app-update-immeuble',
  templateUrl: './update-immeuble.component.html',
  styleUrls: ['./update-immeuble.component.css']
})
export class UpdateImmeubleComponent implements OnInit {
  private sub:any;
  private id:any;
  myForm:FormGroup;
  l:Immeuble =new Immeuble(null!,null!,null!);
  constructor(private route: ActivatedRoute,public immeubleService:immeubleservice,
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

  async getById(i:number) : Promise <Immeuble> {
    return new Promise ((resolve,reject)=> {
      this.immeubleService.getById (i).subscribe((res : any ) =>{
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
    this.immeubleService.update(this.l).subscribe((res:any)=>{
      console.log("hhhhh",res)
      this.router.navigate(['/listeImmeuble']);
    })
  }
}
