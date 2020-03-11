using core.models;
using System.Collections.Generic;

namespace core.interfaces.repositories
{
    public interface ICustomerRepository
    {
        void Initialize();
        List<Customer> GetAll();
        List<Customer> GetAllWithFilter(List<string> tags, string page);
    }
}
