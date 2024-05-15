import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-s-aplication',
  templateUrl: './s-aplication.component.html',
  styleUrls: ['./s-aplication.component.scss']
})
export class SAplicationComponent implements OnInit  {
  user: any = {}; // Initialize user object here
  formData: any = {}; // Initialize formData object here

  constructor(private ds: StudentService) {}

  ngOnInit(): void {
    // Retrieve user data from localStorage
    const userData = localStorage.getItem('currentUser');
    // Check if user data exists
    if (userData) {
        // Parse user data from JSON and assign it to the user variable
        this.user = JSON.parse(userData);
        // Initialize formData object after user data is retrieved
        this.formData = {
          user_id: this.user.eid || '', // Assign user id if available, otherwise empty string
          RegistrationType: this.user.RegistrationType || '' 
          // user_id: this.user.eid || '' 
          // user_id: this.user.eid || '' 
          // user_id: this.user.eid || '' 
          // user_id: this.user.eid || '' 
        };
        console.log(this.formData.user_id); // Log user_id here
    }
  }

  getvalueFromform(formValue: any) {
    console.log(formValue);
    // Your method logic here
    const formData = formValue; // Get form value
    console.log('Form Data:', formData);
    this.ds.postStudentDetails(formData).subscribe(() => {
      alert('Form submitted successfully!');
      // form.reset(); // Reset the form after successful submission
    }, (error) => {
      console.error('Error submitting form:', error);
    });
  }
}
