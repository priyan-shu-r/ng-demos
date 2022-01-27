import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'To-do-List';
  list:any=[];
  addTask(item:string)
  {
    if(item.trim().length == 0)
    {
      alert("invalid input");
    }
    else
    {
      this.list.push(item);
    }
  }

  rmTask(id:number)
  {
    this.list.splice(id,1);
  }  

}
