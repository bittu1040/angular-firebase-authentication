import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  loginForm!: FormGroup;

  constructor(private router: Router, private fb: FormBuilder, private authService: AuthService, private shared: SharedService){

    this.shared.logoutButtonFlag.next(false);
    this.shared.loginButtonFlag.next(false);

  }


  ngOnInit(){
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', [Validators.required]],
    });
  }


  login(data:FormGroup){
    console.log(data.value)
    this.authService.SignIn(data.value.username, data.value.password)
    .then((result)=>{
      if(result){
        window.alert("login success")
        this.router.navigate(['dashboard']);
        this.shared.loginButtonFlag.next(false);
      }
    })
    .catch((error)=>{
      window.alert(error.message)
    })
    }

}
