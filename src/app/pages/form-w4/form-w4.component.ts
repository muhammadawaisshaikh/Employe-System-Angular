import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NotificationService } from '../../shared/services/notification/notification.service';
import { AuthDataService } from '../../shared/services/auth-data/auth-data.service';
import { W4FormService } from '../../core/http/w4-form/w4-form.service';

@Component({
  selector: 'app-form-w4',
  templateUrl: './form-w4.component.html',
  styleUrls: ['./form-w4.component.css']
})
export class FormW4Component implements OnInit {

  w4Form: FormGroup;
  data: any;
  getW4: any;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private notification: NotificationService,
    private w4FormService: W4FormService,
    private authData: AuthDataService
  ) { }

  ngOnInit(): void {
    this.w4FormInit();
    this.getW4Form();
  }

  w4FormInit() {
    this.w4Form = this.fb.group({
      w4_firstname: ['', Validators.required],
      w4_lastname: ['', Validators.required],
      w4_social_security_number: ['', Validators.required],
      w4_address: ['', Validators.required],
      w4_marital_status: ['', Validators.required],
      w4_city: ['', Validators.required],
    });
  }

  getW4Form() {
    let params = {
      user_id: this.authData.getAuthData()[0]
    }

    if (params.user_id) {
      this.getW4 = this.w4FormService.getW4Form(params).subscribe(res=> {
        if (res) {
          this.getW4 = res;

          if(this.getW4.length > 0) this.notification.showAlert('success', 'W4 Form Found Already.');
        }
        else {
          this.notification.showAlert('error', 'W4 Form Not Found.');
        }
      });
    }
  }

  submitW4Form() {

    if (this.w4Form.valid) {

      let params = {
        user_id: this.authData.getAuthData()[0],
        w4_firstname: this.w4Form.value.w4_firstname,
        w4_lastname: this.w4Form.value.w4_lastname,
        w4_social_security_number: this.w4Form.value.w4_social_security_number,
        w4_address: this.w4Form.value.w4_address,
        w4_marital_status: this.w4Form.value.w4_marital_status,
        w4_city: this.w4Form.value.w4_city
      }

      this.data = this.w4FormService.addW4Form(params).subscribe(res=> {
        if (res) {
          this.data = res;

          if(this.data == 'success') 
          {
            this.w4Form.reset();
            this.router.navigateByUrl('/form-I9');
            this.notification.showAlert('success', 'W4 Form Adding Success.');
          }
          
        }
        else {
          this.notification.showAlert('error', 'W4 Form Adding Failed');
        }
      });
    } else {
      this.notification.showAlert('error', 'W4 Form Input Missing');
    }
  }

}
