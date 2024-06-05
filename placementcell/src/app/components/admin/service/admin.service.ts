import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StudentApplicationDetails } from '../a-s-application/a-s-application.component';
import { BehaviorSubject, Observable } from 'rxjs';
import { JobStatus } from '../a-c-vacancy-list/a-c-vacancy-list.component';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

   baseurl = 'http://localhost:3000/admin'

  constructor(private http:HttpClient) { }


   

  getVacancyApply(): Observable<StudentApplicationDetails[]> {
    return this.http.get<StudentApplicationDetails[]>(`${this.baseurl}/VacancyApply`);
  }

// start function for pass data on compo. to anthercompo.
// this api for data pass to one component to anathor component

  private rowDataSubject = new BehaviorSubject<any>(null);

  setRowData(rowdata: any): void {
    this.rowDataSubject.next(rowdata);
  }

  getRowData(): Observable<any> {
    return this.rowDataSubject.asObservable();
  }
  // end function for pass data on compo. to anther compo.


// get vacanvy details from db
getVacancies(): Observable<JobStatus[]> {
  return this.http.get<JobStatus[]>(`${this.baseurl}/vacancies`);
}


 

}
