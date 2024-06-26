import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-a-dashboard',
  templateUrl: './a-dashboard.component.html',
  styleUrls: ['./a-dashboard.component.scss']
})
export class ADashboardComponent implements OnInit {

  labeldata = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  realdata = [65, 59, 80, 81, 56, 55, 40];
  colordata = ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(255, 159, 64, 0.2)'];
  barChart: any;

  constructor() { }

  ngOnInit() {
  
  }

 

}
