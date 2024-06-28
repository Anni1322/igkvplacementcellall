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
}

  //submit form
  onSubmit(): void {
    console.log(this.academicDetailsForm.value);
    const formdata = this.academicDetailsForm.value
    this.studentds.postAcademicDetails(formdata).subscribe(() => {
      alert('Form submitted successfully!');
      // form.reset(); // Reset the form after successful submission
    }, (error) => {
      console.error('Error submitting form:', error);
    }
    );

  }

  
  // onClear(): void {
  //   this.academicDetailsForm.reset();
  // }
}

//form submission to the academic details but the clear button is not working properly 
