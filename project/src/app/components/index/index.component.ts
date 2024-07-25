import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { Concierge } from 'src/app/models/concierge';
import { DialogExampleComponent } from '../dialog-example/dialog-example.component';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  concierges:Concierge[]=[];
  constructor(public dialog:MatDialog) { }

  ngOnInit(): void {
  }
openDialog()
{
 let dialogref= this.dialog.open(DialogExampleComponent,{data:{name:'med'}});
 dialogref.afterClosed().subscribe(result=>{
   console.log('Dialog Result', result);

 })
}
}
