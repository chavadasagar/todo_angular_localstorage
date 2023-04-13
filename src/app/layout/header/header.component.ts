import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TodoService } from 'src/app/todo/service/todo.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private todoser:TodoService,private router:Router){
  }

  search(value:any){   

  }

  logout(){
    debugger
    localStorage.removeItem("loginuser");
    this.router.navigate(['/'])
  }

}
