import {Component, ViewChild, Input, OnChanges, SimpleChanges, Output, EventEmitter} from '@angular/core';
import { Customer, CustomerResult, CustomerFilter } from 'src/app/models/customer.model';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

export enum PageOptionEnum {
  'FirstSet',
  'SecondSet',
  'ThirdSet',
}

@Component({
  selector: 'app-customer-list',
  templateUrl: 'customer-list.component.html',
  styleUrls: ['customer-list.component.scss'],
})
export class CustomerListComponent implements OnChanges {
  displayedColumns = ['name', 'num_Employees', 'tags'];
  dataSource: MatTableDataSource<Customer>;

  pageOptions = [
    { value: PageOptionEnum.FirstSet, displayText: '1 - 10' },
    { value: PageOptionEnum.SecondSet, displayText: '11 - 50' },
    { value: PageOptionEnum.ThirdSet, displayText: '50 +' }
  ];

  pageValue = PageOptionEnum.FirstSet;
  pageStart = 0;
  pageSize = 10;
  filterValue = '';

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

  applyFilter() {
    this.setPagingValues();
    const filter = { search: this.filterValue, pageSize: this.pageSize, pageStart: this.pageStart };
    this.filterChanged.emit(filter);
  }

  pageSelectionChanged() {
    this.applyFilter();
  }

  setPagingValues() {
    switch (this.pageValue) {
      case PageOptionEnum.FirstSet:
        this.pageStart = 0;
        this.pageSize = 10;
        break;
      case PageOptionEnum.SecondSet:
        this.pageStart = 11;
        this.pageSize = 50;
        break;
      default:
        this.pageStart = 50;
        this.pageSize = -1;
    }
  }
}
