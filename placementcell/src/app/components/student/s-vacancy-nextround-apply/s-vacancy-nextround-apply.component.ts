import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { CServiceService } from '../../company/service/c-service.service';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from 'src/app/services/student.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-s-vacancy-nextround-apply',
  templateUrl: './s-vacancy-nextround-apply.component.html',
  styleUrls: ['./s-vacancy-nextround-apply.component.scss']
})
export class SVacancyNextroundApplyComponent implements OnInit {
  vacancyApplydata!:FormGroup;
  selectedFile: File | null = null;


  Student_ID :any;
  vid:any; usereid:any;
  rowData:any;

  // dataget through vacancy id 
  vacancydata:any;
  studentdetails:any;

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
    this.vacancyApplydata = this.fb.group({
      Company_ID: ['', Validators.required],
      Student_ID: [''],
      Vacancy_ID: [''],
      Application_Submission_Date: [''],
      Full_Name: [''],
      Fathers_Name: [''],
      Job_Title: [''],
      Mobile: [''],
      Email: [''],
      Status: ['pending']
    });


   

    // get data from next roud form
    // rowdata get 
this.studentds.getRowData().subscribe(data => {
  this.rowData = data;
  console.log("Row data in AnotherComponent:", this.rowData);
  
// get sid from row for search unique
  console.log("ths is application id",data.Student_ID);
  this.vacancyApplydata.patchValue({Student_Application_ID:data.Student_Application_ID})
  this.vacancyApplydata.patchValue({Company_ID:data.Company_ID})
  this.vacancyApplydata.patchValue({Student_ID:data.Student_ID})
  this.vacancyApplydata.patchValue({Vacancy_ID:data.Vacancy_ID})
  this.vacancyApplydata.patchValue({Flag:data.Flag})
  this.vacancyApplydata.patchValue({Application_Submission_Date:data.Application_Submission_Date})
  this.vacancyApplydata.patchValue({Full_Name:data.Full_Name})
  this.vacancyApplydata.patchValue({Fathers_Name:data.Fathers_Name})
  this.vacancyApplydata.patchValue({Job_Title:data.Post_Name})
  this.vacancyApplydata.patchValue({Mobile:data.Mobile})
  this.vacancyApplydata.patchValue({Email:data.Email})
  this.vacancyApplydata.patchValue({Status:data.Status})
  // You can handle the data here if needed
});
    // get data from next roud form


  }
  

  onSubmit() {
    if (this.vacancyApplydata.valid) {
      console.log("this data come from next roud form ",this.vacancyApplydata.value);
    
      this.studentds.PostNextRoutdDetails(this.vacancyApplydata.value).subscribe(
        (data)=>{
          console.log("sucessfull",data);
          Swal.fire("Successfully Applied ")
        },
        (error)=>{
          Swal.fire("Already")
          console.log(error)
        }
      );
    
  
  }
}
//redirect the page 
 
}


//nextround api create with the specific field to fill the form and get the data
//after submitting the form page can redirect to the preview page 
//see reason link not working 


// import { HttpClient } from '@angular/common/http';
// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { ActivatedRoute, Router } from '@angular/router';
// import { AuthService } from 'src/app/services/auth.service';
// import { CServiceService } from '../../company/service/c-service.service';
// import { StudentService } from 'src/app/services/student.service';
// import Swal from 'sweetalert2';

// @Component({
//   selector: 'app-s-vacancy-nextround-apply',
//   templateUrl: './s-vacancy-nextround-apply.component.html',
//   styleUrls: ['./s-vacancy-nextround-apply.component.scss']
// })
// export class SVacancyNextroundApplyComponent implements OnInit {
//   vacancynextrounddata!: FormGroup;

//   Student_ID: any;
//   vid: any;
//   usereid: any;

//   // Data get through vacancy id
//   vacancydata: any;
//   studentdetails: any;

//   constructor(
//     private fb: FormBuilder,
//     private http: HttpClient,
//     private auth: AuthService,
//     private companyds: CServiceService,
//     private studentds: StudentService,
//     private route: ActivatedRoute,
//     private router: Router
//   ) {}

//   ngOnInit() {
//     this.vacancynextrounddata = this.fb.group({
//       Company_ID: ['', Validators.required],
//       Student_ID: [''],
//       Vacancy_ID: [''],
//       Application_Submission_Date: [''],
//       Full_Name: [''],
//       Fathers_Name: [''],
//       Job_Title: [''],
//       Mobile: [''],
//       Email: [''],
//       Status: ['pending']
//     });

//     // For id pass
//     this.route.params.subscribe(params => {
//       this.vid = params['id'];
//       // Call your function with the vacancyId
//       this.getvacancydata(this.vid);
//     });

//     // Get data from local storage
//     const userString = localStorage.getItem('currentUser');
//     if (userString !== null) {
//       this.usereid = JSON.parse(userString);
//       console.log('student details:', this.usereid);
//       this.vacancynextrounddata.patchValue({
//         Full_Name: this.usereid.fullname 
//       });
//     }

//     // Get data from student table
//     this.studentds.getBasicDetails(this.usereid.eid).subscribe(
//       (response) => {
//         this.studentdetails = response;
//         console.log('studentdetails details:', this.studentdetails);
//         this.vacancynextrounddata.patchValue({
//           Student_ID: this.studentdetails.UE_ID,
//           Email: this.studentdetails.Email_Id,
//           Mobile: this.studentdetails.Mobile_No,
//           Fathers_Name: this.studentdetails.Father_Name_E,
//           Full_Name: this.studentdetails.Student_First_Name_E + ' ' + this.studentdetails.Student_Middle_Name_E + ' ' + this.studentdetails.Student_Last_Name_E
//         });
//       },
//       (error) => {
//         console.log('Error: ', error);
//       }
//     );
//   }

//   getvacancydata(vid: any) {
//     console.log('Vacancyis:', vid);
//     this.companyds.getVacancyNextdata(vid).subscribe(
//       (response) => {
//         this.vacancydata = response;
//         console.log('Vacancy Details:', this.vacancydata);
//         this.vacancynextrounddata.patchValue({
//           Company_ID: this.vacancydata.Company_Id,
//           Vacancy_ID: this.vacancydata.Vacancy_ID,
//           Job_Title: this.vacancydata.Job_Title
//         });
//       },
//       (error) => {
//         console.log('Error:', error);
//       }
//     );
//   }

//   onSubmit() {
//     if (this.vacancynextrounddata.valid) {
//       const formData = new FormData();
//       console.log(this.vacancynextrounddata.value);
//       formData.append('Company_ID', this.vacancynextrounddata.get('Company_ID')?.value);
//       formData.append('Student_ID', this.vacancynextrounddata.get('Student_ID')?.value);
//       formData.append('Vacancy_ID', this.vacancynextrounddata.get('Vacancy_ID')?.value);
//       //formData.append('Application_Submission_Date', this.vacancynextrounddata.get('Application_Submission_Date')?.value);
//       formData.append('Full_Name', this.vacancynextrounddata.get('Full_Name')?.value);
//       formData.append('Fathers_Name', this.vacancynextrounddata.get('Fathers_Name')?.value);
//       formData.append('Post_Name', this.vacancynextrounddata.get('Job_Title')?.value);
//       formData.append('Mobile', this.vacancynextrounddata.get('Mobile')?.value);
//       formData.append('Email', this.vacancynextrounddata.get('Email')?.value);
//      // formData.append('Status', this.vacancynextrounddata.get('Status')?.value);

//       console.log("this is data ", formData);

//       this.http.post('http://localhost:3000/student/VacancyApply', formData).subscribe(
//         response => {
//           Swal.fire('Form submitted successfully!');
//           console.log('Form submitted successfully!', response);
//           this.vacancynextrounddata.reset(); // Reset the form after successful submission
//           this.router.navigate(['/student/s-status']); // Redirect the page after successfully submitted
//         },
//         error => {
//           Swal.fire({
//             icon: "error",
//             title: "You are Already Applied Please Check My Application",
//           });
//           console.error('Error submitting form', error);
//         }
//       );
//     }
//   }
// }

// //post api can not working properly 
// //vacancy details can not get the data and patch it 
// //vacancy id is undefined 