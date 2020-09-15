import { Component, OnInit } from '@angular/core';
import { Employee } from './models/employee';
import { EmployeeService } from './services/employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  empList : Employee[] = [];
  columnDefs = [
    {headerName: 'Id', field: 'id' },
    {headerName: 'First Name', field: 'firstName' },
    {headerName: 'Last Name', field: 'lastName'},
    {headerName: 'Salary', field: 'salary'},
    {headerName: 'Designation', field: 'designation'},
    {headerName: 'Address', field: 'address'},
    {headerName: 'Role', field: 'role'}
  ];
  
  
  constructor(private employeeService: EmployeeService) {

  }

  ngOnInit() {
    this.employeeService.getEmployees().subscribe(data => {
      this.empList = data;
    })
  }

}
