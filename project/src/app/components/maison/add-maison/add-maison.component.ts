import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { Inject } from '@angular/core';    
import { DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';
import {ScrollingModule} from '@angular/cdk/scrolling';
import { maison } from 'src/app/models/maison';
import { maisonservice } from 'src/app/services/maison.services';
import { immeubleservice } from 'src/app/services/immeuble.services';
import { Immeuble } from 'src/app/models/immeuble';
import { ActivatedRoute, Route } from '@angular/router';


@Component({
  selector: 'app-add-maison',
  templateUrl: './add-maison.component.html',
  styleUrls: ['./add-maison.component.css']
})
export class AddMaisonComponent implements OnInit {
  myForm:FormGroup;
  m:maison=new maison(null!,null!,null!,null!,null!,null!,null!,null!,null!);
  k:Immeuble=new Immeuble(null!,null!,null!);
  private sub:any;
  private id:any;
  selected:any;
  selected2:any;
  constructor(public fb:FormBuilder,public  maisonService:maisonservice,
    public immeubleService:immeubleservice,
    public router:Router,@Inject(DOCUMENT) private document: Document,private route: ActivatedRoute) 
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
      description: ['', [
         Validators.required,
         //Validators.email
         Validators.minLength(2),
         Validators.pattern('')
       ]],
       nombrechambre: ['', [
        Validators.required,
        //Validators.email
        Validators.minLength(2),
        Validators.pattern('')
      ]],
      prix: ['', [
        Validators.required,
        //Validators.email
        Validators.minLength(2),
        Validators.pattern('')
      ]],
      remisepromo: ['', [
        Validators.required,
        //Validators.email
        Validators.minLength(2),
        Validators.pattern('')
      ]],
      type: ['', Validators.required],
      ismeuble: ['', Validators.required],
  })
     this.myForm.valueChanges.subscribe(console.log);
  }
  async getById(i:number) : Promise <Immeuble> {
    return new Promise ((resolve,reject)=> {
      this.immeubleService.getById (i).subscribe((res : any ) =>{
        this.k = res;
        //this.m.immeuble=this.k;
        resolve(this.k);
      },(error=>{
          alert("error");
          reject("error on get immeuble");
        })
      );
    });
  }
  ajouter(){
this.m.immeuble=this.k;
this.m.etat="non louee";
    this.maisonService.add(this.m).subscribe((res:any)=>{
      
      console.log("hhhhhh",res)
    
     
     
      
    })
    
  }
}
