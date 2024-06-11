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

  constructor(private fb: FormBuilder , private studentds:StudentService) { }

  ngOnInit(): void {
    this.academicDetailsForm = this.fb.group({
      Registration_No: [''],
      Student_Enroll_Id: [''],
      Student_Id: [''],
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
  }

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

  onClear(): void {
    this.academicDetailsForm.reset();
  }
}
