using core.interfaces.repositories;
using core.models;
using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Text;

namespace infra.repositories
{
    public class UserRepository : IUserRepository
    {
        private readonly ConcurrentDictionary<string, User> _users;

        public UserRepository()
        {
            _users = new ConcurrentDictionary<string, User>(StringComparer.OrdinalIgnoreCase);
        }

        public List<User> GetAll()
        {
            throw new NotImplementedException();
        }

        public bool Get(string username)
        {
            throw new NotImplementedException();
        }
    }
}
