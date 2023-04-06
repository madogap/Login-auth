import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl = 'http//localhost:3000/user'
  constructor(private http: HttpClient) { }
  GetAll() {
    return this.http.get(this.apiUrl);

  }
  GetbyCode(code: any) {
    return this.http.get(this.apiUrl + '/' + code)
  }
  ProceedRegister(inputData: any) {
    return this.http.post(this.apiUrl, inputData)
  }
  UpdateUser(code: any, inputData: any) {
    return this.http.put(this.apiUrl + '/' + code, inputData)

  }
}
