import { Component, OnInit,Inject } from '@angular/core';
import {MatDialogRef,MAT_DIALOG_DATA , MatDialog} from "@angular/material/dialog";




@Component({
  selector: 'app-dialog-example',
  templateUrl: './dialog-example.component.html',
  styleUrls: ['./dialog-example.component.css']
})
export class DialogExampleComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data:any,   public dialog: MatDialog,
  public dialogre:MatDialogRef<DialogExampleComponent>
) { }

  ngOnInit(): void {
  }
  /*onclick(){
    var TypeDeleteF="favorite"
    var TypeDeleteP="property"
    if(TypeDeleteF==this.data.idProperty){ 
  
     //console.log("deelele","delelel")
     this.dialogre.close('delete')   
    }
    else
    {
   // console.log("deelele","delelel")
     this.dialogre.close('ndelete') 
   }
 
  }*/



}
