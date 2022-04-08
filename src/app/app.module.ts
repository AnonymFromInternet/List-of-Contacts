import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { ContactComponent } from './contact/contact.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from "@angular/material/button";
import { AddNewContactComponent } from './add-new-contact/add-new-contact.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {FormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {HttpClientModule} from "@angular/common/http";
import { LoginPageComponent } from './login-page/login-page.component';
import { PageNotExistComponent } from './page-not-exist/page-not-exist.component';
import {RouterModule, Routes} from "@angular/router";
import {RoutingModule} from "./customModules/routing.module";
import {AuthGuard} from "./services/auth-guard.service";
import {AuthService} from "./services/auth-service";


@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    ButtonsComponent,
    ContactComponent,
    AddNewContactComponent,
    LoginPageComponent,
    PageNotExistComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    FormsModule,
    MatInputModule,
    HttpClientModule,
    RoutingModule
  ],
  providers: [AuthGuard, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
