using core.models;
using System.Collections.Generic;

namespace core.interfaces.services
{
    public interface ICustomerService
    {
        List<Customer> GetAll();
        List<Customer> GetAllWithFilter(string tags, string page);
    }
}
