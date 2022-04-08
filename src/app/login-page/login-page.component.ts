import { Component, OnInit } from '@angular/core';
import {AuthService} from "../services/auth-service";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent  {
  constructor(private authService: AuthService) {
  }

  logIn() {
    console.log("login active")
    setTimeout(() => {
      this.authService.isLogged = true
    }, 1000)
  }
}
