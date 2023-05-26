using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using VGL_Project_API.DB;
using VGL_Project_API.Models;

namespace VGL_Project_API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class GameController : Controller
    {

        private readonly VglDbContext _context;

        public GameController(VglDbContext context)
        {
            _context = context;
        }

        [HttpGet("GetAllGames")]
        public async Task<IActionResult> GetAllGames()
        {
            return Ok(await _context.games.ToListAsync());
        }

        [HttpGet("GetGamebyID")]
        public async Task<IActionResult> GetGamebyID(int id)
        {
            var game = await _context.games.FirstOrDefaultAsync(x => x.GameID == id);

            if (game == null)
            {
                return NotFound();
            }

            return Ok(game);
        }

        [HttpPost("RegisterGame")]
        public async Task<IActionResult> RegisterGame(string GameName, string Platform, string Developer, string Genre, string ReleaseDate)
        {
            Game game = new Game();
            game.Name = GameName;
            game.Platform = Platform;
            game.Developer = Developer;
            game.Genre = Genre;
            game.ReleaseDate = ReleaseDate;

            await _context.games.AddAsync(game);
            await _context.SaveChangesAsync();

            return Ok();
        }
    }
}
