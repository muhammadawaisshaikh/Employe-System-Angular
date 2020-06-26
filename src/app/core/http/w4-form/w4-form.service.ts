import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from '../../config/config.service';

@Injectable({
  providedIn: 'root'
})
export class W4FormService {

  constructor(
    private http: HttpClient,
    private config: ConfigService
  ) { }

  addW4FormUrl: string = this.config.API_ENDPOINT+'/form-w4/add-w4-form.php';
  getW4FormUrl: string = this.config.API_ENDPOINT+'/form-w4/get-w4-form.php';

  addW4Form(params) {
    return this.http.post(this.addW4FormUrl, params, { headers: this.config.headers() });
  }

  getW4Form(params) {
    return this.http.post(this.getW4FormUrl, params, { headers: this.config.headers() });
  }

}
