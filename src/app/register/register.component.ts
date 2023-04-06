import { Component } from '@angular/core';
import { FormBuilder, Validator, Validators } from '@angular/forms'
import { ToastrService } from 'ngx-toastr'
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private fb: FormBuilder, private toastr: ToastrService, private service:AuthService, private router:Router) {

  }

  registerform = this.fb.group({
    id: this.fb.control('', Validators.compose([Validators.required, Validators.minLength(5)])),
    name: this.fb.control('', Validators.required),
    password: this.fb.control('', Validators.compose([Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')])),
    email: this.fb.control('', Validators.compose([Validators.required, Validators.email])),
    gender: this.fb.control('male'),
    role: this.fb.control(''),
    isactive: this.fb.control('false'),
  })
  proceedRegisteration() {
    if (this.registerform.valid) {
      this.service.ProceedRegister(this.registerform.value).subscribe(res=>{
        this.toastr.success('Please contact admin for enable acess','Registered Sucessfully')
      })
    } else {
      this.toastr.warning('Please enter valid data')
    }
  }
}
