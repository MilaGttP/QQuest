using Microsoft.AspNetCore.Mvc;
using qquest_backend.Models;
using qquest_backend.Services;
using System.ComponentModel.DataAnnotations;

namespace qquest_backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class QuestController : ControllerBase
    {
        private readonly IUserService _userService;
        private readonly IQuestService _questService;

        public QuestController(IUserService userService, IQuestService questService)
        {
            _userService = userService;
            _questService = questService;
        }

        [HttpPost("Create")]
        public async Task<IActionResult> Create([FromBody] QuestCreateModel model)
        {
            if (model == null || model.questions == null || !model.questions.Any())
            {
                return BadRequest("Questions are missing or malformed.");
            }

            int userId = await _userService.GetUserIdByEmail(model.email);
            if (userId == 0)
            {
                return NotFound(new { message = "Користувач з таким email не знайдений." });
            }

            await _questService.SaveQuest(model, userId);

            return Ok(new { message = "Квест успішно створений!" });
        }

        [HttpPost("GetQuestTasks")]
        public async Task<IActionResult> GetQuestTasks([FromForm] string nanoId)
        {
            if (string.IsNullOrWhiteSpace(nanoId))
            {
                return BadRequest("nanoId is required.");
            }

            var tasks = await _questService.GetTasksByQuestVisibleId(nanoId);

            if (!tasks.Any())
            {
                return NotFound("No tasks found for the given nanoId.");
            }

            return Ok(tasks);
        }

        [HttpPost("AddQuestComment")]
        public async Task<IActionResult> AddQuestComment([FromBody] QuestCommentModel model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            try
            {
                await _questService.AddQuestComment(model.text, model.email, model.nanoId);
                return Ok(new { message = "Коментар успішно додано." });
            }
            catch (Exception ex)
            {
                return BadRequest(new { error = ex.Message });
            }
        }

        [HttpGet("GetQuestComments")]
        public async Task<IActionResult> GetQuestComments([FromQuery] string nanoId)
        {
            var comments = await _questService.GetCommentsByQuestVisibleId(nanoId);

            if (!comments.Any())
            {
                return NotFound(new { message = "Коментарів не знайдено" });
            }

            return Ok(comments);
        }
    }
}


// FOR QUEST CREATION
public class QuestCreateModel
{
    [Required]
    public string email { get; set; } = string.Empty;

    [Required]
    public string description { get; set; } = string.Empty;

    [Required]
    public string nanoId { get; set; } = string.Empty;

    public string? time { get; set; }

    [Required]
    public string title { get; set; } = string.Empty;

    [Required]
    public string type { get; set; } = string.Empty;

    [Required]
    public string img { get; set; } = null!;

    [Required]
    public List<QuestionModel> questions { get; set; } = new List<QuestionModel>();
}

public class QuestionModel
{
    public int id { get; set; }

    [Required]
    public string text { get; set; }

    [Required]
    public string type { get; set; }

    [Required]
    public string rightAnswer { get; set; }
    public List<QuestionAnswerModel>? answers { get; set; }
}

public class QuestionAnswerModel
{
    public string? id { get; set; }
    public bool isRight { get; set; }
    public string? text { get; set; }
}