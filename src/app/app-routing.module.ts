import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlltodoComponent } from './todo/component/alltodo/alltodo.component';
import { AddtodoComponent } from './todo/component/addtodo/addtodo.component';
import { NotfoundComponent } from './shared/notfound/notfound.component';
import { EdittodoComponent } from './todo/compenent/edittodo/edittodo.component';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
    {
      path:"",
      loadChildren:()=>import("./userauth/userauth.module").then(m=>m.UserauthModule)
    },
    {
      path:"user",
      loadChildren:()=>import("./users/users.module").then(m=>m.UsersModule)
    },
    {
      path:"alltodo",
      component:AlltodoComponent,
      canActivate:[AuthGuard]
    },
    {
      path:"addtodo",
      component:AddtodoComponent,
      canActivate:[AuthGuard]
    },
    {
      path:"addtodo",
      component:AddtodoComponent,
      canActivate:[AuthGuard]
    },
    {
      path:"edittodo/:id",
      component:EdittodoComponent,
      canActivate:[AuthGuard]
    },
    {
      path:"**",
      component:NotfoundComponent
    },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
