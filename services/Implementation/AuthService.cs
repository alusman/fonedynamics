using core.interfaces.repositories;
using core.interfaces.services;
using core.models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace services
{
    public class AuthService : IAuthService
    {
        private readonly IAuthRepository _repository;

        public AuthService(IAuthRepository repository)
        {
            _repository = repository ?? throw new ArgumentException(nameof(repository));
        }

        public bool Login(string username, string password) {
            return _repository.Login(username, password);
        }
    }
}
