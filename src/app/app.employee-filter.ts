import { IEmployee } from './app.IEmployee';
import { Pipe, PipeTransform } from '@angular/core';
/*
 * Raise the value exponentially
 * Takes an exponent argument that defaults to 1.
 * Usage:
 *   value | exponentialStrength:exponent
 * Example:
 *   {{ 2 |  exponentialStrength:10}}
 *   formats to: 1024
*/
@Pipe({name: 'employeeFilterPipe'})
export class EmployeeFilterPipe implements PipeTransform {
  transform(value: IEmployee[], filterBy: string): IEmployee[] {
    filterBy = filterBy?filterBy.toLowerCase():null;
    return filterBy?value.filter((employee:IEmployee) =>
    employee.firstName.toLowerCase().indexOf(filterBy)!== -1):value;
  }
}