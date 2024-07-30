import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StudentApplicationDetails } from '../a-s-application/a-s-application.component';
import { BehaviorSubject, Observable } from 'rxjs';
import { JobStatus } from '../a-c-vacancy-list/a-c-vacancy-list.component';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  apiurl = 'http://localhost:3000'

   baseurl = 'http://localhost:3000/admin'

  constructor(private http:HttpClient) { }


 
  //add fot get data from basice details
  getBasicDetails(eid: any){
    return this.http.post<any>(`${this.baseurl}/student/getbasicdetails`, { eid });
  }
  // end
  


  getVacancyApply(): Observable<StudentApplicationDetails[]> {
    return this.http.get<StudentApplicationDetails[]>(`${this.baseurl}/VacancyApply`);
  }




  // getVacancyApplybyid(Company_Id: string): Observable<StudentApplicationDetails[]> {
  //   return this.http.get<StudentApplicationDetails[]>(`${this.baseurl}/Student_application_List/${Company_Id}`);
  // }

  getVacancyApplybyid(Company_Id: any){
    return this.http.post<any>(`${this.baseurl}/Student_application_List`, { Company_Id });
  }

  

  getshortlist(eid: any): Observable<StudentApplicationDetails[]> {
    return this.http.get<StudentApplicationDetails[]>(`${this.baseurl}/getshortlist`);
  }
  getReject(): Observable<StudentApplicationDetails[]> {
    return this.http.get<StudentApplicationDetails[]>(`${this.baseurl}/getReject`);
  }
  getSelected(): Observable<StudentApplicationDetails[]> {
    return this.http.get<StudentApplicationDetails[]>(`${this.baseurl}/getSelected`);
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

getAllCompany():Observable<any[]> {
  return this.http.get<any[]>(`${this.apiurl}/company`);
}

getAllStudents():Observable<any[]>{
  return this.http.get<any[]>( `${this.apiurl}/student`);
}

}
