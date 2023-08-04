import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  SignupForm!: FormGroup;

  constructor(private router: Router, private fb: FormBuilder, private authService: AuthService){

  }


  ngOnInit(){
    this.SignupForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', [Validators.required]],
    });
  }


  register(data:FormGroup){
    console.log(data.value)
    this.authService.SignUp(data.value.username, data.value.password)

    }
}
