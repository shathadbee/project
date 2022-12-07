import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from './../enviroments/environment';
import { AuthService } from './core/services/auth/auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements  OnInit {
  isLoggedIn$!: Observable<boolean>;

  constructor(private _authService:AuthService){}
  ngOnInit(): void {
    this.isLoggedIn$=this._authService.isLoggedIn$;
  }
  title = 'finalangular';
}
