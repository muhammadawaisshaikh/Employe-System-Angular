import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ConfigService } from '../../config/config.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private config: ConfigService
  ) { }

  authUrl: string = this.config.API_ENDPOINT+'/login.php';

  authenticate(params) {
    return this.http.post(this.authUrl, params, { headers: this.config.headers() });
  }
  
}
