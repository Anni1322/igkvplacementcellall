import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './components/home/home.component';
import { AdminComponent } from './components/admin/admin.component';
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


const routes: Routes = [
  // {path:'', component:LayoutComponent}
  {path:'', component:HomeComponent},
  {path:'admin', component:AdminComponent},
  {path:'company_registraion', component:CompanyregistrationComponentComponent},
  // {path:'student_registraion', component:StudentragistrationComponentComponent},
  {path:'student_registraion', component:StudentragistrationComponentComponent},
  {path:'joblist', component:JoblistComponent},

  {path:'login', component:LoginComponent},
  {path:'signup', component:SignupComponent},
 
 
  {path:'student', component:StudentComponent},
  {path:'student_profile', component:StudentProfileComponent},
  {path:'student_notification', component:StudentNotificationComponent},
  {path:'student_job_list', component:JobListComponent},
  {path:'my_application', component:MyApplicationTrackingComponent},


 
  // {path:'userprofile', component:},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
