import { Component } from '@angular/core';
import { DialogService } from './dialog.service';
import { Userdata } from './userdata';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'table';
  
  constructor(private dialogService: DialogService ) {}
 
// Adding name in table

  addName(frstNm:string,lstNm:string,edit:boolean)
{
    if(frstNm!='' && lstNm!='')
    this.userName.unshift({firstName:frstNm,lastName:lstNm,isEdit:edit});
}

// deleting name from table

delete(i:number)
{
  this.dialogService.openConfirmDialog('Are you sure to delete this record')
  .afterClosed().subscribe(res =>{
    if(res){
      this.userName.splice(i,1);
     }
  });
}

userName:Userdata[]=[
  {
    firstName: "Robert",
    lastName: "Campbell",
    isEdit:false,
  },
  {
    firstName: "Shawn",
    lastName: "Knorr",
    isEdit:false,
  },
  {
    firstName: "Henry",
    lastName: "Morgan",
    isEdit:false,
  },
  {
    firstName: "Frances",
    lastName: "Miller",
    isEdit:false,
  },
  {
    firstName: "Steave",
    lastName: "Smith",
    isEdit:false,
  },
  {
    firstName: "Gradalupe",
    lastName: "Bolan",
    isEdit:false,
  },
  {
    firstName: "Peter",
    lastName: "Parker",
    isEdit:false,
  },
  {
    firstName: "John",
    lastName: "Smith",
    isEdit:false
  }
 
];

isEdit(index:number){
  this.userName[index].isEdit = true;
}

// user cancels editing mode
isCancel(index:number){
  this.userName[index].isEdit = false;
}
// users clicks on save button
isSave(index:number){
  this.userName[index].isEdit = false;
}

}
