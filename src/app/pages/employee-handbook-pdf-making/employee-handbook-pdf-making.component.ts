import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-handbook-pdf-making',
  templateUrl: './employee-handbook-pdf-making.component.html',
  styleUrls: ['./employee-handbook-pdf-making.component.css']
})
export class EmployeeHandbookPdfMakingComponent implements OnInit {

  routerData: any = history.state;
  data: any;

  page1: any = 'https://i.ibb.co/vZkXPvw/0001.jpg';
  page2: any = 'https://i.ibb.co/0FJcFLW/0002.jpg';
  page3: any = 'https://i.ibb.co/vzgB0dM/0003.jpg';
  page4: any = 'https://i.ibb.co/tKK79Td/0004.jpg';
  page5: any = 'https://i.ibb.co/LNWpCCW/0005.jpg';
  page6: any = 'https://i.ibb.co/jLwxcRS/0006.jpg';
  page7: any = 'https://i.ibb.co/JcDcyTS/0007.jpg';
  page8: any = 'https://i.ibb.co/GVvzLYC/0008.jpg';
  page9: any = 'https://i.ibb.co/gj7T9hr/0009.jpg';
  page10: any = 'https://i.ibb.co/1RKrKZR/0010.jpg';
  page11: any = 'https://i.ibb.co/tpypqw8/0011.jpg';
  page12: any = 'https://i.ibb.co/8j47bxw/0012.jpg';
  page13: any = 'https://i.ibb.co/2F4SZSy/0013.jpg';
  page14: any = 'https://i.ibb.co/9rqM0Jn/0014.jpg';
  page15: any = 'https://i.ibb.co/BBBwt5V/0015.jpg';
  page16: any = 'https://i.ibb.co/gZRtdK7/0016.jpg';
  page17: any = 'https://i.ibb.co/Pz1fXHV/0017.jpg';
  page18: any = 'https://i.ibb.co/y6jYX53/0018.jpg';
  page19: any = 'https://i.ibb.co/ZX8930j/0019.jpg';
  page20: any = 'https://i.ibb.co/LNfMCxw/0020.jpg';
  page21: any = 'https://i.ibb.co/gPx0VDJ/0021.jpg';
  page22: any = 'https://i.ibb.co/2yHYfvs/0022.jpg';
  page23: any = 'https://i.ibb.co/RzGdp51/0023.jpg';
  page24: any = 'https://i.ibb.co/PFP63Br/0024.jpg';
  page25: any = 'https://i.ibb.co/QQfNgyP/0025.jpg';
  page26: any = 'https://i.ibb.co/9HwbLX9/0026.jpg';
  page27: any = 'https://i.ibb.co/jH6HXTL/0027.jpg';
  page28: any = 'https://i.ibb.co/TrzWXJ2/0028.jpg';

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
