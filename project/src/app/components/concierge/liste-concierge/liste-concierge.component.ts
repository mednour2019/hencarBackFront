import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Concierge } from 'src/app/models/concierge';
import { conciergeservice } from 'src/app/services/concierge.services';
import {MatTableDataSource, _MatTableDataSource} from '@angular/material/table';
import {MatDialog,MatDialogConfig, MatDialogRef} from '@angular/material/dialog';
import {MatDialogModule} from '@angular/material/dialog';
import { AddConciergeComponent } from '../add-concierge/add-concierge.component';
import { Inject } from '@angular/core';    
import { DOCUMENT } from '@angular/common';
import { DialogExampleComponent} from 'src/app/components/dialog-example/dialog-example.component';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { from } from 'rxjs';



@Component({
  selector: 'app-liste-concierge',
  templateUrl: './liste-concierge.component.html',
  styleUrls: ['./liste-concierge.component.css']
})
export class ListeConciergeComponent implements OnInit {
concierges:Concierge[]=[];

dialogResult:string = "favorite";
idProperty: string = "favorite";
propertyName: string = "favorite";
typedelete:string="favorite";
gender: boolean = true;



  constructor(public conciergeservice:conciergeservice,public router:Router,public dialog:MatDialog,@Inject(DOCUMENT) private document: Document) {
    (async()=>
    {
     await this.getAll();
    

    }
      )
   }
   
  

  ngOnInit(): void {
    console.log("zzzzzz",this.getAll()) 
  }
  async getAll() : Promise <Array<Concierge>> {
    return new Promise ((resolve,reject)=> {
      this.conciergeservice.getAll ().subscribe((res : any ) =>{
        this.concierges = res;
       
        console.log(" jghgh",this.concierges)
        resolve(this.concierges);
      },(error=>{
          alert("error");
          reject("error on get all personness");
        })
      );
    });
  }
  supprimer(i:number){
  

    this.conciergeservice.delete(this.concierges[i]).subscribe((res:any)=>{
      console.log(res);
      (async()=>
    {
      await this.getAll();
    })(); 
    })
  
  }

  addPersonneRedirect(){
   // this.router.navigate(['/addConcierge']);
    const dialogconfig=new MatDialogConfig();
    dialogconfig.disableClose=true;
    dialogconfig.autoFocus=true;
    this.dialog.open(AddConciergeComponent);
  }


  updateLink(i:number){
    console.log(" thabet",this.concierges[i].id)
    this.router.navigate(['/updateConcierge/'+this.concierges[i].id]);
  }
  visualiseLink(i:number){
    console.log(" thabet",this.concierges[i].id)
    this.router.navigate(['/visualizeConcierge/'+this.concierges[i].id]);
  }
  refresh(){
   // this.router.navigate(['/addConcierge']);
    //this.router.navigate(["listeConcierge"]);
    this.document.location.reload();
  }
  onNoClick(i:number){
    let dialogref=  this.dialog.open(DialogExampleComponent, { width:'300px', height:'230px', 
  data: { idProperty:this.idProperty,propertyName:this.concierges[i].firstname,gender:this.gender}
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
}
