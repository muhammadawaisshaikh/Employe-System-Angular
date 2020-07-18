import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NotificationService } from '../../shared/services/notification/notification.service';
import { AuthDataService } from '../../shared/services/auth-data/auth-data.service';
import { DirectDepositService } from '../../core/http/direct-deposit/direct-deposit.service';

@Component({
  selector: 'app-form-direct-deposit',
  templateUrl: './form-direct-deposit.component.html',
  styleUrls: ['./form-direct-deposit.component.css']
})
export class FormDirectDepositComponent implements OnInit {

  directDepositForm: FormGroup;
  data: any;
  getDirectDeposit: any;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private notification: NotificationService,
    private directDepositService: DirectDepositService,
    private authData: AuthDataService
  ) { }

  ngOnInit(): void {
    this.directDepositFormInit();
    this.getDirectDepositForm();
  }

  getDirectDepositForm() {
    let params = {
      user_id: this.authData.getAuthData()[0]
    }

    if (params.user_id) {
      this.getDirectDeposit = this.directDepositService.getAllDirectDepositForms(params).subscribe(res=> {
        if (res) {
          this.getDirectDeposit = res;

          if(this.getDirectDeposit.length > 0) this.notification.showAlert('success', 'Direct Deposit Form Found Already.');
        }
        else {
          this.notification.showAlert('error', 'Direct Deposit Form Not Found.');
        }
      });
    }
  }

  directDepositFormInit() {
    this.directDepositForm = this.fb.group({
      direct_deposit_name: ['', Validators.required],
      direct_deposit_address: ['', Validators.required],
      direct_deposit_city: ['', Validators.required],
      name_of_bank: ['', Validators.required],
      bank_account_number: ['', Validators.required],
      nine_digit_routing: ['', Validators.required],
      amount_type: ['', Validators.required],
      amount: ['', Validators.required],
      account_type: ['', Validators.required],
      direct_deposit_employee_signature: ['', Validators.required],
      direct_deposit_date: ['', Validators.required],
    });
  }

  submitI9Form() {
    if (this.directDepositForm.valid) {

      let params = {
        user_id: this.authData.getAuthData()[0],
        direct_deposit_name: this.directDepositForm.value.direct_deposit_name,
        direct_deposit_address: this.directDepositForm.value.direct_deposit_address,
        direct_deposit_city: this.directDepositForm.value.direct_deposit_city,
        name_of_bank: this.directDepositForm.value.name_of_bank,
        bank_account_number: this.directDepositForm.value.bank_account_number,
        nine_digit_routing: this.directDepositForm.value.nine_digit_routing,
        amount: this.directDepositForm.value.amount,
        amount_type: this.directDepositForm.value.amount_type,
        account_type: this.directDepositForm.value.account_type,
        direct_deposit_employee_signature: this.directDepositForm.value.direct_deposit_employee_signature,
        direct_deposit_date: this.directDepositForm.value.direct_deposit_date,
      }

      this.data = this.directDepositService.addDirectDepositForm(params).subscribe(res=> {
        if (res) {
          this.data = res;

          if(this.data == 'success') 
          {
            this.directDepositForm.reset();
            this.router.navigateByUrl('/employee-handbook');
            this.notification.showAlert('success', 'Direct Deposit Form Adding Success.');
          }
          
        }
        else {
          this.notification.showAlert('error', 'Direct Deposit Form Adding Failed');
        }
      });
    } else {
      this.notification.showAlert('error', 'Direct Deposit Form Input Missing');
    }
  }

}
