import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { User } from '../models/user';
import { Constants } from '../constants/constants';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private constants: Constants,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  formData = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required]
  })
  registeredUser: User
  public alreadyExists = false;

  public onSubmit() {
    this.authService.register(this.formData.value).subscribe(res => {
      this.registeredUser = res as User;
      localStorage.setItem(this.constants.tokenKey, this.registeredUser.token);
      this.router.navigate(['/special'])
    }, error => {
      if (error instanceof HttpErrorResponse) {
        if (error.status == 403) {
          this.alreadyExists = true
        }
      }
    });
  }

}
