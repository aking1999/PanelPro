import { Component } from '@angular/core';
import { ChartOptions } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-line-chart',
  imports: [BaseChartDirective],
  templateUrl: './line-chart.component.html',
  styleUrl: './line-chart.component.css',
})
export class LineChartComponent {
  lineChartData: any[];
  lineChartLabels: string[];
  lineChartColors: any[];
  lineChartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
  };
  sample: any[] = [
    {
      data: [60, 59, 80, 81, 56, 55, 40],
      label: 'Sentiment Analysis',
    },
    {
      data: [28, 48, 40, 19, 86, 27, 90],
      label: 'Image Recognition',
    },
    {
      data: [20, 48, 70, 90, 90, 27, 40],
      label: 'Forecasting',
    },
  ];

  labels: string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'];

  constructor() {
    this.lineChartData = this.sample;
    this.lineChartLabels = this.labels;
  }
}
