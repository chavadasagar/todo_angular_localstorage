import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TodoService } from '../../service/todo.service';
import { Todo } from 'src/app/modals/todo';

@Component({
  selector: 'app-edittodo',
  templateUrl: './edittodo.component.html',
  styleUrls: ['./edittodo.component.css'],
})
export class EdittodoComponent implements OnInit {
  todoform: FormGroup = new FormGroup({
    id: new FormControl(''),
    name: new FormControl('test'),
    isactive: new FormControl(true),
  });

  oldtodo!:Todo

  constructor(
    private route: ActivatedRoute,
    private todoser: TodoService,
    private router: Router
  ) {
    let todoid = this.route.snapshot.params['id'] as Number;
    let todo = todoser.getAlltodo().filter((val) => val.id == todoid)[0];
    this.oldtodo = todo;
    this.todoform.setValue({
      id: todoid,
      name: todo.name,
      isactive: todo.isactive,
    });
  }

  ngOnInit(): void {}

  edittodo() {

    let todo = this.todoform.value as Todo;
    todo.createddate = this.oldtodo.createddate;
    todo.updateddate = new Date();
    this.todoser.updatetodo(todo);
    this.router.navigate(['alltodo']);
  
  }
}
