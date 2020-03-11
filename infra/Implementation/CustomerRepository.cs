using core.models;
using core.interfaces.repositories;
using System;
using System.Collections.Concurrent;
using System.Collections.Generic;

namespace infra.repositories
{
    public class CustomerRepository : ICustomerRepository
    {
        private readonly ConcurrentDictionary<string, Customer> _customers;

        public CustomerRepository()
        {
            _customers = new ConcurrentDictionary<string, Customer>(StringComparer.OrdinalIgnoreCase);
        }

        public List<Customer> GetAll() {
            throw new NotImplementedException();
        }
 
        public List<Customer> GetAllWithFilter(List<string> tags, string page)
        {
            throw new NotImplementedException();
        }
    }
}
