import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { Customer } from '../models/customer.model';
import { HttpClient } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';

export interface ICustomerService {
  getCustomers(): Observable<Customer[]>;
}

@Injectable()
export class CustomerService implements ICustomerService {
  public baseUrl = '/api/v1/customer';

  constructor(private http: HttpClient) {}

  public getCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(`${this.baseUrl}`).pipe(tap(res => {
      console.log(res);
    }),
      catchError((error: Response) => {
        return throwError(error);
      }));
  }

  public getCustomersWithFilter(tags: string, page: string): Observable<Customer[]> {
    return this.http.get<Customer[]>(`${this.baseUrl}/${tags}/${page}`).pipe(tap(),
      catchError((error: Response) => {
        return throwError(error);
      }));
  }
}
