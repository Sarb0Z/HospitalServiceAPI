import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AuthApiService } from './Services/AuthApi/auth-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public forecasts?: WeatherForecast[];
  LogInCom: boolean = false;

  constructor(http: HttpClient, private authService:AuthApiService) {
    http.get<WeatherForecast[]>('/weatherforecast').subscribe(
      (result) => {
        this.forecasts = result;
      },
      (error) => console.error(error)
    );
  }

  




  title = 'Angular-Front';
}

interface WeatherForecast {
  date: string;
  temperatureC: number;
  temperatureF: number;
  summary: string;
}
