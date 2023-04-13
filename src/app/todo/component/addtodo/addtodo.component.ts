import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { TodoService } from '../../service/todo.service';
import { Todo } from 'src/app/modals/todo';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addtodo',
  templateUrl: './addtodo.component.html',
  styleUrls: ['./addtodo.component.css'],
})
export class AddtodoComponent {
  todoform: FormGroup = new FormGroup({
    name: new FormControl('test'),
    isactive: new FormControl(true),
  });

  constructor(private todoser: TodoService,private router:Router) {}

  addtodo() {
    let todos = this.todoser.getAlltodo();

    let todo = this.todoform.value as Todo;
    todo.createddate = new Date();
    todo.id = todos.length+1;
    todos.push(todo);
    localStorage.setItem("alltodo",JSON.stringify(todos));
    this.todoform.reset();

    this.router.navigate(['alltodo']);
  }
}
