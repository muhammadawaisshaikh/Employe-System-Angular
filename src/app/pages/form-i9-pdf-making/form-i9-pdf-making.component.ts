import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-i9-pdf-making',
  templateUrl: './form-i9-pdf-making.component.html',
  styleUrls: ['./form-i9-pdf-making.component.css']
})
export class FormI9PdfMakingComponent implements OnInit {

  routerData: any = history.state;
  data: any;
  dateToday: any = new Date();

  page1: any = 'https://i.ibb.co/2gJJfZx/0001.jpg';
  page2: any = 'https://i.ibb.co/y4bZN2s/0002.jpg';
  page3: any = 'https://i.ibb.co/bzzRBGb/0003.jpg';

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
