import { Component } from '@angular/core';
import { ToastrService } from "ngx-toastr";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  loginForm: FormGroup;
  authentication: boolean = false;

  constructor(
    private fb: FormBuilder,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.loginFormInit();
  }

  loginFormInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.pattern('[a-z0-9.@]*')]],
      password: ['', Validators.required]
    });
  }

  auth() {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value.email);
      console.log(this.loginForm.value.password);

      this.showAlert('success');
    } else {
      this.showAlert('error');
    }
  }

  showAlert(type) {
    if (type === 'success') {
      this.toastr.success(
        '<span data-notify="icon" class="nc-icon nc-bell-55"></span><span data-notify="message">Welcome to <b>Employee Dashboard</b> - Login Successfull.</span>',
        "",
        {
          timeOut: 4000,
          closeButton: true,
          enableHtml: true,
          toastClass: "alert alert-success alert-with-icon",
          positionClass: "toast-" + 'bottom' + "-" + 'right'
        }
      );
    }
    
    if (type === 'error') {
      this.toastr.error(
        '<span data-notify="icon" class="nc-icon nc-bell-55"></span><span data-notify="message">Login <b>FAILED!</b> - Please Login with valid credentials. </span>',
        "",
        {
          timeOut: 4000,
          enableHtml: true,
          closeButton: true,
          toastClass: "alert alert-danger alert-with-icon",
          positionClass: "toast-" + 'bottom' + "-" + 'right'
        }
      );
    }
  }

}
