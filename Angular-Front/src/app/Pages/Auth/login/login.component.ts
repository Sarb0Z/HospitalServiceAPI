import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthApiService } from 'src/app/Services/AuthApi/AuthService/auth-api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  form: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });
  user: any;
  password: any;
  token: any;
  constructor(
    private formBuilder: FormBuilder,
    private authApi: AuthApiService,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (localStorage.getItem('id_token') !== null) {
      this.router.navigateByUrl('/doctor');
    }
    this.form = this.formBuilder.group({
      email: ['', Validators.email],
      password: ['', Validators.maxLength(40)],
    });
  }

  onSubmit() {
    // this.authApi.getUser(this.form.value.email).subscribe((data) => {
    //   this.user = data;
    //   this.user = JSON.parse(this.user);
    //   //console.log(this.user);
    //   this.authApi.getPassword(this.user[0].id).subscribe((data) => {
    //     this.password = data;
    //     this.password = JSON.parse(this.password);
    //     //console.log(this.password);
    //     if (this.form.value.password == this.password[0]._password) {
    //       alert('Congratulations. Logged in.');
    //       this.authApi.login();
    //     } else {
    //       alert('Wrong email or password.');
    //     }
    //   });
    // });
    var val = {
      email_id: this.form.value.email,
      password: this.form.value.password,
    };
    this.authApi.getToken(val).subscribe((token) => {
      if (token == null) {
        alert('Wrong email or password');
      } else {
        //console.log(token);
        this.setSession(token);
        this.authApi.login();
        this.router.navigateByUrl('/doctor');
        setTimeout(()=>window.location.reload());


        //console.log(localStorage.getItem('id_token'));
      }
    });
    // setTimeout(()=>window.location.reload(), 3);
  }
  private setSession(authResult: any) {
    localStorage.setItem('id_token', authResult.token);
    localStorage.setItem('expires_at', authResult.expiry);
  }
}
