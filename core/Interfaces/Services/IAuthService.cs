using core.models;
using System;
using System.Collections.Generic;
using System.Text;

namespace core.interfaces.services
{
    public interface IAuthService
    {
        bool Login(string username, string password);
    }
}
