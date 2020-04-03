import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Events Hub';
  constructor(public authService: AuthService, private _router: Router) { }
  public logout() {
    this.authService.logout();
    this._router.navigate(['/login']);
  }
}
