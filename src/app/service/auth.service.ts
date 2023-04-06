import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl='http//localhost:3000/user'
  constructor(private http: HttpClient) { }
  getAll(){
    return this.http.get(this.apiUrl);
    
  }
}
