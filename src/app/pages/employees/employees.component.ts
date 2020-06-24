import { Component, OnInit } from '@angular/core';

import { NotificationService } from '../../shared/services/notification/notification.service';
import { EmployeeService } from '../../core/http/employee/employee.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  users: any = [];

  constructor(
    private notification: NotificationService,
    private employeeService: EmployeeService
  ) { }

  ngOnInit(): void {
    this.getEmployees();
  }

  getEmployees() {
    this.users = this.employeeService.getAllEmployees().subscribe(res=> {
      if (res) {
        this.users = res;
      }
      else {
        this.notification.showAlert('error', 'Employees Not Found');
      }
    });
  }

}
