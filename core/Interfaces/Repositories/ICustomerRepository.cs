using core.models;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace core.interfaces.repositories
{
    public interface ICustomerRepository
    {
        void Initialize();
        List<Customer> GetAll();
        Tuple<int, List<Customer>> GetAllWithFilter(string search, int pageStart, int pageSize);
    }
}
