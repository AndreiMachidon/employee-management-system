import { Employee } from './../employee';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EmployeeService } from '../employee-service/employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  public employee: Employee = new Employee()

  constructor(private employeeService: EmployeeService,
    @Inject(MAT_DIALOG_DATA) public data : any) { }

  ngOnInit(): void {
    this.employeeService.getEmployeeById(this.data.id).subscribe(data =>{
      this.employee = data;
    }, error => console.log(error)
    );
  }
}
