using Microsoft.EntityFrameworkCore;

namespace qquest_backend.Models
{
    public class QQuestDbContext : DbContext
    {
        public DbSet<User> Users { get; set; }
        public DbSet<Quest> Quests { get; set; }
        public DbSet<QuestTask> QuestTasks { get; set; }
        public DbSet<Rating> Rating { get; set; }
        public DbSet<Badge> Badges { get; set; }
        public DbSet<CreatedQuestsUser> CreatedQuestsUsers { get; set; }
        public DbSet<CompletedQuestsUser> CompletedQuestsUsers { get; set; }
        public DbSet<BadgesUsers> BadgesUsers { get; set; }
        public DbSet<QuestComment> QuestComments { get; set; }

        public QQuestDbContext(DbContextOptions<QQuestDbContext> options) : base(options) { }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                var builder = new ConfigurationBuilder();
                builder.SetBasePath(Directory.GetCurrentDirectory());
                builder.AddJsonFile("appsettings.json");
                var config = builder.Build();
                string connectionString = config.GetConnectionString("DefaultConnection");
                optionsBuilder.UseSqlServer(connectionString);
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {

        }
    }
}
