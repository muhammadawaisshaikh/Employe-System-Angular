import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ConfigService } from '../../config/config.service';

@Injectable({
  providedIn: 'root'
})
export class DirectDepositService {

  constructor(
    private http: HttpClient,
    private config: ConfigService
  ) { }

  addDirectDepositFormUrl: string = this.config.API_ENDPOINT+'/direct-deposit/add-direct-deposit.php';
  allDirectDepositFormUrl: string = this.config.API_ENDPOINT+'/direct-deposit/get-direct-deposit.php';

  addDirectDepositForm(params) {
    return this.http.post(this.addDirectDepositFormUrl, params, { headers: this.config.headers() });
  }

  getAllDirectDepositForms(params) {
    return this.http.post(this.allDirectDepositFormUrl, params, { headers: this.config.headers() });
  }
}
