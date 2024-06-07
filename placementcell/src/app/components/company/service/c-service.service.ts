import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { JobStatus } from '../c-status/job-status.model';

@Injectable({
  providedIn: 'root'
})
export class CServiceService {
  private apiUrl = 'http://localhost:3000/company'; 
  private baseurl = 'http://localhost:3000'; 
  private postapiUrl = 'http://localhost:3000/company/add_vacancy'; 
 
  companydetails_Post_Url = "http://localhost:3000/company/registerCompany";

  constructor(private http:HttpClient) { }

// post/add vacancy details
postVacancies(vdata: any) {
  return this.http.post(this.postapiUrl, vdata)
}

// update vacancy 
// get data form vacancy id 
updateVacancy(vdata: string): Observable<any> {
  return this.http.post<any>(`${this.baseurl}/company/update_vacancy`, vdata );
}


postsignup(data: any) {
  return this.http.post(this.apiUrl+'/vacancies', data);  
}

// get vacanvy details from db
  getVacancies(): Observable<JobStatus[]> {
    return this.http.get<JobStatus[]>(`${this.apiUrl}/vacancies`);
  }



// get data form vacancy id 
getVacancyedata(Vacancy_ID: string): Observable<any> {
  return this.http.post<any>(`${this.baseurl}/company/getdata_update_vacancy`, { Vacancy_ID });
}


VacancyApply(data:any){
  return this.http.post<any>(`${this.baseurl}/student/VacancyApply` ,data);
}


//added by roshni
postCompanyDetails(formValue: any): Observable<any> {
  return this.http.post(this.apiUrl, formValue);
}

getcompany_category(){
  return this.http.get(`${this.baseurl}/company/companycategory`);
}

getcompany_type(){
  return this.http.get(`${this.baseurl}/company/companytype`);
}

getstate(){
  return this.http.get(`${this.baseurl}/company/state`);
}
getdistrict(){
  return this.http.get(`${this.baseurl}/company/district`);
}

getblock(){
  return this.http.get(`${this.baseurl}/company/block`);
}

// for side bar
  private sidebarVisibilitySubject = new BehaviorSubject<boolean>(true);
  sidebarVisibility$ = this.sidebarVisibilitySubject.asObservable();

  toggleSidebar() {
    this.sidebarVisibilitySubject.next(!this.sidebarVisibilitySubject.value);
  }
}
