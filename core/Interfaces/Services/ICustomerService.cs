using core.models;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace core.interfaces.services
{
    public interface ICustomerService
    {
        List<Customer> GetAll();
        Tuple<int, List<Customer>> GetAllWithFilter(string search, int pageStart, int pageSize);
    }
}
