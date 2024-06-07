import { Component, OnInit } from '@angular/core';
import { CServiceService } from '../service/c-service.service';
import { FormBuilder, FormControl, FormGroup , Validators} from '@angular/forms';

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
      Id: ['', Validators.required],
      Company_Id: ['', Validators.required],
      Company_Registration_No: ['', Validators.required],
      Tnp_Registration_No: ['', Validators.required],
      Company_Name: ['', Validators.required],
      Company_Type: ['', Validators.required],
      Company_Category: ['', Validators.required],
      Company_Email: ['', [Validators.required, Validators.email]],
      Company_Phone_Number: ['', Validators.required],
      Hr_Name: ['', Validators.required],
      Hr_Contact_No: ['', Validators.required],
      Hr_Email: ['', [Validators.required, Validators.email]],
      Contact_Person: ['', Validators.required],
      Contact_Person_Email: ['', [Validators.required, Validators.email]],
      Contact_Person_Phone: ['', Validators.required],
      Company_Short_Name: ['', Validators.required],
      Address: ['', Validators.required],
      State: ['', Validators.required],
      District: ['', Validators.required],
      Block: ['', Validators.required],
      Website: ['', Validators.required],
      Company_Logo_Url: ['', Validators.required],
      Company_Logo: ['', Validators.required],
      Company_Broucher: ['', Validators.required],
      Company_Other_Doc_Url: ['', Validators.required],
      Created_By: ['', Validators.required],
      Created_Date: ['', Validators.required],
      Modified_By: ['', Validators.required],
      Modified_Date: ['', Validators.required],
      Delete_Flag: ['', Validators.required],
      Public_IP_Address: ['', Validators.required],
      Private_IP_Address: ['', Validators.required]
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
  getvalueFromform(formValue: any) {
    console.log('Form Data:', formValue);
    this.CServices.postCompanyDetails(formValue).subscribe(
      () => {
        alert('Form submitted successfully!');
        this.companyregistrationForm.reset(); // Reset the form after successful submission
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
 
  onSubmit() {
    if (this.companyregistrationForm.valid) {
      this.getvalueFromform(this.companyregistrationForm.value);
    } else {
      console.log('Form is not valid');
    }
  }
  
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

