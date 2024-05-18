import { Component } from '@angular/core';
import { CServiceService } from '../service/c-service.service';

@Component({
  selector: 'app-c-add-vacancy-details',
  templateUrl: './c-add-vacancy-details.component.html',
  styleUrls: ['./c-add-vacancy-details.component.scss']
})
export class CAddVacancyDetailsComponent {
  formData: any = {};
  constructor(private ds:CServiceService){}
  formdata:any


  getvalueFromform(formValue: any) {
    console.log(formValue);
    // Your method logic here
    const formData = formValue; // Get form value
    console.log('Form Data:', formData);

    this.ds.postVacancies(formData).subscribe(()=>{
      alert('Form submitted successfully!');
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

 