import { Component , OnInit} from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';


import {Chart,registerables,ChartConfiguration, ChartTypeRegistry } from 'node_modules/chart.js'
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';

@Component({
  selector: 'app-a-dashb',
  templateUrl: './a-dashb.component.html',
  styleUrls: ['./a-dashb.component.scss']
})
export class ADashbComponent implements OnInit  {



  captchaForm: FormGroup;
  captchaText: string = '';
  isVerified: boolean | null = null; // Use null to represent the initial state
  submitted: boolean = false; // Track form submission
  captchaUsed: boolean = false; // Track if captcha has been used

   constructor(private fb: FormBuilder) {
    this.captchaForm = this.fb.group({
      // userInput: ['', [Validators.required, this.captchaValidator.bind(this)]]
    });
  }

  ngOnInit() {
    // this.generateCaptcha();
    // this.renderLineChart();
    // this.renderChart();
    // this.getCountSeed();
    // this.renderHistogramChart();
    // this.handleDateClick(arg);
  }
TotalSeed:number|undefined;
TotalFertilzer:number|undefined;
TotalPestiside:number |undefined;
private chart: Chart<'pie', number[], string> | undefined;
getCountSeed() {
 
    this.TotalSeed = 0;
    this.TotalFertilzer = 0;
    this.TotalPestiside = 0;

    console.log(this.TotalSeed);
    console.log(this.TotalFertilzer);
    console.log(this.TotalPestiside);
   
  ;
}
totalSeedValue:number |undefined;
totalFertlizerValue:number | undefined;
totalPestisideValue:number | undefined;

renderChart(): void {
  this.totalSeedValue = this.TotalSeed ?? 0;
  this.totalFertlizerValue = this.TotalFertilzer ?? 0;
  this.totalPestisideValue = this.TotalPestiside ?? 0;

  const data = {
    labels: [
      'SEED',
      'FERTILIZER',
      'PESTICIDE'
    ],
    datasets: [{
      label: 'AGRI LICENSE',
      data: [this.totalSeedValue, this.totalFertlizerValue, this.totalPestisideValue],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)'
      ],
      hoverOffset: 4
    }]
  };

  const config: ChartConfiguration<'pie', number[], string> = {
    type: 'pie',
    data: data,
    options: {
      responsive: true,
      plugins: {
        legend: {
          labels: {
            font: {
              size: 18,// Adjust the font size here
              weight: 'normal' // Adjust the font weight here
            },
            padding: 5, // Adjust padding to control spacing
            boxWidth: 10 
          }
        }
      }
    }
  };

  const canvas = document.getElementById('data') as HTMLCanvasElement;
  const ctx = canvas?.getContext('2d');

  if (ctx) {
    // Destroy the existing chart instance if it exists
    if (this.chart) {
      this.chart.destroy();
    }
    // Create a new chart instance and store it in this.chart
    this.chart = new Chart(ctx, config);
  } else {
    console.error('Failed to get canvas context');
  }
}



renderLineChart(): void {
  const dataLine: ChartConfiguration<'line'> = {
    type: 'line',
    data: {
      labels: ["January", "February", "March", "April", "May", "June", "July"],
      datasets: [{
          label: "My First dataset",
          data: [65, 59, 80, 81, 56, 55, 40],
          backgroundColor: 'rgba(105, 0, 132, .2)',
          fill: true,
          borderColor: 'rgba(255, 99, 132, 0.8)',
          borderWidth: 2,
          tension: 0.4
        },
        {
          label: "My Second dataset",
          data: [28, 48, 40, 19, 86, 27, 90],
          backgroundColor: 'rgba(0, 137, 132, .2)',
          fill: true,
          borderColor: 'rgba(50, 150, 255, 1)',
          borderWidth: 2,
          tension: 0.4
        }
      ]
    },
    options: {
      responsive: true
    }
  };

  const ctx = document.getElementById('line-chart') as HTMLCanvasElement;
  new Chart(ctx, dataLine);
}

calendarOptions: CalendarOptions = {
  plugins: [dayGridPlugin, interactionPlugin],
  initialView: 'dayGridMonth',
  headerToolbar: {
    left: 'prev,next today',
    center: 'title',
    right: 'dayGridMonth,timeGridWeek,timeGridDay'
  },
  views: {
    dayGridMonth: {
      titleFormat: { year: 'numeric', month: 'short' }
    },
    timeGridWeek: {
      titleFormat: { year: 'numeric', month: 'short', day: 'numeric' }
    },
    timeGridDay: {
      titleFormat: { year: 'numeric', month: 'short', day: 'numeric' }
    }
  },
  dateClick: this.handleDateClick.bind(this),
  events: [
    { title: 'Event 1', date: '2024-07-01' },
    { title: 'Event 2', date: '2024-07-02' }
    // Add more events as needed
  ]
};
handleDateClick(arg: any) {
  alert('date click! ' + arg.dateStr);
}

// Chart
Linechart: Chart<'bar', number[], string> | undefined;
renderHistogramChart(): void {
  const data = {
    labels: ["Seed", "Fertilizer", "Pesticide"],
    datasets: [
      {
        label: "Usage in KG",
        data: [50, 80, 30],
        backgroundColor: [
          'rgba(255, 99, 132, 0.5)',
          'rgba(54, 162, 235, 0.5)',
          'rgba(255, 205, 86, 0.5)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 205, 86, 1)'
        ],
        borderWidth: 1
      }
    ]
  };

  const config: ChartConfiguration<'bar', number[], string> = {
    type: 'bar',
    data: data,
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  };

  const ctx = document.getElementById('myChart') as HTMLCanvasElement | null;
  if (ctx) {
    this.Linechart = new Chart(ctx, config);
  }
}
}