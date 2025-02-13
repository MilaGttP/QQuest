using qquest_backend.Data;
using qquest_backend.Models;
using Microsoft.EntityFrameworkCore;

namespace qquest_backend.Services
{
    public class QuestService : IQuestService
    {
        private readonly QQuestDbContext _context;
        private readonly IUserService _userService;
        private readonly IRatingService _ratingService;
        public QuestService(QQuestDbContext context, IUserService userService, IRatingService ratingService)
        {
            _context = context;
            _userService = userService;
            _ratingService = ratingService;
        }

        public async Task AddQuestComment(string comment, string email, string nanoId)
        {
            var user = await _context.Users.FirstOrDefaultAsync(u => u.Email == email);
            if (user == null)
            {
                throw new Exception("Користувача не знайдено.");
            }

            var quest = await _context.Quests.FirstOrDefaultAsync(q => q.IdVisible == nanoId);
            if (quest == null)
            {
                throw new Exception("Квест не знайдено.");
            }

            var questComment = new QuestComment
            {
                Comment = comment,
                QuestId = quest.Id,
                UserId = user.Id
            };

            _context.QuestComments.Add(questComment);
            await _context.SaveChangesAsync();
        }


        public Task DeleteQuestById(int userId, int questId)
        {
            throw new NotImplementedException();
        }

        public async Task<IEnumerable<QuestWithAuthorEmail>> GetAllQuests()
        {
            var quests = await _context.Quests
                .Include(q => q.Author)
                .Select(q => new QuestWithAuthorEmail
                {
                    Id = q.Id,
                    IdVisible = q.IdVisible,
                    Name = q.Name,
                    Genre = q.Genre,
                    AvgRate = q.AvgRate,
                    RatesQuan = q.RatesQuan,
                    CompletedQuan = q.CompletedQuan,
                    Description = q.Description,
                    TimeLimit = q.TimeLimit,
                    Photo = q.Photo,
                    AuthorEmail = q.Author.Email
                })
                .ToListAsync();

            return quests;
        }

        public async Task<IEnumerable<QuestCommentModel>> GetCommentsByQuestVisibleId(string nanoId)
        {
            var quest = await _context.Quests.FirstOrDefaultAsync(q => q.IdVisible == nanoId);

            if (quest == null)
            {
                return new List<QuestCommentModel>();
            }

            var comments = await _context.QuestComments
                .Where(c => c.QuestId == quest.Id)
                .Include(c => c.User)
                .ToListAsync();

            return comments.Select(c => new QuestCommentModel
            {
                text = c.Comment,
                nanoId = nanoId,
                email = c.User?.Email ?? "unknown"
            });
        }

        public Task<Quest> GetQuestById(int id)
        {
            throw new NotImplementedException();
        }

        public Task<Quest> GetQuestByName(string name)
        {
            throw new NotImplementedException();
        }

        public Task<Quest> GetQuestByVisibleId(string visibleId)
        {
            throw new NotImplementedException();
        }

        public Task<string> GetQuestDescriptionIdById(int id)
        {
            throw new NotImplementedException();
        }

        public Task<string> GetQuestGenreById(int id)
        {
            throw new NotImplementedException();
        }

        public Task<int> GetQuestScoreById(int id)
        {
            throw new NotImplementedException();
        }

        public Task<string> GetQuestVisibleIdById(int id)
        {
            throw new NotImplementedException();
        }

        public async Task<IEnumerable<QuestTask>> GetTasksByQuestVisibleId(string visibleId)
        {
            var quest = await _context.Quests
                .Where(q => q.IdVisible == visibleId)
                .Select(q => new { q.Id })
                .FirstOrDefaultAsync();

            if (quest == null)
            {
                return Enumerable.Empty<QuestTask>();
            }

            return await _context.QuestTasks
                .Where(qt => qt.QuestId == quest.Id)
                .ToListAsync();
        }

        public async Task SaveQuest(QuestCreateModel model, int userId)
        {
            var quest = new Quest
            {
                Name = model.title,
                Genre = model.type,
                IdVisible = model.nanoId,
                TimeLimit = model.time,
                Description = model.description,
                Photo = model.img,
                AuthorId = userId,
                AvgRate = 0,
                RatesQuan = 0,
                CompletedQuan = 0
            };

            _context.Quests.Add(quest);
            await _context.SaveChangesAsync();

            foreach (var question in model.questions)
            {
                var answerText = string.Join(";", question.answers?.Where(a => a.text != null).Select(a => a.text) ?? new List<string>());

                var questTask = new QuestTask
                {
                    ContentId = question.id,
                    Title = question.text,
                    Type = question.type,
                    RightAnswer = question.rightAnswer,
                    Answers = answerText,
                    QuestId = quest.Id
                };

                _context.QuestTasks.Add(questTask);
            }

            await _context.SaveChangesAsync();

            await _userService.CreatedQuestsBadge(userId);

            await _ratingService.UpdateUserRating(userId);

            await _userService.RatingBadge(userId);
        }
    }
}



// FOR GETTING GUEST WITH USER EMAIL
public class QuestWithAuthorEmail
{
    public int Id { get; set; }
    public string IdVisible { get; set; } = string.Empty;
    public string Name { get; set; } = string.Empty;
    public string Genre { get; set; } = string.Empty;
    public int AvgRate { get; set; }
    public int RatesQuan { get; set; }
    public int CompletedQuan { get; set; }
    public string? Description { get; set; }
    public string? TimeLimit { get; set; }
    public string? Photo { get; set; }
    public string AuthorEmail { get; set; } = string.Empty;
}
