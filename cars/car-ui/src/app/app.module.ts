import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import {ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import {CarService} from './services/car.service';
import { AdminComponent } from './components/admin/admin.component';
import { HomeComponent } from './components/home/home.component';
import { ViewRegistrationComponent } from './components/view-registration/view-registration.component';
import { CallbackComponent } from './components/callback/callback.component';
import {AuthService} from './services/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    HomeComponent,
    ViewRegistrationComponent,
    CallbackComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, AppRoutingModule, ReactiveFormsModule
  ],
  providers: [CarService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
