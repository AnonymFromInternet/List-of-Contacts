import { Component } from '@angular/core';
import {ContactsArrayService} from "./services/contactsArray.service";
import {AuthService} from "./services/auth-service";
import {AuthGuard} from "./services/auth-guard.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ContactsArrayService]
})
export class AppComponent {
  title = 'list-of-contacts';
}
