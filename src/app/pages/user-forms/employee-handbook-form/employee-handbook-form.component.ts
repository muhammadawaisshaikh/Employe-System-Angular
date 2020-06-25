import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NotificationService } from '../../../shared/services/notification/notification.service';
import { AuthDataService } from '../../../shared/services/auth-data/auth-data.service';
import { EmployeeHandbookService } from '../../../core/http/employee-handbook/employee-handbook.service';

@Component({
  selector: 'app-employee-handbook-form',
  templateUrl: './employee-handbook-form.component.html',
  styleUrls: ['./employee-handbook-form.component.css']
})
export class EmployeeHandbookFormComponent implements OnInit {

  employeeForm: FormGroup;
  data: any;

  constructor(
    private fb: FormBuilder,
    private notification: NotificationService,
    private employeehandbookService: EmployeeHandbookService,
    private authData: AuthDataService
  ) { }

  ngOnInit(): void {
    this.employeeFormInit();
  }

  employeeFormInit() {
    this.employeeForm = this.fb.group({
      employee_name: ['', Validators.required],
      employee_signature: ['', Validators.required],
      date: ['', Validators.required],
      weekly_pay_employee_name: ['', Validators.required],
      date_of_hire: ['', Validators.required],
      weekly_pay_employee_signature_1: ['', Validators.required],
      date_employee_signature_1: ['', Validators.required],
      weekly_pay_employee_signature_2: ['', Validators.required],
      date_employee_signature_2: ['', Validators.required],
    });
  }

  submitEmployeeHandbook() {
    console.log('submitEmployeeHandbook');
    
    if (this.employeeForm.valid) {

      let params = {
        user_id: this.authData.getAuthData()[0],
        employee_name: this.employeeForm.value.employee_name,
        employee_signature: this.employeeForm.value.employee_signature,
        date: this.employeeForm.value.date,
        weekly_pay_employee_name: this.employeeForm.value.weekly_pay_employee_name,
        date_of_hire: this.employeeForm.value.date_of_hire,
        weekly_pay_employee_signature_1: this.employeeForm.value.weekly_pay_employee_signature_1,
        date_employee_signature_1: this.employeeForm.value.date_employee_signature_1,
        weekly_pay_employee_signature_2: this.employeeForm.value.weekly_pay_employee_signature_2,
        date_employee_signature_2: this.employeeForm.value.date_employee_signature_2
      }

      // this.data = this.employeehandbookService.addEmployeeHandbook(params).subscribe(res=> {
      //   if (res) {
      //     this.data = res;
      //     this.notification.showAlert('success', 'Employee Handbook Adding Success.');
      //   }
      //   else {
      //     this.notification.showAlert('error', 'Employee Handbook Adding Failed');
      //   }
      // });
    } else {
      this.notification.showAlert('error', 'Employee Handbook Form Input Missing');
    }
  }

}
