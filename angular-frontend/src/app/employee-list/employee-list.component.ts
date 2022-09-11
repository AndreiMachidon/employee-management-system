import { EmployeeDetailsComponent } from './../employee-details/employee-details.component';
import { MatTableDataSource } from '@angular/material/table';
import { EmployeeService } from './../employee-service/employee.service';
import { Employee } from './../employee';
import { Component, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { UpdateEmloyeeComponent } from '../update-emloyee/update-emloyee.component';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements AfterViewInit, OnInit {

  
  displayedColumns: string[] = [ 'firstName', 'lastName', 'email','salary', 'actions'];

  
  employees !: MatTableDataSource<any>
  
  @ViewChild(MatSort) sort !: MatSort;
  @ViewChild(MatPaginator) paginator !: MatPaginator;
  

  constructor(private employeeService : EmployeeService,
    public dialog: MatDialog) {}

  ngOnInit(): void {
    this.employeeService.getEmployeesList().subscribe(data => {
      this.employees= new MatTableDataSource(data) ;    
    })
    
  }

  ngAfterViewInit() {
    setTimeout(() => this.employees.paginator = this.paginator, 10);
    setTimeout(() => this.employees.sort = this.sort, 10);
   
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.employees.filter = filterValue.trim().toLowerCase();     
  }

  openUpdateDialog(employeeId: number){
    this.dialog.open(UpdateEmloyeeComponent, {
      data: {
        id: employeeId,
      }
    })
  }

  openDetailsDialog(employeeId: number){
    this.dialog.open(EmployeeDetailsComponent,{
      data: {
        id: employeeId,
      }
    } )
  }

  updateEmployee(id: number){
    this.openUpdateDialog(id);
    
  }

  deleteEmployee(id: number){
    this.employeeService.deleteEmployee(id).subscribe(data =>{
      console.log(data)
    })

    location.reload();
    
  }

  employeeDetails(id : number){
    this.openDetailsDialog(id);
  }

}
