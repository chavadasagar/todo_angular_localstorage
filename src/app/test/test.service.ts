import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Test } from '../modals/test';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private http:HttpClient) { }

  getalltodo(){
    let users = this.http.get<Test[]>("https://jsonplaceholder.typicode.com/todos");

    return users;
  }

  

}
