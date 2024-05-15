import { Component } from '@angular/core';

@Component({
  selector: 'app-s-joblist',
  templateUrl: './s-joblist.component.html',
  styleUrls: ['./s-joblist.component.scss']
})
export class SJoblistComponent {
  jobs = [
    { title: 'Frontend Developer', company: 'ABC Inc.', location: 'New York', date: 'May 10, 2024' },
    { title: 'Backend Developer', company: 'XYZ Ltd.', location: 'San Francisco', date: 'May 12, 2024' },
    { title: 'UI/UX Designer', company: '123 Corp.', location: 'London', date: 'May 15, 2024' },
    // Add more sample job data here
  ];
  
}
