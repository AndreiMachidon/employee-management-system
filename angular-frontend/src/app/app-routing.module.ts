import { HomePageComponent } from './home-page/home-page.component';
import { CreateEmployeeFormComponent } from './create-employee-form/create-employee-form.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdateEmloyeeComponent } from './update-emloyee/update-emloyee.component';

const routes: Routes = [
  {path:"employees", component: EmployeeListComponent},
  {path: 'add', component: CreateEmployeeFormComponent},
  {path: 'update/:id', component: UpdateEmloyeeComponent},
  {path: '', component: HomePageComponent}
  //{path:'', redirectTo: 'employees', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
