import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { CServiceService } from '../service/c-service.service';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from 'src/app/services/student.service';
import Swal from 'sweetalert2';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-c-fileupload',
  templateUrl: './c-fileupload.component.html',
  styleUrls: ['./c-fileupload.component.scss']
})
export class CFileuploadComponent implements OnInit {
  filesuploadsform!:FormGroup;
  selectedFile: File | null = null;
   
 
  vid:any; usereid:any;

  filedata:any;

  constructor(
    private fb: FormBuilder, 
    private http: HttpClient,
    private auth: AuthService,
    private companyds:CServiceService,
    private route: ActivatedRoute,
    private studentds: StudentService,
    ) {

 
    }
 
  ngOnInit() {
    this.filesuploadsform = this.fb.group({
      Company_ID: ['', Validators.required],
      Application_Submission_Date: ['']
     
    });





// for id pass 
this.route.params.subscribe(params => {
  this.vid = params['id'];
  // is send 
 
 
});


// get data from local storage
const userString = localStorage.getItem('currentUser');
if (userString !== null) {
  // Proceed only if userString is not null
  this.usereid = JSON.parse(userString); 
  console.log('student details:', this.usereid);
 }


//  fetch file 
  this.companyds.getFiles().subscribe(
    (data) => {
      this.filedata = data;
     
      console.log("this files",this.filedata)
      
     
    },
    (error) => {
      console.error('Error fetching files:', error);
    }
  );


}
 
   // Define the isImage method
   isImage(path: string): boolean {
    const imageExtensions = ['jpg', 'jpeg', 'png', 'gif'];
    const extension = path.split('.').pop()?.toLowerCase();
    return imageExtensions.includes(extension || '');
  }




// d
  //upload logo
  logoFile:any;
  nopath(){
    Swal.fire("please select a file","","warning")
    }
    
  uploadLogo(){                            //multer will accept form data so we here creating a form data
    if(!this.logoFile){
      return this.nopath();
    }
    
    const LogoformData = new FormData();
    LogoformData.append('company_logo', this.logoFile);
    console.log(this.logoFile)
    
      // Swal.fire("Logo uploaded successfully")
      //this.iseditmode=false;
     
    };
    
    
// d








  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
    console.log(this.selectedFile)
  }

  resumeFileName:any;

  // onFileSelected(event: any) {
  //   const file: File = event.target.files[0];
  //   if (file) {
  //     this.resumeFileName = file; // Store the file name
  //     console.log(this.resumeFileName);
  //   }
  // }
  

  onSubmit() {
    if (this.filesuploadsform.valid) {
      const formData = new FormData();
      console.log(this.filesuploadsform.value)
      formData.append('Company_ID', this.filesuploadsform.get('Company_ID')?.value);
  
      if (this.selectedFile) {
        // formData.append('file', this.selectedFile, this.selectedFile.name);
        formData.append('file', this.selectedFile);
      }
 
     

      console.log("this is data ",formData)


      this.http.post('http://localhost:3000/company/fileupload', formData)
      .subscribe(
        response => {
          Swal.fire('Form submitted successfully!')
          console.log('Form submitted successfully!', response);
          this.filesuploadsform.reset();
          this.selectedFile = null;
        },
        error => {
 
          Swal.fire({
            icon: "error",
            title: "You are Allready Applied Please Check My Application",
   
          });
          console.error('Error submitting form', error);
        }
      );


      







  
  


}

}

}

 



 