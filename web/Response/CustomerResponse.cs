using core.models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace web
{
    public class CustomerResponse
    {
        public List<Customer> Customers { get; set; }
        public int Total { get; set; }

        public CustomerResponse(int total, List<Customer> customers) {
            Customers = customers;
            Total = total;
        }
    }
}
