using core.models;
using System;
using System.Collections.Generic;
using System.Text;

namespace core.interfaces.repositories
{
    public interface IAuthRepository
    {
        void Initialize();
        bool Login(string username, string password);
    }
}
