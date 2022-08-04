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
    var val = {
      email: this.form.value.email,
      password: this.form.value.password,
    };
    this.authApi.verifyUser(val).subscribe((res) => {
      alert(res.toString());
    });
  }
}
