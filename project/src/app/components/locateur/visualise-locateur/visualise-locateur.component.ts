import { Component, OnInit } from '@angular/core';
import { Locateur } from 'src/app/models/locateur';
import { ActivatedRoute, Router } from '@angular/router';
import {MatDialog,MatDialogConfig} from '@angular/material/dialog';
import { locateurservice } from 'src/app/services/locateur.services';
@Component({
  selector: 'app-visualise-locateur',
  templateUrl: './visualise-locateur.component.html',
  styleUrls: ['./visualise-locateur.component.css']
})
export class VisualiseLocateurComponent implements OnInit {
  private sub:any;
  private id:any;
  l:Locateur=new Locateur(null!,null!,null!,null!,null!,null!,null!,null!,null!);
  firstname: string;
  lastname:string;
  idd:number;
  email:string;
  adress:string;
  sexe:string;
  password:string;
  phone:string;
  cin:string;
  constructor(private route: ActivatedRoute,public dialog:MatDialog,public locateurService:locateurservice,public router:Router) 
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
  async getById(i:number) : Promise <Locateur> {
    return new Promise ((resolve,reject)=> {
      this.locateurService.getById (i).subscribe((res : any ) =>{
        this.l = res;
        this.firstname=this.l.firstname;
        this.lastname=this.l.lastname;
        this.idd=this.l.id;
        this.email=this.l.email;
        this.adress=this.l.adress;
        this.sexe=this.l.sexe;
        this.password=this.l.password;
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
