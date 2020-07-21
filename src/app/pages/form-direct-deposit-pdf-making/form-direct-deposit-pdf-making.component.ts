import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-direct-deposit-pdf-making',
  templateUrl: './form-direct-deposit-pdf-making.component.html',
  styleUrls: ['./form-direct-deposit-pdf-making.component.css']
})
export class FormDirectDepositPdfMakingComponent implements OnInit {

  routerData: any = history.state;
  data: any;
  dateToday: any = new Date();

  page1: any = 'https://i.ibb.co/DMxm45T/0001.jpg';

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.getFormData();
  }

  print() {
    window.print();
  }

  getFormData() {
    if (this.routerData.data) {
      this.data = this.routerData.data[0];
      console.log("data", this.data);
    } 
    else {
      this.router.navigateByUrl('/employees');
    }
  }

}
