import { Component, OnInit } from '@angular/core';
import { AuthApiService } from 'src/app/Services/AuthApi/auth-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  logInStatus: any;
  constructor(private authService: AuthApiService, private router: Router) {}

  ngOnInit(): void {
    this.refreshLogin();
  }
  refreshLogin() {
    this.authService.getLoginStatus().subscribe((data)=>{
      this.logInStatus=data.flag;
    });
  }
  logOut() {
    this.authService.logout();
    this.router.navigateByUrl('/Login');
  }
}
