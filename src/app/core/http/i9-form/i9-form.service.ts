import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from '../../config/config.service';

@Injectable({
  providedIn: 'root'
})
export class I9FormService {

  constructor(
    private http: HttpClient,
    private config: ConfigService
  ) { }

  addI9FormUrl: string = this.config.API_ENDPOINT+'/form-i9/add-i9-form.php';
  getI9FormUrl: string = this.config.API_ENDPOINT+'/form-i9/get-i9-form.php';

  addI9Form(params) {
    return this.http.post(this.addI9FormUrl, params, { headers: this.config.headers() });
  }

  getI9Form(params) {
    return this.http.post(this.getI9FormUrl, params, { headers: this.config.headers() });
  }

}
