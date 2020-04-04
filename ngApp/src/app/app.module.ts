import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './components/login/login.component';
import { EventsComponent } from './components/events/events.component';
import { SpecialEventsComponent } from './components/special-events/special-events.component';
import { TokenInterceptor } from './interceptors/token.interceptor';
import { MyErrorHandler } from './handlers/my-error-handler';
import { UserEventsComponent } from './components/user-events/user-events.component';
import { EventDetailComponent } from './components/event-detail/event-detail.component';
import { EventsListComponent } from './components/events/events-list/events-list.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';



@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    EventsComponent,
    SpecialEventsComponent,
    UserEventsComponent,
    EventDetailComponent,
    EventsListComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
    { provide: ErrorHandler, useClass: MyErrorHandler }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
