import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';
import { FormControl, FormGroup } from '@angular/forms';
import { User } from '../modals/user';
import { TestService } from 'src/app/test/test.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  message!:string
  messagevisibl:string = "d-none"
  alertclass!:string

  loginform = new FormGroup({
    email:new FormControl(),
    password:new FormControl()
  });

  constructor(private router:Router,private userser:UserService,private test:TestService){
    if(userser.isUserLogin())
    {
      router.navigate(['alltodo']);
    }    
  }

  authuser(){
    let user = this.loginform.value as User;

    if(this.userser.AuthUser(user.email,user.password))
    {
      this.messagevisibl = ""
      this.message = "success!!!";
      this.alertclass = "alert alert-success"

      setTimeout(() => {
        this.router.navigate(['alltodo']);
      }, 3000);

    }
    else{
      this.messagevisibl = ""
      this.message = "email or password is wrong";
      this.alertclass = "alert alert-danger"
    }
    
    setTimeout(() => {
      this.messagevisibl = "d-none"
    }, 4000);



  }





}
