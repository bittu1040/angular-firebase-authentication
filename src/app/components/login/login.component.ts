import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  loginForm!: FormGroup;

  constructor(private router: Router, private fb: FormBuilder, private authService: AuthService){

  }


  ngOnInit(){
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', [Validators.required]],
    });
  }


  login(data:FormGroup){
    console.log(data.value)
    this.authService.SignInCopy(data.value.username, data.value.password)
    .then((result)=>{
      if(result){
        this.router.navigate(['dashboard']);
      }
    })
    .catch((error)=>{
      window.alert(error.message)
    })
    }

}
