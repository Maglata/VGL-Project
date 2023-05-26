using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using VGL_Project_API.DB;
using VGL_Project_API.Models;

namespace VGL_Project_API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UserController : Controller
    {

        private readonly VglDbContext _context;

        public UserController(VglDbContext context)
        {
            _context = context;
        }

        [HttpGet("GetAllUsers")]
        public async Task<IActionResult> GetAllUsers()
        {
            return Ok (await _context.users.ToListAsync());
        }

        [HttpGet("GetUserbyId")]
        public async Task<IActionResult> GetUserbyID(int id)
        {
            var user = await _context.users.FirstOrDefaultAsync(x => x.UserID == id);

            if (user == null)
            {
                return NotFound();
            }

            return Ok(user);
        }

        [HttpPost("RegisterUser")]
        public async Task<IActionResult> RegisterUser(string Username, string Email, string Password)
        {
            User user = new User();
            user.Username = Username;
            user.Email = Email;
            user.Password = Password;
            user.Games = new List<Game>();

            await _context.users.AddAsync(user);
            await _context.SaveChangesAsync();

            return Ok();
        }
    }
}
