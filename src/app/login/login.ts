import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  
  otpGenerated=false;
  email= new FormControl('', [Validators.required, Validators.email])
  otp=new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(6)])
  

  genrateOtp(){
    alert("OTP has been sent to your email"+this.email.value);
    this.otpGenerated=true;
  }

  login(){
    alert("Logged in successfully with email: "+this.otp.value);
  }
}
