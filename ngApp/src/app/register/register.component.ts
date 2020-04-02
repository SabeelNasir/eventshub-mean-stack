import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { User } from '../models/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private authService: AuthService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  formData = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required]
  })
  registeredUser: User

  public onSubmit() {
    this.authService.register(this.formData.value).subscribe(res => {
      this.registeredUser = res as User;
      console.log(this.registeredUser);
    }, error => console.log(error));
  }

}
