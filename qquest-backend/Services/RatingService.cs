using Microsoft.EntityFrameworkCore;
using qquest_backend.Data;
using qquest_backend.Models;

namespace qquest_backend.Services
{
    public class RatingService : IRatingService
    {
        private readonly QQuestDbContext _context;
        public RatingService(QQuestDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<RatingModel>> GetUsersRating()
        {
            var ratings = await _context.Ratings
                .Include(r => r.User) 
                .OrderByDescending(r => r.Score)
                .ToListAsync();

            var ratingModels = ratings.Select((r, index) => new RatingModel
            {
                place = index + 1,  
                score = r.Score,   
                email = r.User.Email  
            }).ToList();

            return ratingModels;
        }

        public async Task RecalculateRanking()
        {
            var rankings = await _context.Ratings
                .OrderByDescending(r => r.Score)
                .ToListAsync();

            for (int i = 0; i < rankings.Count; i++)
            {
                rankings[i].Place = i + 1;
            }

            await _context.SaveChangesAsync();
        }

        public async Task UpdateUserRating(int userId)
        {
            int createdQuestsCount = await _context.Quests
                .Where(q => q.AuthorId == userId)
                .CountAsync();

            var userRating = await _context.Ratings
                .Where(r => r.UserId == userId)
                .FirstOrDefaultAsync();

            if (userRating == null)
            {
                userRating = new Rating
                {
                    UserId = userId,
                    Score = createdQuestsCount
                };
                _context.Ratings.Add(userRating);
            }
            else
            {
                userRating.Score = createdQuestsCount;
            }

            await _context.SaveChangesAsync();

            await RecalculateRanking();
        }
    }
}
