import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NotificationService } from '../../shared/services/notification/notification.service';

import { EmployeeHandbookService } from '../../core/http/employee-handbook/employee-handbook.service';
import { W4FormService } from '../../core/http/w4-form/w4-form.service';
import { I9FormService } from '../../core/http/i9-form/i9-form.service';
import { DirectDepositService } from '../../core/http/direct-deposit/direct-deposit.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  routerData: any = history.state;

  getHandbook: any;
  getW4: any;
  getI9Form: any;
  getDirectDeposit: any;

  constructor(
    private router: Router,
    private notification: NotificationService,
    private employeehandbookService: EmployeeHandbookService,
    private w4FormService: W4FormService,
    private i9FormService: I9FormService,
    private directDepositService: DirectDepositService,
  ) { }

  ngOnInit(): void {
    this.getUserFormsData();
  }

  getUserFormsData() {
    if (this.routerData.data) {
      let user_id = this.routerData.data.user_id;
      // console.log("user_id", this.routerData.data.user_id);

      this.getEmployeeHandbook(user_id);
      this.getW4Form(user_id);
      this.geti9Form(user_id);
      this.getDirectDepositForm(user_id);
    } 
    else {
      this.router.navigateByUrl('/employees');
    }
  }

  getEmployeeHandbook(user_id) {
    let params = {
      user_id: user_id
    }

    if (params.user_id) {
      this.getHandbook = this.employeehandbookService.getEmployeeHandbook(params).subscribe(res=> {
        if (res) {
          this.getHandbook = res;
          console.log(this.getHandbook);
        }
        else {
          this.notification.showAlert('error', 'Employee Handbook Not Found.');
        }
      });
    }
  }

  getW4Form(user_id) {
    let params = {
      user_id: user_id
    }

    if (params.user_id) {
      this.getW4 = this.w4FormService.getW4Form(params).subscribe(res=> {
        if (res) {
          this.getW4 = res;
          console.log(this.getW4);
        }
        else {
          this.notification.showAlert('error', 'W4 Form Not Found.');
        }
      });
    }
  }

  geti9Form(user_id) {
    let params = {
      user_id: user_id
    }

    if (params.user_id) {
      this.i9FormService.getI9Form(params).subscribe(res=> {
        if (res) {
          this.getI9Form = res;
          console.log(this.getI9Form);
        }
        else {
          this.notification.showAlert('error', 'i9 Form Not Found.');
        }
      });
    }
  }

  getDirectDepositForm(user_id) {
    let params = {
      user_id: user_id
    }

    if (params.user_id) {
      this.getDirectDeposit = this.directDepositService.getAllDirectDepositForms(params).subscribe(res=> {
        if (res) {
          this.getDirectDeposit = res;
          console.log(this.getDirectDeposit);
        }
        else {
          this.notification.showAlert('error', 'Direct Deposit Form Not Found.');
        }
      });
    }
  }

}
