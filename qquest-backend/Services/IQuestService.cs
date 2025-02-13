using qquest_backend.Models;

namespace qquest_backend.Services
{
    public interface IQuestService
    {
        Task<IEnumerable<QuestWithAuthorEmail>> GetAllQuests();
        Task<Quest> GetQuestById(int id);
        Task<Quest> GetQuestByVisibleId(string visibleId);
        Task<Quest> GetQuestByName(string name);
        Task<int> GetQuestScoreById(int id);
        Task<string> GetQuestGenreById(int id);
        Task<string> GetQuestVisibleIdById(int id);
        Task<string> GetQuestDescriptionIdById(int id);
        Task<IEnumerable<QuestTask>> GetTasksByQuestVisibleId(string visibleId);
        Task<IEnumerable<QuestCommentModel>> GetCommentsByQuestVisibleId(string visibleId);
        Task DeleteQuestById(int userId, int questId);
        Task SaveQuest(QuestCreateModel model, int userId);
        Task AddQuestComment(string comment, string email, string nanoId);
    }
}