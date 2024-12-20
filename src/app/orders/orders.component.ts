import { CurrencyPipe, DatePipe, NgClass, NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Order } from '../shared/models/order.model';

@Component({
  selector: 'app-orders',
  imports: [NgFor, NgClass, CurrencyPipe, DatePipe],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.css',
})
export class OrdersComponent implements OnInit {
  orders: Order[] = [];

  ngOnInit(): void {
    this.orders = [
      {
        id: '1',
        customer: {
          id: '1',
          name: 'John Doe',
          email: 'w2dQI@example.com',
          country: 'United States',
        },
        total: 100,
        placed: new Date(),
        fulfilled: new Date(),
        status: 'pending',
      },
      {
        id: '2',
        customer: {
          id: '2',
          name: 'Jane Doe',
          email: 'qBq7d@example.com',
          country: 'United States',
        },
        total: 200,
        placed: new Date(),
        fulfilled: new Date(),
        status: 'fulfilled',
      },
      {
        id: '3',
        customer: {
          id: '3',
          name: 'John Doe',
          email: 'w2dQI@example.com',
          country: 'United States',
        },
        total: 300,
        placed: new Date(),
        fulfilled: new Date(),
        status: 'cancelled',
      },
    ];
  }
}
