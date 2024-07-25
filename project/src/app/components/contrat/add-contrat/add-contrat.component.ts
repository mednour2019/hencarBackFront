import { Component, OnInit } from '@angular/core';
import { locataire } from 'src/app/models/locataire';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { Inject } from '@angular/core';    
import { DOCUMENT } from '@angular/common';
import { locataireservice } from 'src/app/services/locataire.services';
import { Locateur } from 'src/app/models/locateur';
import { locateurservice } from 'src/app/services/locateur.services';
import { maison } from 'src/app/models/maison';
import { maisonservice } from 'src/app/services/maison.services';
import { Contrat } from 'src/app/models/contrat';
import { contratService } from 'src/app/services/contrat.services';

@Component({
  selector: 'app-add-contrat',
  templateUrl: './add-contrat.component.html',
  styleUrls: ['./add-contrat.component.css']
})

export class AddContratComponent implements OnInit {
  locataires:locataire[]=[];
  locateurs:Locateur[]=[];
  maisons :maison[]=[];
  locataire_selected:locataire;
  locateur_selected:Locateur;
  maison_selected:maison;
  nblocataires:number;
  nblocateurs:number;
  nbmaisons:number;
  k:string;
  selected:any;
  searchValue4:string;
  searchValue5:string;
  searchValue6:string;

  c:Contrat=new Contrat(null!,null!,null!,null!,null!,null!,null!);
  l:locataire=new locataire(null!,null!,null!,null!,null!,null!,null!,null!,null!,null!);
  lo:Locateur=new Locateur(null!,null!,null!,null!,null!,null!,null!,null!,null!);
  m:maison=new maison(null!,null!,null!,null!,null!,null!,null!,null!,null!);
 dd:Date;
 df:Date;
  constructor(public fb:FormBuilder,public locataireservice:locataireservice, 
    public locateurservice:locateurservice, public maisonservice:maisonservice,public contratService:contratService,
    public router:Router, @Inject(DOCUMENT) private document: Document) 
  {
    (async()=>
    {
     await this.getAll();
     await this.getAll2();
   
     await this.getAll3();
     
    

    }
      )
   }
  
 
  ngOnInit(): void {
    console.log("zzzzzz",this.getAll()) 
    console.log("zzzzzz",this.getAll2()) 
  
    console.log("zzzzzz",this.getAll3()) 
    
 
  }
  async getAll() : Promise <Array<locataire>> {
    return new Promise ((resolve,reject)=> {
      this.locataireservice.getAll ().subscribe((res : any ) =>{
        this.locataires = res;
        this.nblocataires=this.locataires.length;
        console.log(" jghgh",this.locataires)
        resolve(this.locataires);
      },(error=>{
          alert("error");
          reject("error on get all locataires");
        })
      );
    });
  }
  async getAll2() : Promise <Array<Locateur>> {
    return new Promise ((resolve,reject)=> {
      this.locateurservice.getAll ().subscribe((res : any ) =>{
        this.locateurs = res;
       this.nblocateurs=this.locateurs.length;
        console.log(" jghgh",this.locateurs)
        resolve(this.locateurs);
      },(error=>{
          alert("error");
          reject("error on get all locateurs");
        })
      );
    });
  }
  async getAll3() : Promise <Array<maison>> {
    return new Promise ((resolve,reject)=> {
      this.maisonservice.findByEtat().subscribe((res : any ) =>{
        this.maisons = res;
        this.nbmaisons=this.maisons.length;
        console.log(" jghgh",this.maisons)
        resolve(this.maisons);
        this.maisons=res;
      },(error=>{
          alert("error");
          reject("error on get all maisons");
        })
      );
    });
  }
 
 
  onNoClick(i:number){
    console.log("rahma",this.locataires[i]) 
    this.locataire_selected=this.locataires[i];
    
  }
  
  onNoClick2(i:number){
  
    console.log("rahma2",this.locateurs[i]) 
    this.locateur_selected=this.locateurs[i];
  
  }
  onNoClick3(i:number){
  
    console.log("rahma3",this.maisons[i]) 
    this.maison_selected=this.maisons[i];
  
  }
  
  addLocataireRedirect()
  {
    this.dd=this.c.datedebut;
    this.df=this.c.datefin;
    if(this.df<this.dd){
      console.log("errordate",this.df) 
    }else{
      console.log("datevrai",this.df) 


   }
    console.log("rahma54",this.locataire_selected)
    console.log("rahma55",this.locateur_selected)
    console.log("rahma56",this.maison_selected)
    this.l=this.locataire_selected;
    this.lo=this.locateur_selected;
    this.m=this.maison_selected;
    this.c.locataire=this.l;
    this.c.locateur=this.lo;
    this.c.maison=this.m;
    this.m.etat="louee";
    this.maisonservice.add(this.m).subscribe((res:any)=>{
      
      console.log("hhhhhh",res)
    
     
     
      
    })
    this.contratService.add(this.c).subscribe((res:any)=>{
   

  
      
      console.log("bi",this.m)
      console.log("hhhhhh",res)
    
      
     
      
    })
    
    this.document.location.reload();
  }
}
