import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  getEmployees()
  {
    return [{id:"1",name:"Vishwas",age:"21"},
    {id:"2",name:"ooooooooooo",age:"21"},
    {id:"3",name:"reymonds",age:"21"},
    {id:"4",name:"pppp",age:"21"},
    {id:"5",name:"ddddd",age:"21"}];
  }
  constructor() {}
}
