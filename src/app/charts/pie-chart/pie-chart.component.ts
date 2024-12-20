import { Component } from '@angular/core';
import { ChartOptions } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-pie-chart',
  imports: [BaseChartDirective],
  templateUrl: './pie-chart.component.html',
  styleUrl: './pie-chart.component.css',
})
export class PieChartComponent {
  pieChartData = [
    { data: [350, 450, 120] }, // Wrap the data array inside an object
  ];
  pieChartColors: any[];
  pieChartLabels: string[];
  pieChartOptions: ChartOptions = {
    maintainAspectRatio: false,
    responsive: true,
  };

  constructor() {
    this.pieChartColors = [
      {
        backgroundColor: ['#F7464A', '#46BFBD', '#FDB45C'],
      },
    ];
    this.pieChartLabels = ['XYZ', 'ABC', 'DEF'];
  }
}