import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatSidenavModule} from '@angular/material/sidenav';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './components/admin/admin/admin.component';
import { StudentComponent } from './components/student/student.component';

 
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
import { LoginpageComponent } from './practice/loginpage/loginpage.component';
import { ReactiveFormsModule } from '@angular/forms';



import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';

import { BodyComponent } from './practice2/body/body.component';
import { SidenavComponent } from './practice2/sidenav/sidenav.component';
import { DashboardComponent } from './practice2/dashboard/dashboard.component';
import { AdminProfileComponent } from './components/admin/admin-profile/admin-profile.component';
import { AdminSidebarComponent } from './components/admin/admin-sidebar/admin-sidebar.component';
import { AdminHeaderComponent } from './components/admin/admin-header/admin-header.component';
import { AdminBodyComponent } from './components/admin/admin-body/admin-body.component';


// 05 5 2024 for install 
 
import { MatExpansionModule } from '@angular/material/expansion';



@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    StudentComponent,
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
    StudentHeaderComponent,
    LoginpageComponent,
    BodyComponent,
    SidenavComponent,
    DashboardComponent,
    AdminProfileComponent,
    AdminSidebarComponent,
    AdminHeaderComponent,
    AdminBodyComponent,
 


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
    MatCardModule,

    MatInputModule,
    ReactiveFormsModule,
 

    FormsModule,
    HttpClientModule,

    MatExpansionModule

    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
