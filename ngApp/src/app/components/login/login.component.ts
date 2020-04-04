import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Constants } from '../../constants/constants';
import { User } from '../../models/user';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor(private authService: AuthService,
    private constants: Constants,
    private _router: Router
  ) { }
  public formData;
  public loggedUser: User;
  public invalidCreds = false;
  public errorMsg = '';
  ngOnInit(): void {
    this.formData = new FormGroup({
      'email': new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required)
    })
  }
  get email() { return this.formData.get('email') }
  onSubmit() {
    if (this.formData.valid) {
      this.authService.login(this.formData.value).subscribe(res => {
        this.loggedUser = res as User;
        localStorage.setItem(this.constants.tokenKey, this.loggedUser.token);
        this.authService.setUserInCookie(this.loggedUser)
        this._router.navigate(['/events/special'])
      }, err => {
        if (err instanceof HttpErrorResponse) {
          if (err.status == 404) {
            this.invalidCreds = true;
          }
        }
      })
    }
  }

}
