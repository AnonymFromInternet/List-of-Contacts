import { Component } from '@angular/core';
import {ItemsArrayService} from "./services/itemsArray.service"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ItemsArrayService]
})
export class AppComponent {
  title = 'list-of-contacts';
}
