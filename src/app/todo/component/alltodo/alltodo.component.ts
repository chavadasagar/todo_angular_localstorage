import { Component, DoCheck, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodoService } from '../../service/todo.service';
import { UserService } from 'src/app/userauth/service/user.service';

@Component({
  selector: 'app-alltodo',
  templateUrl: './alltodo.component.html',
  styleUrls: ['./alltodo.component.css']
})
export class AlltodoComponent implements DoCheck,OnInit{



  alltodo!:any 
  constructor(private router:Router,private todoser:TodoService,private userser:UserService){
    this.alltodo = this.todoser.getAlltodo();    
  }
  ngOnInit(): void {
    if(!this.userser.isUserLogin())
    {
      this.router.navigate(['/'])      
    }
  }
  
  ngDoCheck(): void {
    this.alltodo = this.todoser.getAlltodo();    
  }

  deletetodo(id:number){
    let todos =this.todoser.getAlltodo();

    todos = todos.filter(val => val.id!=id);

    localStorage.setItem("alltodo",JSON.stringify(todos));
  }
  edittodo(id:number){
    this.router.navigate(["edittodo",id])
  }
}
