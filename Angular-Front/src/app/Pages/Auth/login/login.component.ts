import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { AuthApiService } from 'src/app/Services/AuthApi/auth-api.service';

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
  constructor(
    private formBuilder: FormBuilder,
    private authApi: AuthApiService
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: ['', Validators.email],
      password: ['', Validators.maxLength(40)],
    });
  }

  onSubmit() {
    this.authApi.getUser(this.form.value.email).subscribe((data) => {
      this.user = data;
      this.user = JSON.parse(this.user);
      //console.log(this.user);
      this.authApi.getPassword(this.user[0].id).subscribe((data) => {
        this.password = data;
        this.password = JSON.parse(this.password);
        //console.log(this.password);
        if (this.form.value.password == this.password[0]._password) {
          alert('Congratulations. Logged in.');
          this.authApi.login();
        } else {
          alert('Wrong email or password.');
        }
      });
    });
  }
}
