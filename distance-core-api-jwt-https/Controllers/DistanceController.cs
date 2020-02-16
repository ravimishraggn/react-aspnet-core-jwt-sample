using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using WebApi.Services;
using WebApi.Models;
using System.Linq;

namespace WebApi.Controllers
{
    [Authorize]
    [ApiController]
    [Route("[controller]")]
    public class DistanceController : ControllerBase
    {
        private IDistanceService _distanceService;

        public UsersController(IDistanceService distanceService)
        {
            _distanceService = distanceService;
        }        

        [HttpGet]
        [Produces("application/json")]
        public IActionResult GetEditDistance(string f, string s)
        {
            return Ok(_distanceService.GetEditDistance(f, s));            
        }
    }
}
