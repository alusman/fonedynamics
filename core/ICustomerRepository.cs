using core.models;
using System;
using System.Collections.Generic;
using System.Text;

namespace core.repositories
{
    public interface ICustomerRepository
    {
        IEnumerable<Customer> GetAll();
        IEnumerable<Customer> GetAllWithFilters(List<string> tags, string page);
    }
}
