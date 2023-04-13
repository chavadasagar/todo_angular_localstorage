import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';
import { User } from '../modals/user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  userform:FormGroup = new FormGroup({
    name:new FormControl("sas"),
    email:new FormControl(),
    password:new FormControl()
  });


  constructor(private router:Router,private userser:UserService){}


  adduser()
  {
    let user = this.userform.value as User

    this.userser.AddUser(user);    

    this.router.navigate(['/']);
  }


}
