import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { CustomerResult } from '../models/customer.model';
import { HttpClient } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';

export interface ICustomerService {
  getCustomers(): Observable<CustomerResult>;
}

@Injectable()
export class CustomerService implements ICustomerService {
  public baseUrl = '/api/v1/customer';

  constructor(private http: HttpClient) {}

  public getCustomers(): Observable<CustomerResult> {
    return this.http.get<CustomerResult>(`${this.baseUrl}`).pipe(tap(),
      catchError((error: Response) => {
        return throwError(error);
      }));
  }

  public getCustomersWithFilter(pageStart: number, pageSize: number, search: string): Observable<CustomerResult> {
    return this.http.get<CustomerResult>(`${this.baseUrl}/${pageStart}/${pageSize}/${search}`).pipe(tap(),
      catchError((error: Response) => {
        return throwError(error);
      }));
  }
}
