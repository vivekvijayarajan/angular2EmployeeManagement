import { EmployeeService } from './app.employee.service';
import { IEmployee } from './app.IEmployee';
import { Component,Input  } from '@angular/core';


@Component({
  selector: 'app-employee',
  templateUrl: './app.employee.component.html'
 })

export class EmployeeComponent
{

OnSearchClicked(searchString)
{
	this.fliterBy = searchString;
}

@Input() fliterBy:string;
pageTitle:string = 'Employees';
showSomeImage:boolean = false;
employees:IEmployee[];
 errorMessage: string;
constructor(private _employeeService:EmployeeService)
{

}
 ngOnInit(): void {
      this._employeeService.getEmployees()
                .subscribe(employees => this.employees = employees,
                           error => this.errorMessage = <any>error);
    }
}