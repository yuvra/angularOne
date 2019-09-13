import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './component/home-page/home-page.component';
import { SideNavMatComponent } from './component/side-nav-mat/side-nav-mat.component';
import { LoginComponent } from './component/login/login.component';
import { YourFirstAppComponent } from './component/pages/your-first-app/your-first-app.component';
import { PageTwoComponent } from './component/pages/page-two/page-two.component'


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent},
  { path: 'login', component: LoginComponent },
  // { path: 'pageOne', component: YourFirstAppComponent },
  // { path: 'pageTwo', component: PageTwoComponent },
  {
    path: 'sideNav',
    component: SideNavMatComponent,
    children: [
                { path: 'pageOne', component: YourFirstAppComponent },
                { path: 'pageTwo', component: PageTwoComponent},
              ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
