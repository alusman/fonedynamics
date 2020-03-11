import { Component } from '@angular/core';
import { Customer } from '../models/customers.model';

@Component({
  selector: 'app-customer',
  templateUrl: 'customer.component.html',
  styleUrls: ['customer.component.scss'],
})
export class CustomerComponent {

  customers: Customer[] = [];

  constructor() {}
}
