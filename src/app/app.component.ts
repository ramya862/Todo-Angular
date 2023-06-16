import { Component } from '@angular/core';
import {Todo, updatetodo} from './todo';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Project';
  

  ngOnInit() {
    
  }
  Edit(event:any)
  {
    console.log("Complete Angular fast")
  }
  uValue:string='';
  todoValue:string='';
  list:Todo[]=[];
  list1:updatetodo[]=[];
  isDone:boolean=false;
  addItem()
  {
    if(this.todoValue!=="")
    {
      const newItem:Todo ={
        id:Date.now(),
        value:this.todoValue,
        isDone:false   
         };
      this.list.push(newItem);
    }
    this.todoValue='';
  }
  done()
  {
    this.isDone=false;
  }
  pending()
  {
    this.isDone=true;
  }
  deleteItem(id:number)
  {
    this.list=this.list.filter(item =>item.id!==id);
  }
  edit(id:number)
  {
    if(this.todoValue!=="")
    {
      this.list=this.list.filter(item =>item.id!==id);

      const newItem:Todo ={
        value:this.todoValue,
        id:Date.now(),
        isDone:this.isDone
      };
      this.list.push(newItem);
    }
    this.todoValue='';
  }
  completed()
  {

  }
  todoname=''
  placeholder='edit the task'

}
  