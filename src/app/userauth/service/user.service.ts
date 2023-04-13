import { Injectable } from '@angular/core';
import { User } from '../modals/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  GetAllUser()
  {
    let alluser = localStorage.getItem("users") == null ? [] : JSON.parse(localStorage.getItem("users")!) as User[];
    return alluser;
  }

  AddUser(user:User){
    let allusers = this.GetAllUser();
    user.createddate = new Date();
    user.id = allusers.length + 1;
    allusers.push(user);
    localStorage.setItem("users",JSON.stringify(allusers));
  }
  
  UpdateUser(user:User)
  {
    let allusers = this.GetAllUser().map(val => {
      if(val.id == user.id)
      {
        user.updateddate = new Date();
        user.createddate = val.createddate;
        val = user;
        return val;
      }
      else{
        return val;
      }
    });

    localStorage.setItem("users",JSON.stringify(allusers));
  }
  
  DeleteTodo(id:Number)
  {
    localStorage.setItem("users",JSON.stringify(this.GetAllUser().filter(val => val.id!=id)));
  }

  AuthUser(email:string,password:string)
  {
    let IsValidUser = false;

    this.GetAllUser().forEach(val=>{
      if(val.email == email && val.password == password)
      {
        localStorage.setItem("loginuser",JSON.stringify(val));
        
        IsValidUser = true;
      }
      else{
        localStorage.setItem("loginuser",JSON.stringify(null));
      }
    });
    return IsValidUser;
  }

  isUserLogin()
  {
    let result = false;

    if(localStorage.getItem("loginuser")!='null' && localStorage.getItem("loginuser")!=null)
    {
      result = true;
    }

    return result;
  }


}
