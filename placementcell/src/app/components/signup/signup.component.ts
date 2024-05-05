import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Import Router from '@angular/router'
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  user: any = {};

  constructor(private ds: ServiceService, private router: Router) {}  

  onSubmit() {
    console.log('User submitted:', this.user);
    const userDatas = this.user; 
  
    this.ds.postsignup(userDatas).subscribe(() => {
      alert('Form submitted successfully!');
      this.formclear();  
      this.router.navigate(['/login']);
    }, (error) => {
      console.error('Error submitting form:', error);
    });
  }
  
  formclear(){
    this.user.username = "";
    this.user.password = "";
    this.user.re_password = "";
  }  
}
