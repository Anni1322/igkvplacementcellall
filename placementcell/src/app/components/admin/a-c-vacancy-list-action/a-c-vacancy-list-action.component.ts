import { Component, OnInit } from '@angular/core';
 
import { ActivatedRoute } from '@angular/router';
import { CServiceService } from '../../company/service/c-service.service';

@Component({
  selector: 'app-a-c-vacancy-list-action',
  templateUrl: './a-c-vacancy-list-action.component.html',
  styleUrls: ['./a-c-vacancy-list-action.component.scss']
})
export class ACVacancyListActionComponent implements OnInit  {
  formData: any = {};
  constructor(
    private ds:CServiceService,
    private route: ActivatedRoute
    ){}
  formdata:any


  // vid
  vid:any
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.vid = params['id'];
      // Call your function with the vacancyId
      // this.getvacancydata("vid"+this.vid);
    });
    this.getvacancydata(this.vid)
  }




// dataget through vacancy id 
vacancydata:any;
 
getvacancydata(vid:any) {
  console.log('Vacancyis:', vid);
  this.ds.getVacancyedata(vid).subscribe(
    (response) => {
      // console.log('Raw Response:', response);
      this.vacancydata = response;
      console.log('Profile Data:', this.vacancydata);

      if (this.vacancydata) {
        console.log('Vacancy_ID:', this.vacancydata.Vacancy_ID);
        // console.log('username:', this.profiledata.username);
      } else {
        console.log('No Vacancy_ID data received.');
      }
    },
    (error) => {
      console.log('Error:', error);
    }
  );
}


  getvalueFromform(formValue: any) {
    console.log(formValue);
    // Your method logic here
    const formData = formValue; // Get form value
    console.log('Form Data:', formData);

    this.ds.updateVacancy(formData).subscribe(()=>{
      alert('Update(edit) successfully!');
    },(error) => {
      console.error('Error submitting form:', error);
    })
  };

  
 

  
  onSubmit(form: any): void {
    this.formdata = form.value;
    // alert("Form Data: " + JSON.stringify(this.formdata, null, 2));
    console.log('Form Data: ', this.formdata);
    // Handle form submission logic here
    if (form.valid) {
      this.formdata = form.value;
      console.log('Form Data:', this.formdata);
    } else {
      console.log('Form is invalid');
    }
  }

}
