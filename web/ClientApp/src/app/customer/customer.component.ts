import { Component, OnInit } from '@angular/core';
import { Customer } from '../models/customer.model';
import { CustomerService } from '../services/customer.services';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-customer',
  templateUrl: 'customer.component.html',
  styleUrls: ['customer.component.scss'],
})
export class CustomerComponent implements OnInit {

  customers: Customer[] = [];

  constructor(private service: CustomerService) {}

  ngOnInit() {
    this.service.getCustomers().pipe(tap(result => {
      this.customers = result;
      console.log(this.customers);
    }));
  }
}
