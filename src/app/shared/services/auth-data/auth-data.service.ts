import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthDataService {

  data: any;

  constructor() { }

  setAuthData(data) {
    localStorage.setItem('auth', JSON.stringify(data));
  }

  getAuthData() {
    this.data = JSON.parse(localStorage.getItem('auth'));
    return this.data;
  }

}
