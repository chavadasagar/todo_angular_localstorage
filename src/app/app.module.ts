import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlltodoComponent } from './todo/component/alltodo/alltodo.component';
import { AddtodoComponent } from './todo/component/addtodo/addtodo.component';
import { NotfoundComponent } from './shared/notfound/notfound.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { TestDirective } from './directives/test.directive';
import { TodoViewComponent } from './todo/component/todo-view/todo-view.component';
import { EdittodoComponent } from './todo/compenent/edittodo/edittodo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserauthModule } from './userauth/userauth.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { TestinterceptorInterceptor } from './testinterceptor.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    AlltodoComponent,
    AddtodoComponent,
    NotfoundComponent,
    HeaderComponent,
    FooterComponent,
    TestDirective,
    TodoViewComponent,
    EdittodoComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    UserauthModule,
    FormsModule
  ],
  providers: [{provide:HTTP_INTERCEPTORS,useClass:TestinterceptorInterceptor,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
