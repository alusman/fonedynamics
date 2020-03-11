using core.models;
using core.repositories;
using System;
using System.Collections.Concurrent;
using System.Collections.Generic;

namespace infra
{
    public class CustomerRepository : ICustomerRepository
    {
        private readonly ConcurrentDictionary<string, Customer> _customers;

        public CustomerRepository()
        {
            _customers = new ConcurrentDictionary<string, Customer>(StringComparer.OrdinalIgnoreCase);
        }

        public IEnumerable<Customer> GetAll() {
            throw new NotImplementedException();
        }
 
        public IEnumerable<Customer> GetAllWithFilters(List<string> tags, string page)
        {
            throw new NotImplementedException();
        }
    }
}
