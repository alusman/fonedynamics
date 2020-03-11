using core.models;
using System;
using System.Collections.Generic;
using System.Text;

namespace core.interfaces.services
{
    public interface IUserService
    {
        List<User> GetAll();
        bool Get(string username);
    }
}
