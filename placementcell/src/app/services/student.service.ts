import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  getDegreeType() {
    throw new Error('Method not implemented.');
  }
  getCollege() {
    throw new Error('Method not implemented.');
  }

  private apiUrl = 'http://localhost:3000';

  studentDetail_Get_Url: string = 'http://localhost:3000/student/student_List';

  studentDetail_Post_Url: string = 'http://localhost:3000/student/registration';


  constructor(private http: HttpClient) { }

  getStudentDetails() {
    return this.http.get(this.studentDetail_Get_Url);
  }

  // postStudentDetails(data: any) {
  //   return this.http.post(this.studentDetail_Post_Url, data);  
  // }
  //add fot get data from basice details
  postStudentDetails(data: any) {
    // return this.http.post(this.studentDetail_Post_Url, data);  
    return this.http.post<any>(`${this.apiUrl}/student/registration`, data);
  }
  // end



  getProfiledata(eid: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/student/search`, { eid });
  }


  // this api is get details from eid with combine table student detils or vacancy details
  getstudentdetails(eid: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/student/getstudentdetails`, { eid });
  }


  //add fot get data from basice details
  getBasicDetails(eid: any) {
    return this.http.post<any>(`${this.apiUrl}/student/getbasicdetails`, { eid });
  }
  // end

  //add fot get data from basice details
  postBasicDetails(data: any) {
    // return this.http.post(this.studentDetail_Post_Url, data);  
    return this.http.post<any>(`${this.apiUrl}/student/postbasicdetails`, data);
  }
  // end


  getVacancyApplyStudentDetails() {
    return this.http.get(`${this.apiUrl}/student/getVacancyApplyStudentDetails`);
  }
  VacancyApplicationStudentDetail(eid: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/student/VacancyApplicationStudentDetail`, { eid });
  }


  // add by anil this api for master table
  getGender() {
    return this.http.get(`${this.apiUrl}/student/getGender`);
  }

  // added by roshni 
  getSalutation_English() {
    return this.http.get(`${this.apiUrl}/student/salutationenglish`);
  }

  getSalutation_Hindi() {
    return this.http.get(`${this.apiUrl}/student/salutationhindi`);
  }

  getRegistrationType() {
    return this.http.get(`${this.apiUrl}/student/registrationtype`);
  }

  postaddskill(data: any) {
    // return this.http.post(this.studentDetail_Post_Url, data);  
    return this.http.post<any>(`${this.apiUrl}/student/SkillDetails`, data);
  }

  postAddExperience(data: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/student/ExperienceDetails`, data);
  }

  postAcademicDetails(data: any) {
    return this.http.post<any>(`${this.apiUrl}/student/AcademicDetails`, data);
  }

  getskill(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/student/getskill`);
  }

  getSkills(eid: any) {
    // console.log('service'  ,eid);
    return this.http.post<any>(`${this.apiUrl}/student/getskillid`, { eid });
  }

  getexperience(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/student/getexperience`);
  }

  getexperienceid(eid: any) {
    return this.http.post<any>(`${this.apiUrl}/student/getexperienceid`, { eid });
  }


  getacademic(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/student/getacademic`);
  }

  getAcademicId(eid: any) {
    return this.http.post<any>(`${this.apiUrl}/student/AcademicId`, { eid });
  }

  getDegreeProgram() {
    return this.http.get(`${this.apiUrl}/student/getDegree_program`);
  }

  getDegree_type() {
    return this.http.get(`${this.apiUrl}/student/getDegree_type`);
  }

  getSubject() {
    return this.http.get(`${this.apiUrl}/student/getSubjects`);
  }

  getAdmissionyear() {
    return this.http.get(`${this.apiUrl}/student/admissionyear`);
  }

  getcollege() {
    return this.http.get(`${this.apiUrl}/student/college`);
  }

  getPassingOutYear() {
    return this.http.get(`${this.apiUrl}/student/passingoutyear`);
  }


  //Certificate upload 
  UploadCertificate(formData: any): Observable<HttpEvent<any>> {
    const req = new HttpRequest('POST', `${this.apiUrl}/uploadcertificate`, formData, {
      reportProgress: true,
      responseType: 'json'
    });
    return this.http.request(req);
  }


  rowDataSubject: any;

  setRowDataNextRaoud(rowdata: any): void {
    this.rowDataSubject.next(rowdata);
  }

  getRowDataNextRaoud(): Observable<any> {
    return this.rowDataSubject.asObservable();
  }
}
