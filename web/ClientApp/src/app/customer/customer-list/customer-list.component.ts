import {Component, ViewChild, Input, OnChanges, SimpleChanges, Output, EventEmitter} from '@angular/core';
import { Customer, CustomerResult, CustomerFilter } from 'src/app/models/customer.model';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-customer-list',
  templateUrl: 'customer-list.component.html',
  styleUrls: ['customer-list.component.scss'],
})
export class CustomerListComponent implements OnChanges {
  displayedColumns = ['name', 'num_Employees', 'tags'];
  dataSource: MatTableDataSource<Customer>;

  pageStart = 0;
  pageSize = 10;

  @Input() data: CustomerResult;
  @Output() filterChanged = new EventEmitter<CustomerFilter>();

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes.data) {
      if (!!this.data) {
        this.dataSource = new MatTableDataSource(this.data.customers);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      }
    }
  }

  applyFilter(filterValue: string) {
    const filter = { search: filterValue, pageSize: this.pageSize, pageStart: this.pageStart };
    this.filterChanged.emit(filter);
  }
}
