import { EmployeeDetailsComponent } from './app.employeedetails';
import { HomeComponenet } from './app.home.componenet';
import { EmployeeService } from './app.employee.service';
import { SearchComponent } from './app.component.search';
import { EmployeeFilterPipe } from './app.employee-filter';
import { EmployeeComponent } from './app.employee';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
const appRoutes: Routes = [
  { path: 'home', component: HomeComponenet },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: 'employees', component: EmployeeComponent },
  { path: 'employee/:employeeId', component: EmployeeDetailsComponent },
  { path: '**', component: EmployeeComponent }
];

@NgModule({
  declarations: [
    AppComponent,EmployeeComponent,EmployeeFilterPipe,SearchComponent,HomeComponenet,EmployeeDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,RouterModule.forRoot(appRoutes)    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
