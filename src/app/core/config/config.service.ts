import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  API_ENDPOINT: string = environment.API_BASE_URL;

  constructor() { }

  headers() {
    return new HttpHeaders({
      'content-type': 'application/json'
    });
  }

}
