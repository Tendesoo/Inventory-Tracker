import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayInventoryComponent } from './components/display-inventory/display-inventory.component';
import { InputInventoryComponent } from './components/input-inventory/input-inventory.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ParentComponent } from './parent/parent.component';

const routes: Routes = [
  //{path : '', redirectTo : 'login', pathMatch: 'full'},
  { path: 'user', component: InputInventoryComponent },
  { path: '', component: LoginComponent },
  {path: 'data', component: DisplayInventoryComponent},
  {path: 'register', component: RegisterComponent},
  {path : 'info' , component: ParentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
