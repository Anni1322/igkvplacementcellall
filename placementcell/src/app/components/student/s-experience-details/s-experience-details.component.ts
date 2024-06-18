import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-s-experience-details',
  templateUrl: './s-experience-details.component.html',
  styleUrls: ['./s-experience-details.component.scss']
})
export class SExperienceDetailsComponent implements OnInit{
  user:any = { };
  experiencedetailsform: any;

  constructor(private fb:FormBuilder, private Stuedentservice:StudentService, private studentds:StudentService){ }
  ngOnInit(): void {
    this.experiencedetailsform = this.fb.group({
      Registration_No: [null],
      Organization_Name: [null],
      Post_Name: [null],
      WorkPlace_Address: [null],
      WorkPlace_District_Id: [null],
      WorkPlace_State_Id: [null],
      WorkPlace_Country_Id: [null],
      City_Name: [null],
      Description: [null],
      Period_From: [null],
      Period_To: [null],
      Is_Currently_working_YN: [null],
      Salary: [null],
      Created_Date: [null],
      
    });

    //for master table 

    

  }

  //experience details form submission 
  getvalueFromform(value: any) {
    const formValue = this.experiencedetailsform.value;
    console.log('Form Data:', formValue);

    this.Stuedentservice.postAddExperience(formValue).subscribe(
      () => {
        alert('Form submitted successfully!');
        this.experiencedetailsform.reset(); // Reset the form after successful submission
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
    if (this.experiencedetailsform.valid) {
      this.getvalueFromform(this.experiencedetailsform.value);
    } else {
      console.log('Form is not valid');
    }
  }
  
  onClear() {
    this.experiencedetailsform.reset();
  }


}
