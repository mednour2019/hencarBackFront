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

@Component({
  selector: 'app-etat-maison',
  templateUrl: './etat-maison.component.html',
  styleUrls: ['./etat-maison.component.css']
})
export class EtatMaisonComponent implements OnInit {
  myForm:FormGroup;
  maisons:Object[]=[];
  iui:number;
  m: maison = new maison(null!, null!, null!, null!, null!, null!, null!, null!, null!);

  constructor(public fb:FormBuilder,public maisonservice:maisonservice,
    public router:Router,public dialog:MatDialog,
    @Inject(DOCUMENT) private document: Document,private route: ActivatedRoute) 
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
  async getAll() : Promise <Array<Object>> {
    return new Promise ((resolve,reject)=> {
      this.maisonservice.findMaisonContrat().subscribe((res : any ) =>{
      
        this.maisons = res;

        console.log(" jghgh",this.maisons)
        resolve(this.maisons);
      },(error=>{
          alert("error");
          reject("error on get all maisons");
        })
      );
    });
  }

}
