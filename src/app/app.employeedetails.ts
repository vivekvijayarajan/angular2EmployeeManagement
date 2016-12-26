import { EmployeeService } from './app.employee.service';
import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-employeeDetails',
  templateUrl: './app.employeedetails.html'
  })
export class EmployeeDetailsComponent implements OnInit {
 employeeDetailsPageTitle:string = "Employee Detail";

constructor(private _route:ActivatedRoute,private _router:Router)
{

}

ngOnInit():void
{
let employeeID = +this._route.snapshot.params['employeeId'];
this.employeeDetailsPageTitle +=` employee Id is : ${employeeID}`;
}

goBack():void
{
  this._router.navigate(['employees']);
}
}
 