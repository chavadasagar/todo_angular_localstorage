import { JsonPipe } from '@angular/common';
import { Injectable } from '@angular/core';
import { Todo } from 'src/app/modals/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }

  getAlltodo()
  {
    let todos = localStorage.getItem("alltodo")==null ? [] : JSON.parse(localStorage.getItem("alltodo")!);
    let alltodos = todos as Todo[];
    return alltodos;
  }

  getIdAlltodo(id:number)
  {
    let todos = localStorage.getItem("alltodo")==null ? [] : JSON.parse(localStorage.getItem("alltodo")!);
    return todos.filtter((val: { id: number; }) => val.id == id);
  }


  addtodo(todoname:Todo){
    let todos =this.getAlltodo();

    todos.push(todoname);
    
    localStorage.setItem("alltodo",JSON.stringify(todos));
  }  

  deletetodo(id:number){
    let todos = this.getAlltodo();

    todos = todos.filter((val: { id: any; })=> val.id!=id);
    todos = todos.filter(val => val.id == id);
    localStorage.setItem("alltodo",JSON.stringify(todos));

  }


  updatetodo(todo:Todo)
  {
    let alltodo = this.getAlltodo().map(val => {
      if(val.id == todo.id){
        val = todo;
        return val;
      }
      else{
        return val;
      }
    });
    localStorage.setItem("alltodo",JSON.stringify(alltodo));
  }

  istodoexists(todoname:string)
  {
    let todo = this.getAlltodo().filter(val => val.name == todoname);

    if(todo == null)
    {
      return false;
    }
    return true;
  }
}
