import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-s-status',
  templateUrl: './s-status.component.html',
  styleUrls: ['./s-status.component.scss']
})
export class SStatusComponent implements OnInit{
  vacancyApplications: any;
  studentId:any;

  constructor(
    private applyVacancy:StudentService,
    private route:ActivatedRoute
    ){}

  ngOnInit(): void {
       // get id form param
      this.studentId = this.route.snapshot.paramMap.get('id')!;
      console.log("from routerid ",this.studentId);
      this.sendstudentid(this.studentId);
}


sendstudentid(eid:any){
  this.applyVacancy.VacancyApplicationStudentDetail(eid).subscribe(
    (response) => {
      // console.log('Raw Response:', response);
      this.vacancyApplications = response;
      console.log('student application details:', this.vacancyApplications);

      if (this.vacancyApplications) {
        console.log('Vacancy_ID:', this.vacancyApplications.Vacancy_ID);
   
      } else {
        console.log('No eid  data received.');
      }
    },
    (error) => {
      console.log('Error:', error);
    })
  }
}
