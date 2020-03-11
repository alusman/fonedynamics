using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using core.interfaces.services;
using core.models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace web.Controllers
{
    [ApiController]
    [Route("api/v1/user")]
    [Produces("application/json")]
    public class UserController : ControllerBase
    {
        private readonly IUserService _service;
        private readonly ILogger<UserController> _logger;

        public UserController(ILogger<UserController> logger, IUserService service)
        {
            _logger = logger ?? throw new ArgumentNullException(nameof(logger));
            _service = service ?? throw new ArgumentNullException(nameof(service));
        }

        [HttpGet]
        [ProducesResponseType(StatusCodes.Status200OK)]
        public ActionResult<bool> Login(string username)
        {
            bool result = _service.Get(username);

            return Ok(result);
        }
    }
}