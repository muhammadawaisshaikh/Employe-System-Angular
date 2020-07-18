import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NotificationService } from '../../shared/services/notification/notification.service';
import { AuthDataService } from '../../shared/services/auth-data/auth-data.service';
import { I9FormService } from '../../core/http/i9-form/i9-form.service';

@Component({
  selector: 'app-form-i9',
  templateUrl: './form-i9.component.html',
  styleUrls: ['./form-i9.component.css']
})
export class FormI9Component implements OnInit {

  i9Form: FormGroup;
  data: any;
  getHandbook: any;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private notification: NotificationService,
    private i9FormService: I9FormService,
    private authData: AuthDataService
  ) { }

  ngOnInit(): void {
    this.i9FormInit();
  }

  todayDateFormat() {
    let date = new Date();
    let formatted = date.getFullYear() +'/'+ date.getDate() +'/'+ date.getMonth();

    return formatted;
  }

  i9FormInit() {
    this.i9Form = this.fb.group({
      user_id: ['', Validators.required],
      i9_firstname: ['', Validators.required],
      i9_lastname: ['', Validators.required],
      i9_middlename: ['', Validators.required],
      i9_other_last_name: ['', Validators.required],
      i9_address: ['', Validators.required],
      i9_apartment_no: ['', Validators.required],
      i9_state: ['', Validators.required],
      i9_city: ['', Validators.required],
      i9_zip_code: ['', Validators.required],
      i9_date: [this.todayDateFormat(), Validators.required],
      i9_security_number: ['', Validators.required],
      i9_email: ['', Validators.required],
      i9_telephone_number: ['', Validators.required],
      i9_i_attest_i_am: ['', Validators.required],
      i9_attest_email: ['', Validators.required],
      i9_attest_date: [this.todayDateFormat(), Validators.required],

      alien_reg_or_uscis: ['', Validators.required],
      alien_i94_admission_number: ['', Validators.required],
      alien_foreign_passport_number: ['', Validators.required],
      alien_country_issuance: ['', Validators.required],
      alien_signature: ['', Validators.required],
      alien_date: [this.todayDateFormat(), Validators.required],

      authorized_rep_firstname: ['', Validators.required],
      authorized_rep_lastname: ['', Validators.required],
      authorized_rep_m_i: ['', Validators.required],
      authorized_rep_immigration_status: ['', Validators.required],
      authorized_rep_a_doc_title: ['', Validators.required],
      authorized_rep_a_issue_auth: ['', Validators.required],
      authorized_rep_a_doc_num: ['', Validators.required],
      authorized_rep_a_date: [this.todayDateFormat(), Validators.required],
      authorized_rep_a_doc_text: ['', Validators.required],
      authorized_rep_a_issue_auth_1: ['', Validators.required],
      authorized_rep_a_doc_num_1: ['', Validators.required],
      authorized_rep_a_expiration_date: [this.todayDateFormat(), Validators.required],
      authorized_rep_b_doc_title: ['', Validators.required],
      authorized_rep_b_issue_auth: ['', Validators.required],
      authorized_rep_b_doc_num: ['', Validators.required],
      authorized_rep_b_date: [this.todayDateFormat(), Validators.required],
      authorized_rep_b_msg: ['', Validators.required],
      authorized_rep_c_doc_title: ['', Validators.required],
      authorized_rep_c_issue_auth: ['', Validators.required],
      authorized_rep_c_doc_num: ['', Validators.required],
      authorized_rep_c_date: [this.todayDateFormat(), Validators.required],
      authorized_rep_employee_first_day: ['', Validators.required],
      authorized_rep_signature: ['', Validators.required],
      authorized_rep_sign_date: [this.todayDateFormat(), Validators.required],
      authorized_rep_title: ['', Validators.required],
      authorized_rep_emp_firstname: ['', Validators.required],
      authorized_rep_emp_lastname: ['', Validators.required],
      authorized_rep_business: ['', Validators.required],
      authorized_rep_business_address: ['', Validators.required],
      authorized_rep_city: ['', Validators.required],
      authorized_rep_state: ['', Validators.required],
      authorized_rep_zip: ['', Validators.required],

      rehires_firstname: ['', Validators.required],
      rehires_lastname: ['', Validators.required],
      rehires_middlename: ['', Validators.required],
      rehires_date_rehire: [this.todayDateFormat(), Validators.required],
      rehires_doc_title: ['', Validators.required],
      rehires_doc_num: ['', Validators.required],
      rehires_expire_date: [this.todayDateFormat(), Validators.required],
      rehires_employee_signature: ['', Validators.required],
      rehires_date_today: [this.todayDateFormat(), Validators.required],
      rehires_name_employer: ['', Validators.required],

      translator_i9_id: ['', Validators.required],
      translator_i9_form_id: ['', Validators.required],
      translator_check: ['', Validators.required],
      translator_signature: ['', Validators.required],
      translator_date: [this.todayDateFormat(), Validators.required],
      translator_firstname: ['', Validators.required],
      translator_lastname: ['', Validators.required],
      translator_address: ['', Validators.required],
      translator_city: ['', Validators.required],
      translator_state: ['', Validators.required],
      translator_zip: ['', Validators.required],

    });
  }

  submiti9Form() {
    if (!this.i9Form.valid) {

      let params = {
        user_id: this.authData.getAuthData()[0],
        i9_firstname: this.i9Form.value.i9_firstname,
        i9_lastname: this.i9Form.value.i9_lastname,
        i9_middlename: this.i9Form.value.i9_middlename,
        i9_other_last_name: this.i9Form.value.i9_other_last_name,
        i9_address: this.i9Form.value.i9_address,
        i9_apartment_no: this.i9Form.value.i9_apartment_no,
        i9_state: this.i9Form.value.i9_state,
        i9_city: this.i9Form.value.i9_city,
        i9_zip_code: this.i9Form.value.i9_zip_code,
        i9_date: this.i9Form.value.i9_date,
        i9_security_number: this.i9Form.value.i9_security_number,
        i9_email: this.i9Form.value.i9_email,
        i9_telephone_number: this.i9Form.value.i9_telephone_number,
        i9_i_attest_i_am: this.i9Form.value.i9_i_attest_i_am,
        i9_attest_email: this.i9Form.value.i9_attest_email,
        i9_attest_date : this.i9Form.value.i9_attest_date,

        alien_reg_or_uscis: this.i9Form.value.alien_reg_or_uscis,
        alien_i94_admission_number: this.i9Form.value.alien_i94_admission_number,
        alien_foreign_passport_number: this.i9Form.value.alien_foreign_passport_number,
        alien_country_issuance: this.i9Form.value.alien_country_issuance,
        alien_signature : this.i9Form.value.alien_signature,
        alien_date : this.i9Form.value.alien_date,

        translator_check : this.i9Form.value.translator_check,
        translator_signature : this.i9Form.value.translator_signature,
        translator_date : this.i9Form.value.translator_date,
        translator_firstname : this.i9Form.value.translator_firstname,
        translator_lastname : this.i9Form.value.translator_lastname,
        translator_address : this.i9Form.value.translator_address,
        translator_city: this.i9Form.value.translator_city,
        translator_state : this.i9Form.value.translator_state,
        translator_zip : this.i9Form.value.translator_zip,

        rehires_firstname: this.i9Form.value.rehires_firstname,
        rehires_lastname: this.i9Form.value.rehires_lastname,
        rehires_middlename: this.i9Form.value.rehires_middlename,
        rehires_date_rehire: this.i9Form.value.rehires_date_rehire,
        rehires_doc_title: this.i9Form.value.rehires_doc_title,
        rehires_doc_num: this.i9Form.value.rehires_doc_num,
        rehires_expire_date: this.i9Form.value.rehires_expire_date,
        rehires_employee_signature: this.i9Form.value.rehires_employee_signature,
        rehires_name_employer: this.i9Form.value.rehires_name_employer,
        rehires_date_today: this.i9Form.value.rehires_date_today,

        authorized_rep_firstname: this.i9Form.value.authorized_rep_firstname,
        authorized_rep_lastname: this.i9Form.value.authorized_rep_lastname,
        authorized_rep_m_i: this.i9Form.value.authorized_rep_m_i,
        authorized_rep_immigration_status: this.i9Form.value.authorized_rep_immigration_status,
        authorized_rep_a_doc_title: this.i9Form.value.authorized_rep_a_doc_title,
        authorized_rep_a_issue_auth: this.i9Form.value.authorized_rep_a_issue_auth,
        authorized_rep_a_doc_num : this.i9Form.value.authorized_rep_a_doc_num,
        authorized_rep_a_date : this.i9Form.value.authorized_rep_a_date,
        authorized_rep_a_doc_text : this.i9Form.value.authorized_rep_a_doc_text,
        authorized_rep_a_issue_auth_1: this.i9Form.value.authorized_rep_a_issue_auth_1,
        authorized_rep_a_doc_num_1 : this.i9Form.value.authorized_rep_a_doc_num_1,
        authorized_rep_a_expiration_date: this.i9Form.value.authorized_rep_a_expiration_date,
        authorized_rep_b_doc_title: this.i9Form.value.authorized_rep_b_doc_title,
        authorized_rep_b_issue_auth: this.i9Form.value.authorized_rep_b_issue_auth,
        authorized_rep_b_doc_num: this.i9Form.value.authorized_rep_b_doc_num,
        authorized_rep_b_date: this.i9Form.value.authorized_rep_b_date,
        authorized_rep_b_msg: this.i9Form.value.authorized_rep_b_msg,
        authorized_rep_c_doc_title: this.i9Form.value.authorized_rep_c_doc_title,
        authorized_rep_c_issue_auth: this.i9Form.value.authorized_rep_c_issue_auth,
        authorized_rep_c_doc_num: this.i9Form.value.authorized_rep_c_doc_num,
        authorized_rep_c_date: this.i9Form.value.authorized_rep_c_date,
        authorized_rep_employee_first_day : this.i9Form.value.authorized_rep_employee_first_day,
        authorized_rep_signature: this.i9Form.value.authorized_rep_signature,
        authorized_rep_sign_date: this.i9Form.value.authorized_rep_sign_date,
        authorized_rep_title: this.i9Form.value.authorized_rep_title,
        authorized_rep_emp_firstname: this.i9Form.value.authorized_rep_emp_firstname,
        authorized_rep_emp_lastname: this.i9Form.value.authorized_rep_emp_lastname,
        authorized_rep_business: this.i9Form.value.authorized_rep_business,
        authorized_rep_business_address: this.i9Form.value.authorized_rep_business_address,
        authorized_rep_city: this.i9Form.value.authorized_rep_city,
        authorized_rep_state: this.i9Form.value.authorized_rep_state,
        authorized_rep_zip: this.i9Form.value.authorized_rep_zip,
      }

      this.data = this.i9FormService.addI9Form(params).subscribe(res=> {
        if (res) {
          this.data = res;

          if(this.data == 'success') 
          {
            this.i9Form.reset();
            this.router.navigateByUrl('/form-direct-deposit');
            this.notification.showAlert('success', 'i9 Form Adding Success.');
          }
          
        }
        else {
          this.notification.showAlert('error', 'i9 Form Adding Failed');
        }
      });
    } else {
      this.notification.showAlert('error', 'i9 Form Input Missing');
    }
  }

}
