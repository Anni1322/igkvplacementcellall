import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-s-aplication',
  templateUrl: './s-aplication.component.html',
  styleUrls: ['./s-aplication.component.scss']
})
export class SAplicationComponent implements OnInit  {
  user: any = {}; // Initialize user object here
  formData: any = {}; // Initialize formData object here
  studentregistrationForm! :FormGroup;
  genderoption: any ;
  salutationenglish: any ;
  salutationhindi: any;
  registrationtype: any;
  studentdetails: any;
 


  constructor(private fb: FormBuilder, private studentService: StudentService, private studentds:StudentService) {
    // Initialize the form with empty controls
    this.studentregistrationForm = this.fb.group({
      UE_ID: [null],
      Registration_Type: [null],
      Salutation_E: [null],
      Salutation_H: [null],
      Student_First_Name_E: [null],
      Student_Middle_Name_E: [null],
      Student_Last_Name_E: [null],
      Student_First_Name_H: [null],
      Student_Middle_Name_H: [null],
      Student_Last_Name_H: [null],
      DOB: [null],
      Gender_Id: [null],
      Mobile_No: [null],
      Email_Id: [null],
      Father_Name_E: [null],
      Mother_Name_E: [null],
      Father_Name_H: [null],
      Mother_Name_H: [null],
      Guardian_Name_E: [null],
      Spouse_Name_E: [null],

      Created_By: [null],
      Created_Date: [null],
      Modified_By: [null],
      Modified_Date: [null],
      Delete_Flag: [null],
      Private_IP_Address: [null],
      Public_IP_Address: [null],
      user_id: [null],
      username: [null],
      RegistrationType: [null]
    });
  }
  
  ngOnInit(): void {
    // Retrieve user data from localStorage
    const userData = localStorage.getItem('currentUser');
  
    // Check if user data exists
    if (userData) {
      // Parse user data from JSON and assign it to the user variable
      this.user = JSON.parse(userData);
      console.log("Data",this.user)
  
      //patch value 
      this.studentregistrationForm.patchValue({ UE_ID: this.user.eid})
  
      // Initialize formData object after user data is retrieved
      this.formData = {
        user_id: this.user.eid || '', // Assign user id if available, otherwise empty string
        username: this.user.username || '', // Assign username if available, otherwise empty string
        RegistrationType: this.user.RegistrationType || '' // Assign registration type if available, otherwise empty string
      };
  
      // Update the form with retrieved user data
      
      this.studentregistrationForm.patchValue({
        user_id: this.formData.user_id,
        username: this.formData.username,
        RegistrationType: this.formData.RegistrationType
      });
  
      console.log(this.formData.user_id); // Log user_id here
    }
  
    //for master table 

    // get data from already store 
    this.studentds.getBasicDetails(this.user.eid).subscribe(
      (response) => {
        this.studentdetails = response;
        console.log('studentdetails details:', this.studentdetails);
        
        this.studentregistrationForm.patchValue({
          Salutation_E:this.studentdetails.Salutation_E,
          Student_First_Name_E: this.studentdetails.Student_First_Name_E,
          Student_Middle_Name_E: this.studentdetails.Student_Middle_Name_E,
          Student_Last_Name_E: this.studentdetails.Student_Last_Name_E,
          Salutation_H:this.studentdetails.Salutation_H,
          Student_First_Name_H: this.studentdetails.Student_First_Name_H,
          Student_Middle_Name_H: this.studentdetails.Student_Middle_Name_H,
          Student_Last_Name_H: this.studentdetails.Student_Last_Name_H,
          Email_Id:this.studentdetails.Email_Id,
          DOB:this.studentdetails.DOB,
          Mobile_No:this.studentdetails.Mobile_No,
          Gender_Id:this.studentdetails.Gender_Id,
          Father_Name_E:this.studentdetails.Father_Name_E ,
          Mother_Name_E:this.studentdetails.Mother_Name_E,
          Father_Name_H:this.studentdetails.Father_Name_H ,
          Mother_Name_H:this.studentdetails.Mother_Name_H,
          Guardian_Name_E:this.studentdetails.Guardian_Name_E ,
          Spouse_Name_E:this.studentdetails.Spouse_Name_E,
        });

      },
      (error) => {
        console.log('Error: ', error);
      }
    );




    //get for gender
    this.studentds.getGender().subscribe(
      (response) => {
        //console.log('Raw response: ', response);
        this.genderoption = response;
        console.log('gender details:', this.genderoption);
      },
      (error) => {
        console.log('Error: ', error);
      }
    );
    
    //get for salutation_e 
    this.studentds.getSalutation_English().subscribe(
      (response) => { 
        //console.log('Raw response: ', response);
        this.salutationenglish = response;
        console.log('salutation english details: ', this.salutationenglish);
      },
      (error) => {
        console.log('Error: ', error);
      }
    );
    
    
    //get for salutation_h table
    this.studentds.getSalutation_Hindi().subscribe(
      (response) => {
       // console.log('dd',response);
        
        this.salutationhindi = response;
        console.log('salutation hindi details: ', this.salutationhindi);
      },
      (error) => {
        console.log('Error: ', error);
      }
    );

    //get for registrationtype table 
    this.studentds.getRegistrationType().subscribe(
      (response) => {
        this.registrationtype = response;
        console.log(`registration type details: `, this.registrationtype);
      },
      (error) => {
        console.log('Error: ', error);
      }
    );
    
  }
  

  onSubmit(): void {
    if (this.studentregistrationForm.valid) {
      console.log('Form Submitted!', this.studentregistrationForm.value);
      // form submission here
      const userData = this.studentregistrationForm.value
      this.studentService.postStudentDetails(userData).subscribe(
        () => {
          alert('Form submitted successfully!');
          this.studentregistrationForm.reset(); 
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
  
  onClear() {
    this.studentregistrationForm.reset();
  }
  
}

//pending work - dateformat change 
//gender id can not patch the value 