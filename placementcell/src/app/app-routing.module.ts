import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 

import { AdminComponent } from './components/admin/admin/admin.component';
import { CompanyregistrationComponentComponent } from './components/registration/companyregistration-component/companyregistration-component.component';
import { StudentragistrationComponentComponent } from './components/registration/studentragistration-component/studentragistration-component.component';
import { JoblistComponent } from './components/joblist/joblist.component';
import { StudentComponent } from './components/student/student.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { StudentProfileComponent } from './components/student/student-profile/student-profile.component';
import { StudentNotificationComponent } from './components/student/student-notification/student-notification.component';
import { JobListComponent } from './components/student/job-list/job-list.component';
import { MyApplicationTrackingComponent } from './components/student/my-application-tracking/my-application-tracking.component';
import { LoginpageComponent } from './practice/loginpage/loginpage.component';
import { SidenavComponent } from './practice2/sidenav/sidenav.component';
import { DashboardComponent } from './practice2/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { SHeaderComponent } from './components/student/s-layout/s-header/s-header.component';
import { SProfileComponent } from './components/student/s-profile/s-profile.component';
import { SAplicationComponent } from './components/student/s-aplication/s-aplication.component';
import { SBasicDetailsComponent } from './components/student/s-basic-details/s-basic-details.component';
import { SProfileEditComponent } from './components/student/s-profile-edit/s-profile-edit.component';




const routes: Routes = [

  // for new sidebar 
  // {path:'', redirectTo: 'dashboard', pathMatch : 'full'},
  {path:'dashboard', component:DashboardComponent},


 
  {path:'', component:HomeComponent},
  {path:'admin', component:AdminComponent},
  {path:'company_registration', component:CompanyregistrationComponentComponent},
  // {path:'student_registraion', component:StudentragistrationComponentComponent},
  
  {path:'joblist', component:JoblistComponent},

  {path:'login', component:LoginComponent},
  {path:'signup', component:SignupComponent},
 
 
// header


 
  {path:'student', component:StudentComponent,children:[
    {path:'student_profile', component:StudentProfileComponent},
    {path:'student_notification', component:StudentNotificationComponent},
    {path:'student_job_list', component:JobListComponent},
    {path:'s-basic-details', component:SAplicationComponent},
    {path:'s-basic-form', component:SBasicDetailsComponent},
    {path:'s-profile', component:SProfileComponent},
    {path:'s-profile-edit/:id', component:SProfileEditComponent},
    {path:'student_registration', component:StudentragistrationComponentComponent},
  ]},
 


  // practice 

 {path:'logpra', component:LoginpageComponent},
 {path:'s-header', component:SHeaderComponent},

 

 
  // {path:'userprofile', component:},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
