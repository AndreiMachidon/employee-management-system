import { EmployeeService } from './../employee-service/employee.service';
import { Employee } from './../employee';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Form, FormControl, FormGroup, Validators} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-create-employee-form',
  templateUrl: './create-employee-form.component.html',
  styleUrls: ['./create-employee-form.component.css']
})
export class CreateEmployeeFormComponent implements OnInit {

  newEmployee: Employee = new Employee();
  employeeForm = new FormGroup({
    firstName: new FormControl(Validators.required, Validators.minLength(3)),
    lastName: new FormControl(Validators.required, Validators.minLength(3)),
    email: new FormControl(Validators.required, Validators.email),
    salary: new FormControl(''),
  });

  constructor(private employeeService: EmployeeService,
    private router: Router,
    private snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  saveEmployee(){
    this.employeeService.createEmployee(this.newEmployee).subscribe(data =>{
      console.log(data);  
      this.snackBar.open("Employee saved", "Close")
     },
     error =>{
           this.snackBar.open("Employee already created", "Close");  
     })
      
     
  }
  onSubmit(){
      this.saveEmployee();
      this.employeeForm.reset(); 
  }

}
