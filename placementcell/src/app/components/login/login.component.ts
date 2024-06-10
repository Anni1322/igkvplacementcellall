import { Component , OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators , FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent  implements OnInit{
  loginData: any = {}; // Object to store login form data

  loginForm!: FormGroup;
  captchaImage!: string;


  constructor(
    private router: Router,
    private auth:AuthService,
    private fb: FormBuilder
    ) {}


    ngOnInit() {
      this.loginForm = this.fb.group({
        username: ['', Validators.required],
        password: ['', Validators.required],
        captcha: ['', Validators.required]
      });
      this.loadCaptcha();
    }

    loadCaptcha() {
      this.auth.getcaptcha().subscribe((data: any) => {
        this.captchaImage = `data:image/svg+xml;base64,${btoa(data.image)}`;
        console.log(this.captchaImage);
      });
    }



 

  onSubmit() {
    console.log('User submitted:', this.loginForm.valid);

    const loginData = this.loginForm.value;

    this.auth.login(loginData).subscribe(
      (response) => { 
        if (response) {
          const id = response.id;
          const username = response.username;
          const eid = response.eid;
          const role = response.role;
          // Do something with the id and username, such as storing in local storage
          console.log('Login successful. User ID:', id, 'Username:', username);
          // alert("Login successful");
          

          // condition check for admin or not
          if (role == 2) {
            Swal.fire("Welcome on this portal");
             this.router.navigate(['/company/c-dashboard']);
          }else if(role == 3){
            Swal.fire("Welcome on this portal");
            this.router.navigate(['/admin/a-dashboard']);
          } 
          else {
            Swal.fire("Welcome on this portal");
            this.router.navigate(['/student/s-dashboard']);
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


 


 
 

 

