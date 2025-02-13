using qquest_backend.Models;

namespace qquest_backend.Services
{
    public interface IUserService
    {
        Task<IEnumerable<Quest>> GetCreatedQuestsByEmail(string email);
        Task<IEnumerable<Quest>> GetPassedQuestsByEmail(string email);
        Task<int> GetQuantityOfPassedQuestsByEmail(string email);
        Task<int> GetQuantityOfPassedQuestsById(int id);
        Task<int> GetUserIdByEmail(string email);
        Task<bool> IsUserInDatabase(string email);
        Task<int> GetQuantityOfCreatedQuestsById(int id);
        Task<IEnumerable<Badge>> GetUserBadgesByEmail(string email);
        Task UpdateUserPhotoByEmail(string email, string photoUrl);
        Task UpdateDescriptionByEmail(string email, string description);
        Task<User> RegisterUser(User user);
        Task AddUserBaseBadge(User user);
        Task CreatedQuestsBadge(int userId);
        Task CompletedQuestsBadge(int userId);
        Task BelieveMeImAdmin(int userId);
        Task CompletedUserQuest(string email, string visibleId);
        Task RatingBadge(int userId);
        Task<int> GetUserPlaceInRating(int userId);
    }
}
