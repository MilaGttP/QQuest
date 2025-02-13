using qquest_backend.Models;

namespace qquest_backend.Services
{
    public interface IRatingService
    {
        Task<IEnumerable<RatingModel>> GetUsersRating();
        Task UpdateUserRating(int userId);
        Task RecalculateRanking();
    }
}
