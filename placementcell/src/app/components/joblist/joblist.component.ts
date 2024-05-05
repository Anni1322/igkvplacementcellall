import { Component, OnInit } from '@angular/core';
import { JobService } from 'src/app/services/job.service';

@Component({
  selector: 'app-joblist',
  templateUrl: './joblist.component.html',
  styleUrls: ['./joblist.component.scss']
})
export class JoblistComponent {
  // jobs: any;

  // constructor(private jobService: JobService) { }

  // ngOnInit(): void {
  //   this.jobService.getJobs().subscribe((data: any[]) => {
  //     this.jobs = data;
  //   });
  // }
}
