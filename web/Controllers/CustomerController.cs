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
    [Route("api/v1/customer")]
    [Produces("application/json")]
    public class CustomerController : ControllerBase
    {
        private readonly ICustomerService _service;
        private readonly ILogger<CustomerController> _logger;

        public CustomerController(ILogger<CustomerController> logger, ICustomerService service)
        {
            _logger = logger ?? throw new ArgumentNullException(nameof(logger));
            _service = service ?? throw new ArgumentNullException(nameof(service));
        }

        [HttpGet]
        [ProducesResponseType(StatusCodes.Status200OK)]
        public ActionResult<List<Customer>> GetCustomers()
        {
            return _service.GetAll();
        }

        [HttpGet("{tags}/{page}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        public ActionResult<List<Customer>> GetCustomersWithFilter(string tags, string page)
        {
            return _service.GetAllWithFilter(tags, page);
        }
    }
}