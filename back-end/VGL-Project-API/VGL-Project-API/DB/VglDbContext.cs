using Microsoft.EntityFrameworkCore;
using VGL_Project_API.Models;

namespace VGL_Project_API.DB
{
    public class VglDbContext : DbContext
    {
        public VglDbContext(DbContextOptions options) : base(options)
        {

        }

        public DbSet<User> users { get; set; }
        public DbSet<Game> games { get; set; }
    }
}
