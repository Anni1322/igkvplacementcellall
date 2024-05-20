import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-s-profile',
  templateUrl: './s-profile.component.html',
  styleUrls: ['./s-profile.component.scss']
})
export class SProfileComponent implements OnInit{


  constructor(
    private auth:AuthService,
    private router:Router,
    private ds:StudentService
    ){}



  user: any = {}; // Initialize user object here

  ngOnInit(): void {
      // Retrieve user data from localStorage
      const userData = localStorage.getItem('currentUser');
      console.log("profiledata"+ userData)

      // Check if user data exists
      if (userData) {
          // Parse user data from JSON and assign it to the user variable
          this.user = JSON.parse(userData);

          console.log("idddd"+this.user.eid)
          // id pass 
          this.getdata(this.user.eid);
      }

  }


  // 
  profiledata:any
  
  getdata(eid: any) {
    console.log('EID:', eid);
    this.ds.getProfiledata(eid).subscribe(
      (response) => {
        console.log('Raw Response:', response);
  
        this.profiledata = response;
        console.log('Profile Data:', this.profiledata);
  
        if (this.profiledata) {
          console.log('eid:', this.profiledata.UE_ID);
          // console.log('username:', this.profiledata.username);
        } else {
          console.log('No profile data received.');
        }
      },
      (error) => {
        console.log('Error:', error);
      }
    );
  }
  

getid(){
  const userid = this.user;
  // console.log("userid"+userid.id);
  // console.log("userid"+userid.username);
  this.auth.login(userid.id).subscribe(
    (response) => { 
      if (response) {
        const id = response.id;
        const username = response.username;
        alert("Login successful");
        this.router.navigate(['/student/s-profile-edit', id]);
      } else {
        alert("wrong password");
        console.log('Login failed. Invalid credentials.');
      }
    }, (error)=>{
    
    console.log("error",error)
});

}
}

