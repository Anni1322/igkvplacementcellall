import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-s-profile',
  templateUrl: './s-profile.component.html',
  styleUrls: ['./s-profile.component.scss']
})
export class SProfileComponent implements OnInit{


  constructor(private auth:AuthService,
    private router:Router
    ){  }



  user: any = {}; // Initialize user object here

  ngOnInit(): void {
      // Retrieve user data from localStorage
      const userData = localStorage.getItem('currentUser');
      console.log("profiledata"+ userData)

      // Check if user data exists
      if (userData) {
          // Parse user data from JSON and assign it to the user variable
          this.user = JSON.parse(userData);
      }



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

