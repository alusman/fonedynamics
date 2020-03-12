import { Component, OnInit } from '@angular/core';
import { CustomerResult, CustomerFilter } from '../models/customer.model';
import { CustomerService } from '../services/customer.services';

@Component({
  selector: 'app-customer',
  templateUrl: 'customer.component.html',
  styleUrls: ['customer.component.scss'],
})
export class CustomerComponent implements OnInit {

  customers: CustomerResult;

  constructor(private service: CustomerService) {}

  ngOnInit() {
   this.InitializeData();
  }

  InitializeData() {
    this.service.getCustomers().subscribe(result => {
      this.customers = result;
    });
  }

  customerFilterChanged(filter: CustomerFilter) {
    if (filter.search !== '') {
      this.service.getCustomersWithFilter(filter.search, filter.pageStart, filter.pageSize).subscribe(result => {
        this.customers = result;
      });
    } else {
      this.InitializeData();
    }
  }
}
