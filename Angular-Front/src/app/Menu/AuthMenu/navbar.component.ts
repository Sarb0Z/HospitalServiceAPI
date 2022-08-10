import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AuthApiService } from 'src/app/Services/AuthApi/auth-api.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  logInStatus: any;
  constructor(private authService: AuthApiService) {}

  ngOnInit(): void {
    this.refreshLogin();
  }
  refreshLogin() {
    this.logInStatus = this.authService.getLoginStatus();
  }
}
