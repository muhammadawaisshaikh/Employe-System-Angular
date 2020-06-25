import { Component } from '@angular/core';
import { ToastrService } from "ngx-toastr";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthService } from './core/http/auth/auth.service';
import { AuthDataService } from './shared/services/auth-data/auth-data.service';
import { NotificationService } from './shared/services/notification/notification.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  loginForm: FormGroup;
  authentication: boolean = false;
  userData: any;

  constructor(
    private fb: FormBuilder,
    private toastr: ToastrService,
    private authService: AuthService,
    private authData: AuthDataService,
    private notification: NotificationService
  ) { }

  ngOnInit(): void {
    this.loginFormInit();
    this.checkAuth();
  }

  loginFormInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.pattern('[a-z0-9.@]*')]],
      password: ['', Validators.required]
    });
  }

  auth() {
    if (this.loginForm.valid) {
      let params = {
        email: this.loginForm.value.email,
        password: this.loginForm.value.password
      }

      this.userData = this.authService.authenticate(params).subscribe(res=> {
        if (res) {
          this.userData = res;
          this.authentication = true;

          this.authData.setAuthData(this.userData);

          // notify success 
          if (this.userData[6] === 'admin') this.notification.showAlert('success', 'Admin Login Successfull');
          else if (this.userData[6] === 'user') this.notification.showAlert('success', this.userData[1]+' - Employee Login Successfull');
          else this.notification.showAlert('success', 'Login Successfull');
        } 
        else {
          this.notification.showAlert('error', 'Account Login Failed');
        }
      });
    }
    else {
      this.notification.showAlert('error', 'Account Login Failed');
    }
  }

  checkAuth() {
    if (this.authData.getAuthData()) {
      this.authentication = true;
    }
    else {
      this.authentication = false;
    }
  }

  accountLogout() {
    this.authentication = false;
    console.log('authentication output');
    this.notification.showAlert('error', 'Account Logged Out');
  }

}
