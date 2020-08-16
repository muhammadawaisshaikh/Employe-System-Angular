import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NotificationService } from '../../shared/services/notification/notification.service';
import { AuthDataService } from '../../shared/services/auth-data/auth-data.service';
import { EmployeeHandbookService } from '../../core/http/employee-handbook/employee-handbook.service';

@Component({
  selector: 'app-form-employee-handbook',
  templateUrl: './form-employee-handbook.component.html',
  styleUrls: ['./form-employee-handbook.component.css']
})
export class FormEmployeeHandbookComponent implements OnInit {

  employeeForm: FormGroup;
  data: any;
  getHandbook: any;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private notification: NotificationService,
    private employeehandbookService: EmployeeHandbookService,
    private authData: AuthDataService
  ) { }

  ngOnInit(): void {
    this.employeeFormInit();
    this.getEmployeeHandbook();
  }

  employeeFormInit() {
    this.employeeForm = this.fb.group({
      employee_name: ['', Validators.required],
      employee_signature: ['', Validators.required],
      date: ['', Validators.required],
    });
  }

  getEmployeeHandbook() {
    let params = {
      user_id: this.authData.getAuthData()[0]
    }

    if (params.user_id) {
      this.getHandbook = this.employeehandbookService.getEmployeeHandbook(params).subscribe(res=> {
        if (res) {
          this.getHandbook = res;

          if(this.getHandbook.length > 0) this.notification.showAlert('success', 'Employee Handbook Found Already.');
        }
        else {
          this.notification.showAlert('error', 'Employee Handbook Not Found.');
        }
      });
    }
  }

  submitEmployeeHandbook() {
    if (this.employeeForm.valid) {

      let params = {
        user_id: this.authData.getAuthData()[0],
        employee_name: this.employeeForm.value.employee_name,
        employee_signature: this.employeeForm.value.employee_signature,
        date: this.employeeForm.value.date,
      }

      this.data = this.employeehandbookService.addEmployeeHandbook(params).subscribe(res=> {
        if (res) {
          this.data = res;

          if(this.data == 'success') 
          {
            this.employeeForm.reset();
            this.router.navigateByUrl('/form-w4');
            this.notification.showAlert('success', 'Employee Handbook Adding Success.');
          }
          
        }
        else {
          this.notification.showAlert('error', 'Employee Handbook Adding Failed');
        }
      });
    } else {
      this.notification.showAlert('error', 'Employee Handbook Form Input Missing');
    }
  }

}
