import {Component, ViewChild, Input, AfterViewInit, OnInit} from '@angular/core';
import { Customer, CustomerResult } from 'src/app/models/customer.model';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-customer-list',
  templateUrl: 'customer-list.component.html',
  styleUrls: ['customer-list.component.scss'],
})
export class CustomerListComponent implements OnInit, AfterViewInit {
  displayedColumns = ['name'];
  dataSource: MatTableDataSource<Customer>;

  @Input() data: CustomerResult;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() {}

  ngOnInit() {
    if (!!this.data) {
      this.dataSource = new MatTableDataSource(this.data.customers);
    }
  }

  ngAfterViewInit() {
    if (!!this.data) {
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
}
