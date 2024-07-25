import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { locataire } from 'src/app/models/locataire';
import { locataireservice } from 'src/app/services/locataire.services';
import {MatDialog,MatDialogConfig} from '@angular/material/dialog';

@Component({
  selector: 'app-visualise-locataire',
  templateUrl: './visualise-locataire.component.html',
  styleUrls: ['./visualise-locataire.component.css']
})
export class VisualiseLocataireComponent implements OnInit {
  private sub:any;
  private id:any;
  l:locataire=new locataire(null!,null!,null!,null!,null!,null!,null!,null!,null!,null!);
  firstname: string;
  lastname:string;
  idd:number;
  email:string;
  adress:string;
  sexe:string;
  password:string;
  jobb:string;
  phone:string;
  cin:string;
  constructor(private route: ActivatedRoute,public dialog:MatDialog,public locataireService:locataireservice,public router:Router) 
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
  }
  async getById(i:number) : Promise <locataire> {
    return new Promise ((resolve,reject)=> {
      this.locataireService.getById (i).subscribe((res : any ) =>{
        this.l = res;
        this.firstname=this.l.firstname;
        this.lastname=this.l.lastname;
        this.idd=this.l.id;
        this.email=this.l.email;
        this.adress=this.l.adress;
        this.sexe=this.l.sexe;
        this.password=this.l.password;
        this.jobb=this.l.job;
        this.phone=this.l.tel;
        this.cin=this.l.cin;
        resolve(this.l);
      },(error=>{
          alert("error");
          reject("error on get locataire");
        })
      );
    });
  }
}
