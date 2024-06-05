import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-fileupload',
  templateUrl: './fileupload.component.html',
  styleUrls: ['./fileupload.component.scss']
})
export class FileuploadComponent {
  userForm: FormGroup;
  selectedFile: File | null = null;
  uploadedPhotoUrl: string | null = null;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  onSubmit() {
    if (this.userForm.valid && this.selectedFile) {
      const formData = new FormData();
      formData.append('name', this.userForm.get('name')?.value);
      formData.append('email', this.userForm.get('email')?.value);
      formData.append('photo', this.selectedFile, this.selectedFile.name);

      const headers = new HttpHeaders({
        // 'Accept': 'text/plain' ,
        'Accept': 'application/json' 
      });

      this.http.post('http://localhost:3000/student/upload', formData, { headers, responseType: 'text' })
        .subscribe(response => {
          Swal.fire("Upload Successfully")
          console.log('Upload response:', response);
          if (response) {
            this.uploadedPhotoUrl = response;
          }
        }, error => {
          console.error('Upload error:', error);
        });
    }
  }
}
