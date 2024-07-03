import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-s-academic-details',
  templateUrl: './s-academic-details.component.html',
  styleUrls: ['./s-academic-details.component.scss']
})
export class SAcademicDetailsComponent  implements OnInit {
  academicDetailsForm!: FormGroup;
  admissionyear: any;
  user: any;
  college: any;
  DegreeType: any;
  DegreeProgram: any;
  Subject: any;
  AdmissionSession: any;
  PassingYear: any;

  constructor(private fb: FormBuilder , private studentds:StudentService) { }

  ngOnInit(): void {
    this.academicDetailsForm = this.fb.group({
      Registration_No: [''],
      Student_Enroll_Id: [''],
      Student_ID: [''],
      Degree_Programme_Type_Id: [''],
      Degree_Programme_Id: [''],
      College_Name: [''],
      Subject_Id: [''],
      OGPA: [''],
      Admission_Year_Id: [''],
      Passingout_Year_Id: [''],
      Marksheet_Url: [''],
      Created_Date: ['']
    });
    
    const userData = localStorage.getItem('currentUser');
    console.log("profiledata"+ userData)

    // Check if user data exists
    if (userData) {
        // Parse user data from JSON and assign it to the user variable
        this.user = JSON.parse(userData);
        this.academicDetailsForm.patchValue({
          Student_ID:this.user.eid
        })
        console.log("id"+ this.user.eid)
    
   
  }

  //for college name
  this.studentds.getCollege().subscribe(
    (response) => {
      //console.log('Raw response: ', response);
      this.college = response;
      console.log('college details:', this.college);
    },
    (error) => {
      console.log('Error: ', error);
    }
  );

  //
  this.studentds.getDegreeType().subscribe(
    (response) => {
      this.DegreeType = response;
      console.log('Degree type details: ', this.DegreeType);
    },
    (error) => {
      console.log('Error: ', error);
    }
  );

  this.studentds.getDegreeProgram().subscribe(
    (response) => {
      this.DegreeProgram = response;
      console.log('Degree program details: ', this.DegreeProgram);
    },
    (error) => {
      console.log('Error: ', error);
    }
  );

  this.studentds.getSubject().subscribe(
    (response) => {
      this.Subject = response;
      console.log('Subject details: ', this.Subject);
    },
    (error) => {
      console.log('Error: ', error);
    }
  );

  this.studentds.getAdmissionyear().subscribe(
    (response) => {
      this.AdmissionSession = response;
      console.log('Admission year details: ', this.AdmissionSession);
    },
    (error) => {
      console.log('Error: ', error);
    }
  );

  this.studentds.getPassingOutYear().subscribe(
    (response) => {
      this.PassingYear = response;
      console.log('Passing out year details: ', this.PassingYear);
    },
    (error) => {
      console.log('Error: ', error);
    }
  );


}

  //submit form
  // onSubmit(): void {
  //   console.log(this.academicDetailsForm.value);
  //   const formdata = this.academicDetailsForm.value
  //   this.studentds.postAcademicDetails(formdata).subscribe(() => {
  //     alert('Form submitted successfully!');
  //     // form.reset(); // Reset the form after successful submission
  //   }, (error) => {
  //     console.error('Error submitting form:', error);
  //   }
  //   );

  // }

  onSubmit(): void {
    if (this.academicDetailsForm.valid) {
      console.log('Form Submitted!', this.academicDetailsForm.value);
      // form submission here
      const userData = this.academicDetailsForm.value
      this.studentds.postAcademicDetails(userData).subscribe(
        () => {
          alert('Form submitted successfully!');
          this.academicDetailsForm.reset(); 
        },
        (error) => {
          console.error('Error submitting form:', error);
          // Display a more user-friendly message
          // alert('.');
          // Optionally, handle specific error scenarios based on status code
          if (error.status === 500) {
            console.error('Internal Server Error: Please contact support.');
          } else {
            console.error(`Error: ${error.message}`);
          }
        }
      );
    }
  }

  
  // onClear(): void {
  //   this.academicDetailsForm.reset();
  // }
}

//form submission to the academic details but the clear button is not working properly 
