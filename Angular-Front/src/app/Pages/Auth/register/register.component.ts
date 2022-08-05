import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { AuthApiService } from 'src/app/Services/AuthApi/auth-api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  user: any;
  form: FormGroup = new FormGroup({
    fullname: new FormControl(''),
    dob: new FormControl(Date),
    email: new FormControl(''),
    password: new FormControl(''),
    password2: new FormControl(''),
  });
  constructor(
    private formBuilder: FormBuilder,
    private authApi: AuthApiService
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      fullname: ['', Validators.maxLength(40)],
      cnic: ['', Validators.maxLength(15)],
      email: ['', Validators.email],
      password: ['', Validators.maxLength(40)],
      password2: ['', Validators.maxLength(40)],
    });
  }

  onSubmit() {
    var val = {
      username: this.form.value.fullname,
      email_id: this.form.value.email,
      cnic: this.form.value.cnic,
    };
    this.authApi.addUser(val).subscribe((res) => {
      this.authApi.getUser(this.form.value.email).subscribe((data) => {
        this.user = data;
        this.user = JSON.parse(this.user);
        //console.log(this.user);
        var obj = {
          id: this.user[0].id,
          _password: this.form.value.password,
        };
        this.authApi.addPassword(obj).subscribe((newRes) => {
          alert(newRes.toString());
        });
      });
    });
    // this.authApi.verifyUser(val).subscribe((res) => {
    //   alert(res.toString());
    // });
  }
}
