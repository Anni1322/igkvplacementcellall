import { Component , OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginData: any = {}; // Object to store login form data

  constructor(
    private router: Router,
    private auth:AuthService
    ) {}

  onSubmit() {
    console.log('User submitted:', this.loginData);

    const formdata = this.loginData;

    this.auth.login(formdata).subscribe(
      (response) => { 
        if (response) {
          const id = response.id;
          const username = response.username;
          const eid = response.eid;
          // Do something with the id and username, such as storing in local storage
          console.log('Login successful. User ID:', id, 'Username:', username);
          alert("Login successful");
          // condition check for admin or not
          if (username == "company") {
             this.router.navigate(['/company/c-dashboard']);
          }else if(username == "admin"){
            this.router.navigate(['/admin/a-dashboard']);
          } 
          else {
            this.router.navigate(['/student/s-basic-details']);
          }
         
        } else {
          alert("wrong password");
          console.log('Login failed. Invalid credentials.');
        }
      }, (error)=>{
      
      console.log("error",error)
  });

  }
}
