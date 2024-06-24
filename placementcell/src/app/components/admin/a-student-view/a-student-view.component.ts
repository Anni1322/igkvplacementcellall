import { Component, OnInit } from '@angular/core';
import { AdminService } from '../service/admin.service';

@Component({
  selector: 'app-a-student-view',
  templateUrl: './a-student-view.component.html',
  styleUrls: ['./a-student-view.component.scss']
})
export class AStudentViewComponent implements OnInit{
  displayedColumns: string[] = ['position', 'UE_Id', 'Student_First_Name_E', 'DOB', 'Gender_Id', 'Mobile_No', 'Email_Id', 'Father_Name_E', 'Mother_Name_E', 'Gaurdian_Name_E'];
  dataSource: any[] = [];

  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
    this.adminService.getAllStudents().subscribe(data => {
      this.dataSource = data;
    });
  }

}
