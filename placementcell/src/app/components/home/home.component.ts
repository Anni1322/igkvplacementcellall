import { Component, OnInit } from '@angular/core';


interface SideNavToggle{
  screenWidth : number;
  collapsed: boolean;
}

interface Notification {
  Notification_ID: number;
  Vacancy_Id: string;
  Notification_Title: string;
  Notification_Description: string;
  Notification_Date: Date;
  view: String;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit  {

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  showFiller = false;

  isSideNavCollapsed = false;
  screenWidth = 0;


  onToggleSideNav(data: SideNavToggle):void{
    this.screenWidth = data.screenWidth;
    this.isSideNavCollapsed = data.collapsed
  }



  notifications: Notification[] = [
    {
      Notification_ID: 1,
      Vacancy_Id: 'VAC001',
      Notification_Title: 'Job Opening',
      Notification_Description: 'We have an exciting job opening for a software developer.',
      Notification_Date: new Date('2024-05-30'),
      view: 'pdf'
    },
    // Add more notifications here
  ];
}
