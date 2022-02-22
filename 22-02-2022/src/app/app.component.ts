import { Component } from '@angular/core';
import { Userdata } from './userdata';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'table';
  edit:boolean=false;
  

  addName(frstNm:string,lstNm:string)
  {
    if(frstNm!='' && lstNm!='')
    this.userName.unshift({firstName:frstNm,lastName:lstNm});
  }
  // removeName(frstNm:string,lstNm:string)
  // {
  //   for(let i=0;i<=this.userName.length;i++)
  //     if(this.userName[i].firstName == frstNm && this.userName[i].lastName == lstNm)
  //       this.userName.slice(i,1);
  //   console.log(frstNm);
  // }
  delete(i:number)
{
  this.userName.splice(i,1);
  // console.log(this.userName[0]);
}

change(frstNm:string,lstNm:string)
{
  this.edit=!this.edit;
  for(let i=0;i<=this.userName.length;i++)
  if(this.userName[i].firstName == frstNm && this.userName[i].lastName == lstNm)
    console.log("Priyanshu");
}

isedit=false;

  
   userName:Userdata[]=[
    {
      firstName: "Robert",
      lastName: "Campbell"
    },
    {
      firstName: "Shawn",
      lastName: "Knorr"
    },
    {
      firstName: "Henry",
      lastName: "Morgan"
    },
    {
      firstName: "Frances",
      lastName: "Miller"
    },
    {
      firstName: "Steave",
      lastName: "Smith"
    },
    {
      firstName: "Gradalupe",
      lastName: "Bolan"
    },
    {
      firstName: "Peter",
      lastName: "Parker"
    },
    {
      firstName: "John",
      lastName: "Smith"
    },
   
  ]
}
