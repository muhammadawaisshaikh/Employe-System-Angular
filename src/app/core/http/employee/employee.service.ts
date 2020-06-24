import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ConfigService } from '../../config/config.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(
    private http: HttpClient,
    private config: ConfigService
  ) { }

  addEmployeeUrl: string = this.config.API_ENDPOINT+'/employee/addEmployee.php';

  addEmployee(params) {
    return this.http.post(this.addEmployeeUrl, params, { headers: this.config.headers() });
  }

}
