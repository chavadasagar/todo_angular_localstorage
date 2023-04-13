import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-view',
  templateUrl: './todo-view.component.html',
  styleUrls: ['./todo-view.component.css']
})
export class TodoViewComponent implements OnInit{

  @Input() todo:any;

  constructor(){}

  ngOnInit(): void {
  }



}
