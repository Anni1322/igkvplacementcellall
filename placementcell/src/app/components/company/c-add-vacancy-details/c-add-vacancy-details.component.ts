import { Component } from '@angular/core';
import { CServiceService } from '../service/c-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-c-add-vacancy-details',
  templateUrl: './c-add-vacancy-details.component.html',
  styleUrls: ['./c-add-vacancy-details.component.scss']
})
export class CAddVacancyDetailsComponent {
  // formData: any = {};
  formData: FormGroup;
  companayid:any;
  vancancydata:any;

  constructor(private ds:CServiceService, private fb: FormBuilder, private router: Router){
    this.formData = this.fb.group({
      Vacancy_ID: ['', Validators.required],
      Company_Id: ['', Validators.required],
      Company_Registration_No: ['', Validators.required],
      Job_Title: [''],
      Job_Description: [''],
      Job_Selection: [''],
      Job_Location: [''],
      No_Of_Post: [null],
      Salary: [''],
      Last_Date_for_apply: [null],
      Min_Experience_in_Year: [null],
      Maximum_Age: [null],
      Preferred_Gender: [''],
      Prefered_Language: [''],
      Status: ['Pending'],
      Created_Date: [new Date()]
    });





       // Retrieve user data from localStorage
       const companayData = localStorage.getItem('currentUser');
       // Check if vacacnyData data exists
       if (companayData) {
         // Parse vacacnyData data from JSON and assign it to the vacacnyData variable
         this.companayid = JSON.parse(companayData);
         // console.log("Data",this.vacacnyid.eid)
         this.formData.patchValue({
          Company_Id: this.companayid.eid,
          Company_Registration_No: this.companayid.eid
        
        })
       }
  }
  


 


  getvalueFromform() {
    if (this.formData.valid) {
      const formAllData = this.formData.value;
      console.log(this.formData.value);
      
      this.ds.postVacancies(formAllData).subscribe((Response)=>{
        this.vancancydata = Response
        console.log(this.vancancydata);
        alert(this.vancancydata.message);
        this.vancancydata.reset();
        this.router.navigate(['/company/c-status']); //redirect the page after successfully submitted 
      },(error) => {
        console.error('Error submitting form:', error);
      })
    }
  }
  

  
  }

 //reset and page navigation can not working s