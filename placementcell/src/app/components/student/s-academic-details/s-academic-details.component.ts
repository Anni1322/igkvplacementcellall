import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-s-academic-details',
  templateUrl: './s-academic-details.component.html',
  styleUrls: ['./s-academic-details.component.scss']
})
export class SAcademicDetailsComponent {
  academicDetailsForm: FormGroup;

  constructor(private fb: FormBuilder) {
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

  onSubmit() {
    if (this.academicDetailsForm.valid) {
      console.log(this.academicDetailsForm.value);
    } else {
      console.log('Form is invalid');
    }
  }
}
