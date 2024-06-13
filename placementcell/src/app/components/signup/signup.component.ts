import { Router } from '@angular/router'; // Import Router from '@angular/router'
import { ServiceService } from 'src/app/services/service.service';
import { SignupService } from 'src/app/services/signup.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signupForm!: FormGroup;

  
  constructor(
    private fb: FormBuilder,
    private ds: ServiceService, 
    private router: Router,
    private singup: SignupService
    ) {}  


  ngOnInit(): void {
    this.signupForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      username: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      rePassword: ['', [Validators.required, Validators.minLength(6)]],
      role: ['1', Validators.required]
    }, { validators: this.passwordMatchValidator });
  }

  passwordMatchValidator(control: AbstractControl): ValidationErrors | null {
    const password = control.get('password');
    const rePassword = control.get('rePassword');
    if (password && rePassword && password.value !== rePassword.value) {
      return { 'passwordMismatch': true };
    }
    return null;
  }

  onSubmit(): void {
    if (this.signupForm.valid) {
      console.log('Form Submitted!', this.signupForm.value);
      // form submission here
      const userData = this.signupForm.value
    this.singup.postsignup(userData).subscribe( () => {
      alert('Form submitted successfully!');
     
      this.router.navigate(['/login']);
    }, (error) => {
      alert('Username Allready Exist');
      this.router.navigate(['/login']);
      console.error('Error submitting form:', error);
    })
    }
    
  }



  

  // user: any = {};

  // onSubmit() {
  //   console.log('User submitted:', this.user);
  //   const userData = this.user; 
  //   this.singup.postsignup(userData).subscribe( () => {
  //     alert('Form submitted successfully!');
  //     this.formclear();  
  //     this.router.navigate(['/login']);
  //   }, (error) => {
  //     console.error('Error submitting form:', error);
  //   })
  // }
  
  // formclear(){
  //   this.user.username = "";
  //   this.user.password = "";
  //   this.user.re_password = "";
  // }  






}
