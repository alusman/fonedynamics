using core.interfaces.repositories;
using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace web
{
    public static class IApplicationBuilderExtensions
    {
		public static IApplicationBuilder InitializeAuth(this IApplicationBuilder app)
		{
			var repo = app.ApplicationServices.GetRequiredService<IAuthRepository>();
			repo.Initialize();

			return app;
		}

		public static IApplicationBuilder InitializeCustomers(this IApplicationBuilder app)
		{
			var repo = app.ApplicationServices.GetRequiredService<ICustomerRepository>();
			repo.Initialize();

			return app;
		}
	}
}
