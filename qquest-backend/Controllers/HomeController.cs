using Microsoft.AspNetCore.Mvc;
using qquest_backend.Models;
using qquest_backend.Services;

namespace qquest_backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class HomeController : ControllerBase
    {
        private readonly IQuestService _questService;
        private readonly IRatingService _ratingService;

        public HomeController(IQuestService questService, IRatingService ratingService)
        {
            _questService = questService;
            _ratingService = ratingService;
        }

        [HttpGet("Quests")]
        public async Task<IActionResult> Quests()
        {
            var quests = await _questService.GetAllQuests();
            return Ok(quests);
        }

        [HttpGet("Rating")]
        public async Task<IActionResult> Rating()
        {
            try
            {
                var rating = await _ratingService.GetUsersRating();  
                return Ok(rating);  
            }
            catch (Exception ex)
            {
                return BadRequest($"Error: {ex.Message}"); 
            }
        }
    }
}
