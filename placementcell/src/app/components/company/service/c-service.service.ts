import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { JobStatus } from '../c-status/job-status.model';

@Injectable({
  providedIn: 'root'
})
export class CServiceService {
  private apiUrl = 'http://localhost:3000/company/vacancies'; 
  private postapiUrl = 'http://localhost:3000/company/add_vacancy'; 
 
  constructor(private http:HttpClient) { }

// post/add vacancy details
postVacancies(vdata: any) {
  return this.http.post(this.postapiUrl, vdata)
}

postsignup(data: any) {
  return this.http.post(this.apiUrl+'/vacancies', data);  
}

// get vacanvy details from db
  getVacancies(): Observable<JobStatus[]> {
    return this.http.get<JobStatus[]>(this.apiUrl);
  }




// for side bar
  private sidebarVisibilitySubject = new BehaviorSubject<boolean>(true);
  sidebarVisibility$ = this.sidebarVisibilitySubject.asObservable();

  toggleSidebar() {
    this.sidebarVisibilitySubject.next(!this.sidebarVisibilitySubject.value);
  }
}
