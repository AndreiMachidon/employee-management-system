import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from './../employee-service/employee.service';
import { Employee } from './../employee';
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-update-emloyee',
  templateUrl: './update-emloyee.component.html',
  styleUrls: ['./update-emloyee.component.css']
})
export class UpdateEmloyeeComponent implements OnInit {

  constructor(private employeeService: EmployeeService,
     @Inject(MAT_DIALOG_DATA) public data : any,
     private router: Router,
     private route: ActivatedRoute,
     private snackBar: MatSnackBar) { }
  newEmployee : Employee = new Employee();

  ngOnInit(): void {
    this.employeeService.getEmployeeById(this.data.id).subscribe(data =>{
      this.newEmployee = data;
    }, error => console.log(error)
    );
  }

  employeeForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    salary: new FormControl('')
  });

  onSubmit(){ 
    this.employeeService.updateEmployee(this.data.id, this.newEmployee).subscribe(data => console.log(data));
    location.reload();

    this.snackBar.open("Employee updated", "Close")
    }

    
}


