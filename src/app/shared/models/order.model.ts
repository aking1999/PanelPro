import { Customer } from './customer.model';

export interface Order {
  id: string;
  customer: Customer;
  total: number;
  placed: Date;
  fulfilled: Date;
  status: 'pending' | 'fulfilled' | 'cancelled';
}
