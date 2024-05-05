import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  studentDetail_Get_Url: string = 'http://localhost:3000/student/student_List';

  studentDetail_Post_Url: string = 'http://localhost:3000/student/registration';
  

  constructor(private http: HttpClient) {}

  getStudentDetails() {
    return this.http.get(this.studentDetail_Get_Url);
  }

  postStudentDetails(data: any) {
    return this.http.post(this.studentDetail_Post_Url, data);  
  }
}
