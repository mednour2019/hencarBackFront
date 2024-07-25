import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { locataire } from 'src/app/models/locataire';
import { locataireservice } from 'src/app/services/locataire.services';
import { Router } from '@angular/router';
import {MatDialog,MatDialogConfig} from '@angular/material/dialog';
import { Inject } from '@angular/core';    
import { DOCUMENT } from '@angular/common';
import { DialogExampleComponent} from 'src/app/components/dialog-example/dialog-example.component';
import {MatDialogModule} from '@angular/material/dialog';
import { AddLocataireComponent } from '../add-locataire/add-locataire.component';
import { conciergeservice } from 'src/app/services/concierge.services';
import {MatTableDataSource, _MatTableDataSource} from '@angular/material/table';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { from } from 'rxjs';
import { VisualiseLocataireComponent } from '../visualise-locataire/visualise-locataire.component';
import { MatDialogRef } from '@angular/material/dialog';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-liste-locataire',
  templateUrl: './liste-locataire.component.html',
  styleUrls: ['./liste-locataire.component.css']
})
export class ListeLocataireComponent implements OnInit {
   myForm:FormGroup;
   locataires:locataire[]=[];
   searchValue:string;
   dialogResult:string = "favorite";
idProperty: string = "favorite";
propertyName: string = "favorite";
typedelete:string="favorite";
gender: boolean = true;
  constructor(public fb:FormBuilder,public locataireservice:locataireservice,public router:Router,public dialog:MatDialog,@Inject(DOCUMENT) private document: Document)
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
  async getAll() : Promise <Array<locataire>> {
    return new Promise ((resolve,reject)=> {
      this.locataireservice.getAll ().subscribe((res : any ) =>{
        this.locataires = res;
       
        console.log(" jghgh",this.locataires)
        resolve(this.locataires);
      },(error=>{
          alert("error");
          reject("error on get all locataires");
        })
      );
    });
  }
  supprimer(i:number){
    this.locataireservice.delete(this.locataires[i]).subscribe((res:any)=>{
      console.log(res);
      (async()=>
    {
      await this.getAll();
    })(); 
    })
  }
  onNoClick(i:number){
    let dialogref=  this.dialog.open(DialogExampleComponent, { width:'300px', height:'230px', 
  data: { idProperty:this.idProperty,propertyName:this.locataires[i].firstname,gender:this.gender}
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
  visualiseLink(i:number){
    console.log(" thabet",this.locataires[i].id)
    this.router.navigate(['/visualizeLocataire/'+this.locataires[i].id]);
    

    //const dialogconfig=new MatDialogConfig();
     //dialogconfig.disableClose=true;
     //dialogconfig.autoFocus=true;
     
    
     
    // this.router.navigate(['/visualizeLocataire/'+this.locataires[i].id]);
   //  let dialogref=  this.dialog.open(VisualiseLocataireComponent, { width:'', height:'', 
  //data: { data:this.locataires[i].id}
 // });   
  //this.dialogResult.link('/visualizeLocataire/'+this.locataires[i].id);

   // this.dialog.open(VisualiseLocataireComponent);


  }

  updateLink(i:number){
    console.log(" thabet",this.locataires[i].id)
    this.router.navigate(['/updateLocataire/'+this.locataires[i].id]);
  }
  addLocataireRedirect(){
    // this.router.navigate(['/addConcierge']);
     const dialogconfig=new MatDialogConfig();
     dialogconfig.disableClose=true;
     dialogconfig.autoFocus=true;
     this.dialog.open(AddLocataireComponent);
   }
 
}
