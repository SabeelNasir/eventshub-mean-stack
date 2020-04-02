import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor(private authService: AuthService) { }
  formData;
  ngOnInit(): void {
    this.formData = new FormGroup({
      'email': new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required)
    })
  }



  get email() { return this.formData.get('email') }

  onSubmit(formData) {
    if (this.formData.valid) {
      this.authService.login(this.formData.value).subscribe(res => console.log(res), err => console.log(err))
    }
  }

}
