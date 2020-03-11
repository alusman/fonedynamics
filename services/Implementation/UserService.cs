using core.interfaces.repositories;
using core.interfaces.services;
using core.models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace services
{
    public class UserService : IUserService
    {
        private readonly IUserRepository _repository;

        public UserService(IUserRepository repository)
        {
            _repository = repository ?? throw new ArgumentException(nameof(repository));
        }

        public List<User> GetAll() => _repository.GetAll().ToList();

        public bool Get(string username) {
            return _repository.Get(username);
        }
    }
}
