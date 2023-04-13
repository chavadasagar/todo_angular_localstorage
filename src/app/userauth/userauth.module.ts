import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserauthRoutingModule } from './userauth-routing.module';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent
  ],
  imports: [
    CommonModule,
    UserauthRoutingModule,
    ReactiveFormsModule,
  ]
})
export class UserauthModule { }
