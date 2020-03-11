using core.interfaces.repositories;
using core.models;
using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.IO;
using System.Text;
using Newtonsoft.Json;

namespace infra.repositories
{
    public class AuthRepository : IAuthRepository
    {
        private readonly ConcurrentDictionary<string, Auth> _auth;

        public AuthRepository()
        {
            _auth = new ConcurrentDictionary<string, Auth>(StringComparer.OrdinalIgnoreCase);
        }

		public void Initialize()
		{
			
		}

		public bool Login(string username, string password)
        {
			if (!_auth.TryGetValue(username, out var userPrivate))
				return false;

			return true;
		}
    }
}
