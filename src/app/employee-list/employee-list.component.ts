import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  public employee=[];
  constructor(private _employeeService:EmployeeService) { }

  ngOnInit() {
    this.employee=this._employeeService.getEmployees();
  }

}
