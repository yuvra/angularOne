import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './component/home-page/home-page.component';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material';
import { BodyComponent } from './component/body/body.component';
import { ToolbarPageComponent } from './component/toolbar-page/toolbar-page.component';
import { HeaderPageComponent } from './component/header-page/header-page.component';
import { SideNavMatComponent } from './component/side-nav-mat/side-nav-mat.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTreeModule } from '@angular/material/tree';
import { CodeTemplateComponent } from './shared/code-template/code-template.component';
import { LoginComponent } from './component/login/login.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { DynamicBodyDataComponent } from './component/dynamic-body-data/dynamic-body-data.component';
import { YourFirstAppComponent } from './component/pages/your-first-app/your-first-app.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    BodyComponent,
    ToolbarPageComponent,
    HeaderPageComponent,
    SideNavMatComponent,
    CodeTemplateComponent,
    LoginComponent,
    DynamicBodyDataComponent,
    YourFirstAppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatGridListModule,
    FlexLayoutModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    MatTreeModule,
    MatProgressSpinnerModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
