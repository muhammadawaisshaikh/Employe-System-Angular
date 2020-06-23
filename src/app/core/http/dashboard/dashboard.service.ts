import { Injectable } from '@angular/core';
import { ConfigService } from '../../config/config.service';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(
    private config: ConfigService
  ) { }

  getDashboard() {
    console.log(this.config.API_ENDPOINT);
  }
}
