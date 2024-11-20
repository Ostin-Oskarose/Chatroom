using Microsoft.EntityFrameworkCore;
using Models;

namespace DAL
{
    public class DatabaseContext : DbContext
    {

        public DbSet<User> Users;

        public DatabaseContext(DbContextOptions<DatabaseContext> options) : base(options)
        {

        }

    }
}
