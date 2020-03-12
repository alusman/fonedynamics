using core.models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace web
{
    public class CustomerResponse
    {
        List<Customer> Customers { get; set; }
        int Total { get; set; }

        public CustomerResponse(int total, List<Customer> customers) {
            Customers = customers;
            Total = total;
        }
    }
}
