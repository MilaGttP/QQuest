using Microsoft.EntityFrameworkCore;

namespace qquest_backend.Models
{
    public class QQuestDbContext : DbContext
    {
        public QQuestDbContext(DbContextOptions<QQuestDbContext> options) : base(options) { }

        public DbSet<User> Users { get; set; }
        public DbSet<Quest> Quests { get; set; }
        public DbSet<QuestTask> QuestTasks { get; set; }
        public DbSet<QuestComment> QuestComments { get; set; }
        public DbSet<Rating> Ratings { get; set; }
        public DbSet<Badge> Badges { get; set; }
        public DbSet<BadgesUsers> BadgesUsers { get; set; }
        public DbSet<CreatedQuestsUser> CreatedQuestsUsers { get; set; }
        public DbSet<CompletedQuestsUser> CompletedQuestsUsers { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                var builder = new ConfigurationBuilder();
                builder.SetBasePath(Directory.GetCurrentDirectory());
                builder.AddJsonFile("appsettings.json");
                var config = builder.Build();
                string connectionString = config.GetConnectionString("DBConnection");
                optionsBuilder.UseSqlServer(connectionString);
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<Quest>()
                .HasOne(q => q.Author)
                .WithMany()
                .HasForeignKey(q => q.AuthorId)
                .OnDelete(DeleteBehavior.Restrict);

            modelBuilder.Entity<QuestTask>()
                .HasOne(qt => qt.Quest)
                .WithMany()
                .HasForeignKey(qt => qt.QuestId)
                .OnDelete(DeleteBehavior.Cascade);

            modelBuilder.Entity<QuestComment>()
                .HasOne(qc => qc.Quest)
                .WithMany()
                .HasForeignKey(qc => qc.QuestId)
                .OnDelete(DeleteBehavior.Cascade);

            modelBuilder.Entity<QuestComment>()
                .HasOne(qc => qc.User)
                .WithMany()
                .HasForeignKey(qc => qc.UserId)
                .OnDelete(DeleteBehavior.Cascade);

            modelBuilder.Entity<Rating>()
                .HasOne(r => r.User)
                .WithMany()
                .HasForeignKey(r => r.UserId)
                .OnDelete(DeleteBehavior.Cascade);

            modelBuilder.Entity<BadgesUsers>()
                .HasOne(bu => bu.User)
                .WithMany()
                .HasForeignKey(bu => bu.UserId)
                .OnDelete(DeleteBehavior.Cascade);

            modelBuilder.Entity<BadgesUsers>()
                .HasOne(bu => bu.Badge)
                .WithMany()
                .HasForeignKey(bu => bu.BadgeId)
                .OnDelete(DeleteBehavior.Cascade);

            modelBuilder.Entity<CreatedQuestsUser>()
                .HasOne(cqu => cqu.User)
                .WithMany()
                .HasForeignKey(cqu => cqu.UserId)
                .OnDelete(DeleteBehavior.Cascade);

            modelBuilder.Entity<CreatedQuestsUser>()
                .HasOne(cqu => cqu.Quest)
                .WithMany()
                .HasForeignKey(cqu => cqu.QuestId)
                .OnDelete(DeleteBehavior.Cascade);

            modelBuilder.Entity<CompletedQuestsUser>()
                .HasOne(cqu => cqu.User)
                .WithMany()
                .HasForeignKey(cqu => cqu.UserId)
                .OnDelete(DeleteBehavior.Cascade);

            modelBuilder.Entity<CompletedQuestsUser>()
                .HasOne(cqu => cqu.Quest)
                .WithMany()
                .HasForeignKey(cqu => cqu.QuestId)
                .OnDelete(DeleteBehavior.Cascade);
        }
    }
}
