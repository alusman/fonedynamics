using core.models;
using System;
using System.Collections.Generic;
using System.Text;

namespace core.interfaces.repositories
{
    public interface IUserRepository
    {
        List<User> GetAll();
        bool Get(string username);
    }
}
