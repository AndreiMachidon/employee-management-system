import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { CreateEmployeeFormComponent } from './create-employee-form/create-employee-form.component';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { UpdateEmloyeeComponent } from './update-emloyee/update-emloyee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    MenuBarComponent,
    CreateEmployeeFormComponent,
    UpdateEmloyeeComponent,
    EmployeeDetailsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
