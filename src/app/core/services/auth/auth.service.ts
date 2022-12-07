import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
isLoggedIn$= new BehaviorSubject<boolean>(!!localStorage.getItem('token'));
  constructor() { }

get isLoggedIn():boolean{
  return  this.isLoggedIn$.getValue();
}
login(){
  localStorage.setItem('token','gfffff');
  this.isLoggedIn$.next(true);
}
logout(){
  localStorage.removeItem('token');
  this.isLoggedIn$.next(false);
}


}
