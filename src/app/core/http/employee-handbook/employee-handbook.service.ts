import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from '../../config/config.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeeHandbookService {

  constructor(
    private http: HttpClient,
    private config: ConfigService
  ) { }

  addEmployeeHandbookUrl: string = this.config.API_ENDPOINT+'/form-employee-handbook/add-employee-handbook.php';
  getEmployeeHandbookUrl: string = this.config.API_ENDPOINT+'/form-employee-handbook/get-employee-handbook.php';

  addEmployeeHandbook(params) {
    return this.http.post(this.addEmployeeHandbookUrl, params, { headers: this.config.headers() });
  }

  getEmployeeHandbook(params) {
    return this.http.post(this.getEmployeeHandbookUrl, params, { headers: this.config.headers() });
  }

}
