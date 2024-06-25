import { Component, OnInit } from '@angular/core';
import { CServiceService } from '../service/c-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Route } from '@angular/router';

@Component({
  selector: 'app-c-basic-details',
  templateUrl: './c-basic-details.component.html',
  styleUrls: ['./c-basic-details.component.scss'],
})
export class CBasicDetailsComponent implements OnInit {
  companyregistrationForm!: FormGroup;
  companytype: any;
  companycategory: any;
  state: any;
  district: any;
  block: any;
  companyid: any;
  companydata: any;

  selectedFile: File | null = null;


  companyLogo!: File;
  companyBroucher!: File;
  companyOtherDoc!: File;

  constructor(
    private fb: FormBuilder,
    private CServices: CServiceService,
    private companyds: CServiceService
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
      Company_Logo_Url: [''],
      Company_Logo: [''],
      Company_Broucher: [''],
      Company_Other_Doc_Url: [''],

      Created_By: [new Date()],
      Created_Date: [new Date()],
      Modified_By: [null],
      Modified_Date: [null],
      Delete_Flag: [null],
      Public_IP_Address: [null],
      Private_IP_Address: [null],
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

    // for id binding
    const userData = localStorage.getItem('currentUser');
    // Check if user data exists
    if (userData) {
      // Parse user data from JSON and assign it to the user variable
      this.companyid = JSON.parse(userData);
      console.log('Data', this.companyid);

      //patch value
      this.companyregistrationForm.patchValue({
        Company_Id: this.companyid.eid,
        //  Company_Name: this.companyid.name,
      });
    }

    this.getCompanydata(this.companyid.eid);
  }

  onFileSelected(event: any, type: string) {
    switch (type) {
      case 'Company_Logo_Url':
        this.companyLogo = event.target.files[0];
        console.log(this.companyLogo)
        this.companyregistrationForm.patchValue({
          Company_Logo: this.companyLogo,
        });
        break;
      case 'Company_Broucher':
        this.companyBroucher = event.target.files[0];
        console.log(this.companyBroucher)
        // this.companyregistrationForm.patchValue({
        //   Company_Logo: this.companyLogo,
        // });
        break;
      case 'Company_Other_Doc_Url':
        this.companyOtherDoc = event.target.files[0];
        console.log(this.companyOtherDoc)
        break;
    }
  }

  
  


  //for submit the form
  onSubmit(): void {
    if (this.companyregistrationForm.valid) {
      console.log('Form Submitted!', this.companyregistrationForm.value);
  
      
      
      // console.log('Company Logo:', this.companyLogo);
      // console.log('Company Broucher:', this.companyBroucher);
      // console.log('Company Other Doc:', this.companyOtherDoc);

      // this.companyregistrationForm.patchValue({
      //   Company_Logo: this.companyLogo,
      //   Company_Broucher: this.companyBroucher,
      //   Company_Other_Doc_Url: this.companyBroucher
      // });

       


      const userData = this.companyregistrationForm.value;

      console.log("now",userData);

      // const formData = new FormData();
      // formData.append('companyLogo', this.companyLogo);
      // formData.append('companyBroucher', this.companyBroucher);
      // formData.append('companyOtherDoc', this.companyOtherDoc);
      // console.log('companyOtherDoc', userData.companyLogo);





    
      // Post formData to your service
      this.CServices.postCompanyDetails(userData).subscribe(
        () => {
          alert('Form submitted successfully!');
          this.companyregistrationForm.reset();
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
  }
  





  // on clear the form details
  onClear() {
    this.companyregistrationForm.reset();
  }

 



  

  getCompanydata(cid: any) {
    console.log('cID:', cid);
    this.companyds.getCompanyDetails(cid).subscribe(
      (response) => {
        // console.log('Raw Response:', response);
        this.companydata = response;
        console.log('companydata Details:', this.companydata);

        //patch value
        this.companyregistrationForm.patchValue({
          // Company_Id: this.companydata.Company_Id,
          Company_Registration_No: this.companydata.Company_Registration_No,
          Tnp_Registration_No: this.companydata.Tnp_Registration_No,
          Company_Name: this.companydata.Company_Name,
          Company_Type: this.companydata.Company_Type,
          Company_Category: this.companydata.Company_Category,
          Company_Email: this.companydata.Company_Email,
          Company_Phone_Number: this.companydata.Company_Phone_Number,
          Hr_Name: this.companydata.Hr_Name,
          Hr_Contact_No: this.companydata.Hr_Contact_No,
          Hr_Email: this.companydata.Hr_Email,
          Contact_Person: this.companydata.Contact_Person,
          Contact_Person_Email: this.companydata.Contact_Person_Email,
          Contact_Person_Phone: this.companydata.Contact_Person_Phone,
          Company_Short_Name: this.companydata.Company_Short_Name,
          Address: this.companydata.Address,
          State: this.companydata.State,
          District: this.companydata.District,
          Block: this.companydata.Block,
          Website: this.companydata.Website,
          Company_Logo_Url: this.companydata.Company_Logo_Url,
          Company_Logo: this.companydata.Company_Logo,
          Company_Broucher: this.companydata.Company_Broucher,
          Company_Other_Doc_Url: this.companydata.Company_Other_Doc_Url,
        });
      },
      (error) => {
        console.log('Error:', error);
      }
    );
  }
}
