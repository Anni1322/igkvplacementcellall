import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }

  post_url: string = 'http://localhost:3000/student/signup';

  postsignup(data: any) {
    return this.http.post(this.post_url, data);  
  }


}
