using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using SimpleWebApi.Models;

namespace SimpleWebApi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class TodoController : ControllerBase
    {
        private static readonly List<TodoItem> items = new List<TodoItem>();

        [HttpGet]
        public IEnumerable<TodoItem> Get()
        {
            return items;
        }

        [HttpPost]
        public IActionResult Post(TodoItem item)
        {
            items.Add(item);
            return Ok(item);
        }
    }
}
