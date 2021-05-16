import { Component, OnInit } from '@angular/core';
import { Employee } from './employee.model';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employeeList : Employee[] = [];
  fieldList : string []= [    
    "id","name","doj","salary"
  ];
  headerList : string[] = ["Emp #","Name","Joining Date","Salary"];

  constructor() { }

  ngOnInit(): void {
    let emp1 = new Employee(1,"keyur",new Date("2013-11-18"),11111);
    let emp2 = new Employee(2,"denish",new Date("2014-11-18"),12111);
    let emp3 = new Employee(3,"vinit",new Date("2015-11-18"),13111);
    this.employeeList = [emp1,emp2,emp3];
  }

}
