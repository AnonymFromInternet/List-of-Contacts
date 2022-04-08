import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {LoginPageComponent} from "../login-page/login-page.component";
import {ListComponent} from "../list/list.component";
import {PageNotExistComponent} from "../page-not-exist/page-not-exist.component";
import {AuthGuard} from "../services/auth-guard.service";

const appRoutes: Routes = [
  {path: "", component: LoginPageComponent},
  {path: "contacts", canActivate: [AuthGuard], component: ListComponent},
  {path: "**", component: PageNotExistComponent}
]


@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class RoutingModule {

}
