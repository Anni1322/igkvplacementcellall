import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-captchacode',
  templateUrl: './captchacode.component.html',
  styleUrls: ['./captchacode.component.scss']
})
export class CaptchacodeComponent implements OnInit {
  loginForm!: FormGroup;
  captchaImage!: string;

  constructor(private fb: FormBuilder, private http: HttpClient) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      captcha: ['', Validators.required]
    });
    this.loadCaptcha();
  }

  loadCaptcha() {
    this.http.get('http://localhost:3000/student/captcha').subscribe((data: any) => {
      this.captchaImage = `data:image/svg+xml;base64,${btoa(data.image)}`;
      console.log(this.captchaImage);
    });
  }
 

  onSubmit() {
    if (this.loginForm.valid) {
      this.http.post('http://localhost:3000/student/login', this.loginForm.value).subscribe(
        response => {
          alert('Login successful');
        },
        error => {
          alert('Login failed: ' + error.error.message);
          this.loadCaptcha();
        }
      );
    }
  }
}
