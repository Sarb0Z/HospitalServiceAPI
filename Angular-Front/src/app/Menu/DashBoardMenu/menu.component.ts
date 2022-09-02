import { Component, OnInit } from '@angular/core';
import { AuthApiService } from 'src/app/Services/AuthApi/AuthService/auth-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  logInStatus: boolean = false;
  constructor(private authService: AuthApiService, private router: Router) {}

  ngOnInit(): void {
    // this.refreshLogin();
    if (localStorage.getItem('id_token') !== null) {
      this.authService.login();
    } else {
      this.authService.logout();
    }
    this.logInStatus = this.authService.getLoginStatus();
  }
  refreshLogin() {
    // this.authService.getLoginStatus().subscribe((data)=>{
    //   this.logInStatus=data.flag;
    //   console.log(this.logInStatus);
    // });
  }
  logOut() {
    this.authService.logout();
    this.router.navigateByUrl('/Login');
    this.logInStatus = this.authService.getLoginStatus();

  }

  patientDetails() {
    this.router.navigateByUrl('/getpatientdetails');


  }
  patient() {
    this.router.navigateByUrl('/patient');


  }
  doctor() {
    this.router.navigateByUrl('/doctor');

  }
  diagnosis() {
    this.router.navigateByUrl('/diagnosis');

  }
  visit() {
    this.router.navigateByUrl('/visits');

  }
}
