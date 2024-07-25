import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import {MatDialog,MatDialogConfig} from '@angular/material/dialog';
import { Inject } from '@angular/core';    
import { DOCUMENT } from '@angular/common';
import { DialogExampleComponent} from 'src/app/components/dialog-example/dialog-example.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTableDataSource, _MatTableDataSource} from '@angular/material/table';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { from } from 'rxjs';
import { MatDialogRef } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { Immeuble } from 'src/app/models/immeuble';
import { immeubleservice } from 'src/app/services/immeuble.services';
import { AddImmeubleComponent } from '../add-immeuble/add-immeuble.component';


@Component({
  selector: 'app-liste-immeuble',
  templateUrl: './liste-immeuble.component.html',
  styleUrls: ['./liste-immeuble.component.css']
})
export class ListeImmeubleComponent implements OnInit {
  myForm:FormGroup;
  immeubles:Immeuble[]=[];
  searchValue3:string;
   dialogResult:string = "favorite";
idProperty: string = "favorite";
propertyName: string = "favorite";
typedelete:string="favorite";
gender: boolean = true;
  //name: string;
  //adresse:string;
  constructor(public fb:FormBuilder,public immeubleService:immeubleservice,public router:Router,public dialog:MatDialog,@Inject(DOCUMENT) private document: Document) 
  {
    (async()=>
    {
      
     await this.getAll();
    

    }
      )
   }

  ngOnInit(): void {
   console.log("zzzzzz",this.getAll())
  }
  async getAll() : Promise <Array<Immeuble>> {
    return new Promise ((resolve,reject)=> {
      this.immeubleService.getAll ().subscribe((res : any ) =>{
        this.immeubles = res;
       
        
       
        console.log(" jghgh",this.immeubles)
        resolve(this.immeubles);
      },(error=>{
          alert("error");
          reject("error on get all immeubles");
        })
      );
    });
  }
  addImmeubleRedirect(){
    // this.router.navigate(['/addConcierge']);
     const dialogconfig=new MatDialogConfig();
     dialogconfig.disableClose=true;
     dialogconfig.autoFocus=true;
     this.dialog.open(AddImmeubleComponent,{
      height: '200px',
      width: '400px',
    });
   }
   onNoClick(i:number){
    let dialogref=  this.dialog.open(DialogExampleComponent, { width:'300px', height:'230px', 
  data: { idProperty:this.idProperty,propertyName:this.immeubles[i].name,gender:this.gender}
  });    
  dialogref.afterClosed().subscribe(res => {
    
    
      if(res){
       

      // this.remove(property)
      console.log("nour",res)
      this.supprimer(i);
      }
      else 
      {
        
        console.log("karim",res)
      //this.supprimer(i);
      }
      });
  
  }
  supprimer(i:number){
    this.immeubleService.delete(this.immeubles[i]).subscribe((res:any)=>{
      console.log(res);
      (async()=>
    {
      await this.getAll();
    })(); 
    })
  }
  updateLink(i:number){
    console.log(" thabet",this.immeubles[i].id)
    this.router.navigate(['/updateImmeuble/'+this.immeubles[i].id]);
  }

  addMaisonRedirect(i:number){
    this.router.navigate(['/addMaison/'+this.immeubles[i].id]);
     
   }
   showMaisonRedirect(i:number){
    this.router.navigate(['/listeMaison/'+this.immeubles[i].id]);

   }
}
