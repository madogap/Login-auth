import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms'
import { ToastrService } from 'ngx-toastr'
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private fb: FormBuilder, 
    private toastr: ToastrService, 
    private service:AuthService, 
    private router:Router) {

  }
  result:any

  loginform = this.fb.group({
    id: this.fb.control('', Validators.required),
    password: this.fb.control('', Validators.required)
  });

  proceedlogin() {
    if (this.loginform.valid) {
     
    }
  }
}
