import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Customer } from '../models/customers.model';

export interface ICustomerService {
  getCustomers(): Observable<Customer[]>;
}

@Injectable()
export class CustomerService implements ICustomerService {
  public baseUrl = '/api/v1/customer';

  public getCustomers(): Observable<Customer[]> {
    return of([]);
  }
}
