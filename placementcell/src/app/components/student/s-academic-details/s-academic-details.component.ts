import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-s-academic-details',
  templateUrl: './s-academic-details.component.html',
  styleUrls: ['./s-academic-details.component.scss']
})
export class SAcademicDetailsComponent {
  user: any;
  academicDetailsForm: FormGroup;
  //degreeprogramtypeid: any;
 

  constructor(private fb: FormBuilder, private Studentservice: StudentService, private studentds:StudentService) {
    this.academicDetailsForm = this.fb.group({
      registrationNo: ['', Validators.required],
      studentEnrollId: ['', Validators.required],
      degreeProgrammeTypeId: ['', Validators.required],
      degreeProgrammeId: ['', Validators.required],
      collegeName: ['', Validators.required],
      subjectId: ['', Validators.required],
      ogpa: ['', [Validators.required, Validators.min(0), Validators.max(10)]],
      admissionYearId: ['', Validators.required],
      passingOutYearId: ['', Validators.required],
      marksheetUrl: ['', Validators.required]
    });

   
  }

  //form submitting 
  getvalueFromform(value: any) {
    const formValue = this.academicDetailsForm.value;
    console.log('Form Data:', formValue);

    this.Studentservice.postAcademicDetails(formValue).subscribe(
      () => {
        alert('Form submitted successfully!');
        this.academicDetailsForm.reset(); // Reset the form after successful submission
      },
      (error: { status: number; message: any; }) => {
        console.error('Error submitting form:', error);
        alert('An error occurred while submitting the form. Please try again later.');
        if (error.status === 500) {
          console.error('Internal Server Error: Please contact support.');
        } else {
          console.error(`Error: ${error.message}`);
        }
      }
    );
  }

  onSubmit() {
    if (this.academicDetailsForm.valid) {
      console.log(this.academicDetailsForm.value);
    } else {
      console.log('Form is invalid');
    }
  }

  onclear(){
    this.academicDetailsForm.reset();
  }
}
