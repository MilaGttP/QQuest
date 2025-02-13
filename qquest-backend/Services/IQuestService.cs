using qquest_backend.Models;

namespace qquest_backend.Services
{
    public interface IQuestService
    {
        Task<IEnumerable<QuestWithAuthorEmail>> GetAllQuests();
        Task<IEnumerable<QuestTask>> GetTasksByQuestVisibleId(string visibleId);
        Task<IEnumerable<QuestCommentModel>> GetCommentsByQuestVisibleId(string visibleId);
        Task DeleteQuestByVisibleId(string nanoId);
        Task SaveQuest(QuestCreateModel model, int userId);
        Task AddQuestComment(string comment, string email, string nanoId);
    }
}