import { Component, OnInit } from '@angular/core';
import { CServiceService } from '../service/c-service.service';
import { FormBuilder, FormGroup , Validators} from '@angular/forms';

@Component({
  selector: 'app-c-basic-details',
  templateUrl: './c-basic-details.component.html',
  styleUrls: ['./c-basic-details.component.scss']
})
export class CBasicDetailsComponent implements OnInit{
  companyregistrationForm! : FormGroup;
  companytype: any;
  companycategory: any;
  state: any;
  district: any;
  block: any;


  constructor(
    private fb: FormBuilder,
    private CServices : CServiceService,
    private companyds: CServiceService,
  ) {}

  ngOnInit(): void {
    this.companyregistrationForm = this.fb.group({
      Company_Id: [null],
      Company_Registration_No: [null],
      Tnp_Registration_No: [null],
      Company_Name: [null],
      Company_Type: [null],
      Company_Category: [null],
      Company_Email: [null],
      Company_Phone_Number: [null],
      Hr_Name: [null],
      Hr_Contact_No: [null],
      Hr_Email: [null],
      Contact_Person: [null],
      Contact_Person_Email: [null],
      Contact_Person_Phone: [null],
      Company_Short_Name: [null],
      Address: [null],
      State: [null],
      District: [null],
      Block: [null],
      Website: [null],
      Company_Logo_Url: [null],
      Company_Logo: [null],
      Company_Broucher: [null],
      Company_Other_Doc_Url: [null],
      Created_By: [null],
      Created_Date: [null],
      Modified_By: [null],
      Modified_Date: [null],
      Delete_Flag: [null],
      Public_IP_Address: [null],
      Private_IP_Address: [null]
    });
    
  //get for company category field
  this.companyds.getcompany_category().subscribe(
    (response) => {
       //console.log('Raw response: ', response);
      this.companycategory = response;
      console.log('Company category details: ', this.companycategory);
    },
    (error) => {
      console.log('Error: ', error);
    }
  );

  //get for company type field
  this.companyds.getcompany_type().subscribe(
    (response) => {
       //console.log('Raw response: ', response);
      this.companytype = response;
      console.log('Company type details: ', this.companytype);
    },
    (error) => {
      console.log('Error: ', error);
    }
  );
 
  //get for state field 
  this.companyds.getstate().subscribe(
    (response) => {
      //console.log('Raw Response: ', response);
      this.state = response;
      console.log('state details: ', this.state);
    },
    (error) => {
      console.log('Error: ', error);
    }
  );

  //get for district field
  this.companyds.getdistrict().subscribe(
    (response) => {
      //console.log('Raw Response: ;, response);
      this.district = response;
      console.log('district details: ', this.district);
    },
    (error) => {
      console.log('Error: ', error);
    }
  );

  //get for block field 
  this.companyds.getblock().subscribe(
    (response) => {
      //console.log('Raw responsse: ', response);
      this.block = response;
      console.log('block details: ', this.block);
    },
    (error) => {
      console.log('Error: ', error);
    }
  );
       

  }

//for formcontrolName data collect to the database 
//  getvalueFromform(formValue: any) {
//    console.log('Form Data:', formValue);
//    this.CServices.postCompanyDetails(formValue).subscribe(
//      () => {
//        alert('Form submitted successfully!');
//        this.companyregistrationForm.reset(); // Reset the form after successful submission
//      },
//      (error) => {
//        console.error('Error submitting form:', error);
        // Display a more user-friendly message 
//        alert('An error occurred while submitting the form. Please try again later.');
        // Optionally, handle specific error scenarios based on status code
//        if (error.status === 500) {
//          console.error('Internal Server Error: Please contact support.');
//        } else {
//          console.error(`Error: ${error.message}`);
//        }
//      }
//    );
//  }
 
//  onSubmit() {
//    if (this.companyregistrationForm.valid) {
//      this.getvalueFromform(this.companyregistrationForm.value);
 //   } else {
//      console.log('Form is not valid');
//    }
//  }
  
//for submit the form 
onSubmit(): void {
  if (this.companyregistrationForm.valid) {
    console.log('Form Submitted!', this.companyregistrationForm.value);
    // form submission here
    const userData = this.companyregistrationForm.value
    this.CServices.postCompanyDetails(userData).subscribe(
      () => {
        alert('Form submitted successfully!');
        this.companyregistrationForm.reset(); 
      },
      (error) => {
        console.error('Error submitting form:', error);
        // Display a more user-friendly message
        alert('An error occurred while submitting the form. Please try again later.');
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

// on clear the form details
  onClear() {
    this.companyregistrationForm.reset();
  }


}




 // formData: any = {};
//  constructor(private ds:CServiceService){}
//  formdata:any


//  getvalueFromform(formValue: any) {
//    console.log(formValue);
    // Your method logic here
//    const formData = formValue; // Get form value
//    console.log('Form Data:', formData);

//    this.ds.postVacancies(formData).subscribe(()=>{
//      alert('Form submitted successfully!');
//    },(error) => {
//      console.error('Error submitting form:', error);
//    })
//  };

//companyregistrationForm! : FormGroup;

