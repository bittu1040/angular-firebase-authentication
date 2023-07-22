import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ReactiveFormsModule} from '@angular/forms';


import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

import { AngularFireModule } from '@angular/fire/compat';
import { AuthService } from './services/auth.service';
import { Auth } from '@angular/fire/auth';

const config = {
  apiKey: "AIzaSyBGi3xtj_pJxMnN7zepHSfZuiVnpfuiRTY",
  authDomain: "angular-authentication-cefa5.firebaseapp.com",
  projectId: "angular-authentication-cefa5",
  storageBucket: "angular-authentication-cefa5.appspot.com",
  messagingSenderId: "618742785588",
  appId: "1:618742785588:web:cd6a67c3694f9848bbcc61"
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(config),
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
