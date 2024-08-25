import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SideNavComponent } from './side-nav/side-nav.component';

interface WeatherForecast {
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  
  constructor(private http: HttpClient) {}

  ngOnInit() {

  }


  title = 'TypingTest';
  sideNavStatus: boolean = true;
}
