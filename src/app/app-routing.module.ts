import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdduserComponent } from './adduser/adduser.component';
import { EdituserComponent } from './edituser/edituser.component';
import { UserslistComponent } from './userslist/userslist.component';

const routes: Routes = [
  {path:'',component:AdduserComponent},
  {path:'add',component:AdduserComponent},
  {path:'edit/:id',component:EdituserComponent},
  {path:'list',component:UserslistComponent}
  ];
  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
