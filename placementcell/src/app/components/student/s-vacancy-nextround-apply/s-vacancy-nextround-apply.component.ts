import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { CServiceService } from '../../company/service/c-service.service';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from 'src/app/services/student.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-s-vacancy-nextround-apply',
  templateUrl: './s-vacancy-nextround-apply.component.html',
  styleUrls: ['./s-vacancy-nextround-apply.component.scss']
})
export class SVacancyNextroundApplyComponent implements OnInit {
  vacancyApplydata!:FormGroup;
  selectedFile: File | null = null;


  Student_ID :any;
  vid:any; usereid:any;

  // dataget through vacancy id 
  vacancydata:any;
  studentdetails:any;

  constructor(
    private fb: FormBuilder, 
    private http: HttpClient,
    private auth: AuthService,
    private companyds:CServiceService,
    private route: ActivatedRoute,
    private studentds: StudentService,
    ) {

 
    }
 
  ngOnInit() {
    this.vacancyApplydata = this.fb.group({
      Company_ID: ['', Validators.required],
      Student_ID: [''],
      Vacancy_ID: [''],
      Application_Submission_Date: [''],
      Full_Name: [''],
      Fathers_Name: [''],
      Job_Title: [''],
      Mobile: [''],
      Email: [''],
      Status: ['pending']
    });


  }
  

  onSubmit() {
    if (this.vacancyApplydata.valid) {
      const formData = new FormData();
      console.log(this.vacancyApplydata.value)
 

      console.log("this is data ",formData)     
    }

}




 
}
