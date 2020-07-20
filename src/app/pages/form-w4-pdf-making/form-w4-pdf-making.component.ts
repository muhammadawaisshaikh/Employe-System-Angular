import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-w4-pdf-making',
  templateUrl: './form-w4-pdf-making.component.html',
  styleUrls: ['./form-w4-pdf-making.component.css']
})
export class FormW4PdfMakingComponent implements OnInit {

  routerData: any = history.state;
  data: any;
  dateToday: any = new Date();

  page1: any = 'https://i.ibb.co/807h83K/0001.jpg';
  page2: any = 'https://i.ibb.co/ZTt68sC/0002.jpg';
  page3: any = 'https://i.ibb.co/7n9cHzn/0003.jpg';
  page4: any = 'https://i.ibb.co/DWJgNgd/0004.jpg';

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
