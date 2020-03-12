export interface Customer {
  id: string;
  num_employees: number;
  name: string;
  tags: string[];
}

export interface CustomerResult {
  customers: Customer[];
  total: number;
}

export interface CustomerFilter {
  search: string;
  pageSize: number;
  pageStart: number;
}
