import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatSidenavModule} from '@angular/material/sidenav';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './components/admin/admin.component';
import { StudentComponent } from './components/student/student.component';

import { LayoutComponent } from './layout/layout.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { MenubarComponent } from './components/menubar/menubar.component';
import { HomeComponent } from './components/home/home.component';
import {MatListModule} from '@angular/material/list';
import {MatCommonModule} from '@angular/material/core';
import {MatBadgeModule} from '@angular/material/badge';
import { CompanyregistrationComponentComponent } from './components/registration/companyregistration-component/companyregistration-component.component';
import { StudentragistrationComponentComponent } from './components/registration/studentragistration-component/studentragistration-component.component';
import { JoblistComponent } from './components/joblist/joblist.component';

import { HttpClientModule } from '@angular/common/http'; 


import { FormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { StudentNotificationComponent } from './components/student/student-notification/student-notification.component';
import { StudentProfileComponent } from './components/student/student-profile/student-profile.component';
import { MyApplicationTrackingComponent } from './components/student/my-application-tracking/my-application-tracking.component';
import { JobListComponent } from './components/student/job-list/job-list.component';
import { StudentHeaderComponent } from './components/student/student-header/student-header.component';


@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    StudentComponent,
    LayoutComponent,
    MenubarComponent,
    HomeComponent,
    CompanyregistrationComponentComponent,
    StudentragistrationComponentComponent,
    JoblistComponent,
    LoginComponent,
    SignupComponent,

    StudentNotificationComponent,
    StudentProfileComponent,
    MyApplicationTrackingComponent,
    JobListComponent,
    StudentHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatCommonModule,
    MatBadgeModule,

    FormsModule,
    HttpClientModule

    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
