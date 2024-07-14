import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-s-skill-details',
  templateUrl: './s-skill-details.component.html',
  styleUrls: ['./s-skill-details.component.scss']
})
export class SSkillDetailsComponent implements OnInit{
  
  user:any = { };
  skilldetailsform : any;
  

  constructor(private fb:FormBuilder, private StudentService: StudentService){ }

  ngOnInit(): void {
    this.skilldetailsform = this.fb.group({
      Student_ID:[null],
      Registration_No:[null],
      Skill_Id:[null],
      Skill_Certificate_Url:[null],
      Created_Date:[null],

    });

    const userData = localStorage.getItem('currentUser');
    console.log("profiledata"+ userData)

    // Check if user data exists
    if (userData) {
        // Parse user data from JSON and assign it to the user variable
        this.user = JSON.parse(userData);
        this.skilldetailsform.patchValue({
          Student_ID:this.user.eid
        })
        console.log("idddd"+ this.user.eid)
        // id pass 
        // this.getdata(this.user.eid);
    }

  }

  //form submission 
  getvalueFromform(value: any) {
    const formValue = this.skilldetailsform.value;
    console.log('Form Data:', formValue);

    this.StudentService.postaddskill(formValue).subscribe(
      () => {
        alert('Form submitted successfully!');
        this.skilldetailsform.reset(); // Reset the form after successful submission
      },
      (error) => {
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
    if (this.skilldetailsform.valid) {
      this.getvalueFromform(this.skilldetailsform.value);
    } else {
      console.log('Form is not valid');
    }
  }
  
  onClear() {
    this.skilldetailsform.reset();
  }

}
 
    
  



