import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm:any;
  registrationForm: any;
  activeForm: 'login' | 'register' = 'login';

  constructor(private fb:FormBuilder,
    private route: Router,
    private snackBar: MatSnackBar
    ) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['',[Validators.required, Validators.email]],
      password: ['',Validators.required]
    })

    this.registrationForm = this.fb.group({
      name: ['', Validators.required],
      mobile: ['', Validators.required],
      email: ['',[Validators.required, Validators.email]],
      password: ['',Validators.required]
    })
  }

  login(){
    if(this.loginForm.valid){
      this.route.navigate(['/money-control/dashboard']);
    }
    else{
      this.snackBar.open('Invalid email or password!', 'Close', {duration: 3000})
    }
  }

  toggleForm(form: 'login' | 'register'){
    this.activeForm = form;
  }

  register(){
    if(this.registrationForm.valid){
      setTimeout(() => {
        window.location.reload();
      }, 2000)
      this.route.navigate(['/money-control/login']);
    }
    else{
      this.snackBar.open('Please fill all the fields correctly !', 'Close', {duration: 3000})
    }
  }

}
