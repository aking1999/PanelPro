import { Component } from '@angular/core';
import { ChartOptions } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-bar-chart',
  imports: [BaseChartDirective],
  templateUrl: './bar-chart.component.html',
  styleUrl: './bar-chart.component.css',
})
export class BarChartComponent {
  barChartData: any[];
  barChartLabels: string[];
  barChartOptions: ChartOptions = {
    responsive: true,
  };
  sample: any[] = [
    {
      data: [65, 59, 80, 81, 56, 55, 40],
      label: 'Series A',
    },
    {
      data: [28, 48, 40, 19, 86, 27, 90],
      label: 'Series B',
    }
  ];

  labels: string[] = ['W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7'];

  constructor() {
    this.barChartData = this.sample;
    this.barChartLabels = this.labels;
  }
}
