import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
import { maison } from 'src/app/models/maison';
import { maisonservice } from 'src/app/services/maison.services';
import { Immeuble } from 'src/app/models/immeuble';
import { immeubleservice } from 'src/app/services/immeuble.services';
@Component({
  selector: 'app-liste-maison',
  templateUrl: './liste-maison.component.html',
  styleUrls: ['./liste-maison.component.css']
})
export class ListeMaisonComponent implements OnInit {
  myForm:FormGroup;
  maisons:maison[]=[];
  maisons2:maison[]=[];
  k:Immeuble =new Immeuble(null!,null!,null!);
  adresse:string;
  private sub:any;
  private id:any;
  constructor(public fb:FormBuilder,public maisonservice:maisonservice,
    public router:Router,public dialog:MatDialog,
    @Inject(DOCUMENT) private document: Document, public immeubleService:immeubleservice,private route: ActivatedRoute)
   { 
    /*(async()=>
    {
     await this.getAll();
    

    }
      )*/
      this.sub = this.route.params.subscribe(params => {
        this.id = +params['id']; 
      })
      console.log(this.id);
      (async()=>
      {
        await this.getById(this.id);
        await this.getByImmeubleId(this.k.id);
      })();
   }
   async getById(i:number) : Promise <Immeuble> {
    return new Promise ((resolve,reject)=> {
      this.immeubleService.getById (i).subscribe((res : any ) =>{
        this.k = res;
        this.adresse=this.k.adresse;
        console.log(" real",this.k.id)

        resolve(this.k);
      },(error=>{
          alert("error");
          reject("error on get immeuble");
        })
      );
    });
  }

  ngOnInit(): void {

  }




  async getByImmeubleId(idImmeuble:number) : Promise <Array<maison>> {
    return new Promise ((resolve,reject)=> {
      this.maisonservice.getByImmeubleId (idImmeuble).subscribe((res : any ) =>{
        console.clear()
        console.log(res)
        this.maisons=res
        resolve(this.maisons);      
      },(error=>{
          alert("error");
          reject("error on get all maisons");
        })
      );
    });
  }
  visualiseLink(i:number){
    console.log(" thabet",this.maisons[i].id)
    this.router.navigate(['/visualizeMaison/'+this.maisons[i].id]);
    


  }
  updateLink(i:number){
  
    this.router.navigate(['/updateMaison/'+this.maisons[i].id]);
  }
}
