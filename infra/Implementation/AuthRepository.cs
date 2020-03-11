using core.interfaces.repositories;
using core.models;
using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Text;

namespace infra.repositories
{
    public class AuthRepository : IAuthRepository
    {
        private readonly ConcurrentDictionary<string, Auth> _auth;

        public AuthRepository()
        {
            _auth = new ConcurrentDictionary<string, Auth>(StringComparer.OrdinalIgnoreCase);
        }

        public bool Login(string username, string password)
        {
            throw new NotImplementedException();
        }
    }
}
