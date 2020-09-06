import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { NotificationService } from '../../shared/services/notification/notification.service';
import { EmployeeService } from '../../core/http/employee/employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  employeeForm: FormGroup;
  userData: any;
  empName: string = '';

  constructor(
    private fb: FormBuilder,
    private notification: NotificationService,
    private employeeService: EmployeeService
  ) { }

  ngOnInit(): void {
    this.employeeFormInit();
  }

  employeeFormInit() {
    this.employeeForm = this.fb.group({
      employee_name: ['', Validators.required],
      date_of_hiring: ['', Validators.required],
      email: ['', Validators.required],
      training_pay: ['', Validators.required],
      rate_of_pay: ['', Validators.required],
      daily_pay: ['', Validators.required],
      probation_period: ['', Validators.required],
    });
  }

  getShareableLink() {
    if (this.employeeForm.valid) {

      this.empName = this.employeeForm.value.employee_name.split(' ').join('');

      let params = {
        employee_name: this.empName,
        date_of_hiring: this.employeeForm.value.date_of_hiring,
        email: this.employeeForm.value.email,
        training_pay: this.employeeForm.value.training_pay,
        rate_of_pay: this.employeeForm.value.rate_of_pay,
        daily_pay: this.employeeForm.value.daily_pay,
        probation_period: this.employeeForm.value.probation_period,
      }

      this.userData = this.employeeService.addEmployee(params).subscribe(res=> {
        if (res) {
          this.userData = res;
          this.notification.showAlert('success', 'Employee Adding Success.');
        }
        else {
          this.notification.showAlert('error', 'Employee Adding Failed');
        }
      });
    } else {
      this.notification.showAlert('error', 'Employee Adding Failed');
    }
  }

}
