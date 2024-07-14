import { Component, OnInit } from '@angular/core';
import { AdminService } from '../service/admin.service';

@Component({
  selector: 'app-a-company-view',
  templateUrl: './a-company-view.component.html',
  styleUrls: ['./a-company-view.component.scss']
})
export class ACompanyViewComponent implements OnInit{
  displayedColumns: string[] = [
    'position', 'Company_Id', 'Company_Registration_No', 'Company_Name', 
    'Company_Email', 'Company_Phone_Number','Hr_Name', 'Hr_Contact_No',
    'Hr_Email', 'Address', 'Website'
  ];
  dataSource: any[] = [];

  constructor(private adminservice: AdminService) { }

  ngOnInit(): void {
    this.adminservice.getAllCompany().subscribe(data => {
      this.dataSource = data;
      console.log(data);
    });
  }
}
