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
import { locateurservice } from 'src/app/services/locateur.services';
import { Locateur } from 'src/app/models/locateur';
import { AddLocateurComponent } from '../add-locateur/add-locateur.component';
@Component({
  selector: 'app-liste-locateur',
  templateUrl: './liste-locateur.component.html',
  styleUrls: ['./liste-locateur.component.css']
})
export class ListeLocateurComponent implements OnInit {
  myForm:FormGroup;
  locateurs:Locateur[]=[];
  searchValue2:string;
  dialogResult:string = "favorite";
idProperty: string = "favorite";
propertyName: string = "favorite";
typedelete:string="favorite";
gender: boolean = true;
firstname:string;
  constructor(public fb:FormBuilder,public locateurService:locateurservice,public router:Router,public dialog:MatDialog,@Inject(DOCUMENT) private document: Document)
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
  async getAll() : Promise <Array<Locateur>> {
    return new Promise ((resolve,reject)=> {
      this.locateurService.getAll ().subscribe((res : any ) =>{
        this.locateurs = res;
       
        console.log(" jghgh",this.locateurs)
        resolve(this.locateurs);
      },(error=>{
          alert("error");
          reject("error on get all locataires");
        })
      );
    });
  }
  addLocateurRedirect()
  {
    const dialogconfig=new MatDialogConfig();
    dialogconfig.disableClose=true;
    dialogconfig.autoFocus=true;
    this.dialog.open(AddLocateurComponent,{
      height: '400px',
      width: '600px',
    });
  }
  supprimer(i:number){
    this.locateurService.delete(this.locateurs[i]).subscribe((res:any)=>{
      console.log(res);
      (async()=>
    {
      await this.getAll();
    })(); 
    })
  }
  onNoClick(i:number){
    let dialogref=  this.dialog.open(DialogExampleComponent, { width:'300px', height:'230px', 
  data: { idProperty:this.idProperty,propertyName:this.locateurs[i].firstname,gender:this.gender}
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
  updateLink(i:number){
    console.log(" thabet",this.locateurs[i].id)
    this.firstname=this.locateurs[i].firstname;
    this.router.navigate(['/updateLocateur/'+this.locateurs[i].id]);
  }
  visualiseLink(i:number){
    console.log(" thabet",this.locateurs[i].id)
    this.router.navigate(['/visualizeLocateur/'+this.locateurs[i].id]);
    


  }

}
