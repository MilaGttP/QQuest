using Microsoft.EntityFrameworkCore;
using qquest_backend.Data;
using qquest_backend.Models;

namespace qquest_backend.Services
{
    public class UserService : IUserService
    {
        private readonly QQuestDbContext _context;
        public UserService(QQuestDbContext context)
        {
            _context = context;
        }

        public async Task<int> GetQuantityOfCreatedQuestsByEmail(string email)
        {
            int id = await GetUserIdByEmail(email);
            return await GetQuantityOfCreatedQuestsById(id);
        }

        public async Task<int> GetQuantityOfPassedQuestsByEmail(string email)
        {
            int id = await GetUserIdByEmail(email);
            return await GetQuantityOfPassedQuestsById(id);
        }

        public async Task<int> GetQuantityOfCreatedQuestsById(int id)
        {
            return await _context.Quests
                .Where(q => q.AuthorId == id)
                .CountAsync();
        }

        public async Task<int> GetQuantityOfPassedQuestsById(int id)
        {
            var passedQuestsCount = await _context.CompletedQuestsUsers
                .Where(c => c.UserId == id)
                .CountAsync();

            return passedQuestsCount;
        }


        public async Task AddUserBaseBadge(User user)
        {
            var existingBadge = await _context.BadgesUsers
                .FirstOrDefaultAsync(b => b.UserId == user.Id && b.BadgeId == 1);

            if (existingBadge != null)
            {
                return;
            }

            var baseBadge = new BadgesUsers
            {
                UserId = user.Id,
                BadgeId = 1
            };

            await _context.BadgesUsers.AddAsync(baseBadge);
            await _context.SaveChangesAsync();
        }

        public async Task<int> GetUserIdByEmail(string email)
        {
            var userId = await _context.Users
                .Where(u => u.Email == email)
                .Select(u => u.Id)
                .FirstOrDefaultAsync();

            return userId;
        }

        public async Task<bool> IsUserInDatabase(string email)
        {
            return await _context.Users.AnyAsync(u => u.Email == email);
        }

        public async Task<User> RegisterUser(User user)
        {
            _context.Users.Add(user);
            await _context.SaveChangesAsync();

            await AddUserBaseBadge(user);

            return user;
        }

        public async Task<int> GetUserPlaceInRating(int userId)
        {
            var rating = await _context.Ratings
                .Where(r => r.UserId == userId)
                .Select(r => r.Place)
                .FirstOrDefaultAsync();

            return rating > 0 ? rating : -1;
        }

        private async Task AssignBadgeToUser(int userId, string badgeName)
        {
            var badge = await _context.Badges
                .Where(b => b.Name == badgeName)
                .FirstOrDefaultAsync();

            if (badge != null)
            {
                var existingBadge = await _context.BadgesUsers
                    .Where(bu => bu.UserId == userId && bu.BadgeId == badge.Id)
                    .FirstOrDefaultAsync();

                if (existingBadge == null)
                {
                    var badgesUser = new BadgesUsers
                    {
                        UserId = userId,
                        BadgeId = badge.Id
                    };
                    _context.BadgesUsers.Add(badgesUser);
                    await _context.SaveChangesAsync();
                }
            }
            else
            {
                Console.WriteLine($"Badge with name '{badgeName}' not found.");
            }
        }

        public async Task CreatedQuestsBadge(int userId)
        {
            int questCount = await GetQuantityOfCreatedQuestsById(userId);

            if (questCount == 1)
            {
                await AssignBadgeToUser(userId, "Junior Creator");
            }

            if (questCount == 3)
            {
                await AssignBadgeToUser(userId, "Middle Creator");
            }

            if (questCount == 10)
            {
                await AssignBadgeToUser(userId, "Senior Creator");
            }
        }

        public async Task CompletedQuestsBadge(int userId)
        {
            int questCount = await GetQuantityOfPassedQuestsById(userId);

            if (questCount == 1)
            {
                await AssignBadgeToUser(userId, "Pioneer");
            }

            if (questCount == 3)
            {
                await AssignBadgeToUser(userId, "Skilled Player");
            }

            if (questCount == 10)
            {
                await AssignBadgeToUser(userId, "Pro Player");
            }
        }

        public async Task RatingBadge(int userId)
        {
            int place = await GetUserPlaceInRating(userId);

            if (place == 1)
            {
                await AssignBadgeToUser(userId, "Diamond Crown");
            }

            if (place == 2)
            {
                await AssignBadgeToUser(userId, "Gold Crown");
            }

            if (place == 3)
            {
                await AssignBadgeToUser(userId, "Silver Crown");
            }
        }

        public async Task BelieveMeImAdmin(int userId)
        {
            var user = await _context.Users.FindAsync(userId);

            if (user == null)
            {
                throw new Exception("User not found");
            }

            user.IsAdmin = true;

            await _context.SaveChangesAsync();
        }

        public async Task<IEnumerable<Quest>> GetCreatedQuestsByEmail(string email)
        {
            return await _context.Quests
                .Where(q => q.Author.Email == email)
                .ToListAsync();
        }

        public async Task<IEnumerable<Quest>> GetPassedQuestsByEmail(string email)
        {
            var user = await _context.Users
                .Where(u => u.Email == email)
                .SingleOrDefaultAsync();

            if (user == null)
            {
                return Enumerable.Empty<Quest>();
            }

            var completedQuests = await _context.CompletedQuestsUsers
                .Where(c => c.UserId == user.Id)
                .Select(c => c.QuestId)
                .ToListAsync();

            if (completedQuests.Any())
            {
                var quests = await _context.Quests.ToListAsync();
                var completedQuestList = new List<Quest>();

                foreach (var quest in quests)
                {
                    if (completedQuests.Contains(quest.Id))
                    {
                        completedQuestList.Add(quest);
                    }
                }

                return completedQuestList;
            }

            return Enumerable.Empty<Quest>();
        }

        public async Task<IEnumerable<Badge>> GetUserBadgesByEmail(string email)
        {
            var user = await _context.Users
                .Where(u => u.Email == email)
                .FirstOrDefaultAsync();

            if (user == null)
            {
                throw new ArgumentException("User not found.");
            }

            var badges = await _context.BadgesUsers
                .Where(bu => bu.UserId == user.Id)
                .Select(bu => bu.Badge)
                .ToListAsync();

            return badges;
        }

        public Task UpdateUserPhotoById(int id, string photoUrl)
        {
            throw new NotImplementedException();
        }

        public Task UpdateDescriptionById(int id, string description)
        {
            throw new NotImplementedException();
        }

        public async Task CompletedUserQuest(string email, string visibleId)
        {
            var user = await _context.Users
                .Where(u => u.Email == email)
                .FirstOrDefaultAsync();

            if (user == null)
            {
                throw new ArgumentException("User not found.");
            }

            var quest = await _context.Quests
                .Where(q => q.IdVisible == visibleId)
                .FirstOrDefaultAsync();

            if (quest == null)
            {
                throw new ArgumentException("Quest not found.");
            }

            quest.CompletedQuan += 1;

            var alreadyCompleted = await _context.CompletedQuestsUsers
                .AnyAsync(c => c.UserId == user.Id && c.QuestId == quest.Id);

            if (!alreadyCompleted)
            {
                var completedQuest = new CompletedQuestsUser
                {
                    UserId = user.Id,
                    QuestId = quest.Id
                };

                _context.CompletedQuestsUsers.Add(completedQuest);
            }

            await CompletedQuestsBadge(user.Id);

            await _context.SaveChangesAsync();
        }

    }
}
