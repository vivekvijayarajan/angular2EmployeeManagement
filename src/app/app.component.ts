import { EmployeeService } from './app.employee.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[EmployeeService]
})
export class AppComponent {
  title = 'app works!';
}
