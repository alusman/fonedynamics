using core.models;
using System;
using System.Collections.Generic;
using System.Text;

namespace core.interfaces.repositories
{
    public interface IAuthRepository
    {
        bool Login(string username, string password);
    }
}
