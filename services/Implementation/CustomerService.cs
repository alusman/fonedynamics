using core.models;
using core.interfaces.repositories;
using core.interfaces.services;
using System;
using System.Collections.Generic;
using System.Linq;

namespace services
{
    public class CustomerService : ICustomerService
    {
        private readonly ICustomerRepository _repository;

        public CustomerService(ICustomerRepository repository) {
            _repository = repository ?? throw new ArgumentException(nameof(repository));
        }

        public List<Customer> GetAll() => _repository.GetAll().ToList();

        public List<Customer> GetAllWithFilter(string tags, string page)
        {
            return _repository.GetAllWithFilter(tags, page);
        }
    }
}
