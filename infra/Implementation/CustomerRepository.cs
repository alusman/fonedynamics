using core.models;
using core.interfaces.repositories;
using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.IO;
using Newtonsoft.Json;
using System.Linq;

namespace infra.repositories
{
    public class CustomerRepository : ICustomerRepository
    {
        private readonly ConcurrentDictionary<string, Customer> _customers;

        public CustomerRepository()
        {
            _customers = new ConcurrentDictionary<string, Customer>(StringComparer.OrdinalIgnoreCase);
        }

        public void Initialize()
        {
            try
            {
                using (StreamReader r = new StreamReader(@"Data\customers.json"))
                {
                    string json = r.ReadToEnd();
                    List<Customer> list = JsonConvert.DeserializeObject<List<Customer>>(json);

                    foreach (var item in list)
                    {
                        _customers.TryAdd(item.Id.ToString(), item);
                    }
                }
            }
            catch (Exception)
            {

            }
        }

        public List<Customer> GetAll() {
            return _customers.Select(item => item.Value).ToList();
        }
 
        public List<Customer> GetAllWithFilter(string tags, string page)
        {
            return _customers.Select(item => item.Value).ToList();
        }
    }
}
