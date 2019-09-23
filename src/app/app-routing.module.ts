import { RouterModule, Routes } from "@angular/router";

import { HomePageComponent } from "./component/home-page/home-page.component";
import { LoginAuthGuard } from "./shared/route-gurd/login-auth.guard";
import { LoginComponent } from "./component/login/login.component";
import { NgModule } from "@angular/core";
import { PageNotFoundComponentComponent } from "./component/page-not-found/page-not-found.component";
import { PageTwoComponent } from "./component/pages/page-two/page-two.component";
import { SideNavMatComponent } from "./component/side-nav-mat/side-nav-mat.component";
import { YourFirstAppComponent } from "./component/pages/your-first-app/your-first-app.component";
import { SignupComponent } from './component/signup/signup.component';

const routes: Routes = [
  { path: '', redirectTo: '/sideNav/home', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signUp', component: SignupComponent },
  {
    path: 'sideNav',
    component: SideNavMatComponent,
    canActivate: [LoginAuthGuard],
    canActivateChild: [LoginAuthGuard],
    children: [
                { path: 'pageOne', component: YourFirstAppComponent,},
                { path: 'pageTwo', component: PageTwoComponent,},
                { path: 'home', component: HomePageComponent,},
              ]
  },
  { path: '**', component: PageNotFoundComponentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
