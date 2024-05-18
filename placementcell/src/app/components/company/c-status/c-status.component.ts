import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CServiceService } from '../service/c-service.service';

@Component({
  selector: 'app-c-status',
  templateUrl: './c-status.component.html',
  styleUrls: ['./c-status.component.scss']
})
 
  
export class CStatusComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['id', 'jobTitle', 'companyName', 'jobLocation', 'jobType', 'status', 'edit'];
  // dataSource = new MatTableDataSource<JobStatus>(JOB_DATA);
  dataSource = new MatTableDataSource<JobStatus>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  constructor(private vacancyService: CServiceService) {}
 
  ngOnInit() {
    this.vacancyService.getVacancies().subscribe(data => {
      this.dataSource.data = data;
    });
  }



  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }




  printTable() {
    const printContent = document.getElementById('print-section');
    const WindowPrt = window.open('', '', 'width=900,height=650');
    WindowPrt!.document.write(printContent!.outerHTML);
    WindowPrt!.document.close();
    WindowPrt!.focus();
    WindowPrt!.print();
    WindowPrt!.close();
  }



}

 


// for data
export interface JobStatus {
  id: number;
  Vacancy_ID: string;
  Company_Id: string;
  Company_Registration_No: string;
  Job_Title: string;
  Job_Description: string;
  Job_Selection: string;
  Job_Location: string;
  No_Of_Post: number;
  Salary: string;
  Last_Date_for_apply: Date;
  Min_Experience_in_Year: number;
  Maximum_Age: number;
  Preferred_Gender: string;
  Prefered_Language: string;
  Status: string;
  Created_By: string;
  Created_Date: Date;
  Modified_By: string;
  Modified_Date: Date;
  Delete_Flag: string;
  Public_IP_Address: string;
  Private_IP_Address: string;
}

