import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ConfigService } from '../../config/config.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private config: ConfigService
  ) { }

  authUrl: string = this.config.API_ENDPOINT+'/login.php';

  authenticate(param) {
    let result;
    let params = {
      email: param.email,
      password: param.password,
      account_type: param.account_type
    }

    return this.http.post(this.authUrl, params, { headers: this.config.headers() });
  }
  
}
