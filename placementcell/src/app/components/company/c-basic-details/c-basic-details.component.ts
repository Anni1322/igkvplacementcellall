import { Component } from '@angular/core';
import { CServiceService } from '../service/c-service.service';

@Component({
  selector: 'app-c-basic-details',
  templateUrl: './c-basic-details.component.html',
  styleUrls: ['./c-basic-details.component.scss']
})
export class CBasicDetailsComponent {

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
}
