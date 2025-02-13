using Microsoft.AspNetCore.Mvc;
using qquest_backend.Models;
using qquest_backend.Services;
using System.ComponentModel.DataAnnotations;

namespace qquest_backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AccountController : ControllerBase
    {
        private readonly IUserService _userService;

        public AccountController(IUserService userService)
        {
            _userService = userService;
        }

        [HttpPost("Register")]
        public async Task<IActionResult> Register([FromBody] User user)
        {
            if (string.IsNullOrWhiteSpace(user.Email))
            {
                return BadRequest("Email is required.");
            }

            bool userExists = await _userService.IsUserInDatabase(user.Email);

            if (userExists)
            {
                return BadRequest("User has already registered.");
            }

            if (string.IsNullOrWhiteSpace(user.Photo))
            {
                user.Photo = "https://res.cloudinary.com/qquest/image/upload/v1739290580/qquest/uhtyppgasxqovsoftfnb.jpg";
            }

            if (string.IsNullOrWhiteSpace(user.Name))
            {
                user.Name = user.Email;
            }

            if (string.IsNullOrWhiteSpace(user.Surname))
            {
                user.Surname = "";
            }

            user.Description = "Your description should be here...";
            user.IsAdmin = false;

            var createdUser = await _userService.RegisterUser(user);
            return CreatedAtAction(nameof(Register), createdUser);
        }

        [HttpPost("Login")]
        public async Task<IActionResult> Login([FromForm] string email)
        {
            if (string.IsNullOrWhiteSpace(email))
            {
                return BadRequest("Email is required.");
            }

            bool userExists = await _userService.IsUserInDatabase(email);

            if (!userExists)
            {
                return NotFound("User not found.");
            }

            try
            {
                return Ok(new { message = "Login successful", email = email });
            }
            catch
            {
                return StatusCode(500, "An error occurred while logging in.");
            }
        }

        [HttpPost("BecomeAdmin")]
        public async Task<IActionResult> BecomeAdmin([FromForm] string email)
        {
            int userId = await _userService.GetUserIdByEmail(email);
            if (userId == 0)
            {
                return NotFound(new { message = "Користувач з таким email не знайдений." });
            }

            await _userService.BelieveMeImAdmin(userId);

            return Ok(new { message = "Ви тепер адміністратор!" });
        }

        [HttpGet("CreatedQuests")]
        public async Task<IActionResult> CreatedQuests([FromQuery] string email)
        {
            if (string.IsNullOrWhiteSpace(email))
            {
                return BadRequest("Email is required.");
            }

            var quests = await _userService.GetCreatedQuestsByEmail(email);

            if (!quests.Any())
            {
                return NotFound("No quests found for the given email.");
            }

            return Ok(quests);
        }

        [HttpGet("PassedQuests")]
        public async Task<IActionResult> PassedQuests([FromQuery] string email)
        {
            var quests = await _userService.GetPassedQuestsByEmail(email);

            if (!quests.Any())
            {
                return NotFound("No passed quests found for the given email.");
            }

            return Ok(quests);
        }

        [HttpPost("CompletedUserQuest")]
        public async Task<IActionResult> CompletedUserQuest([FromBody] QuestCompleteModel model)
        {
            if (string.IsNullOrWhiteSpace(model.email) || string.IsNullOrWhiteSpace(model.nanoId))
            {
                return BadRequest("Email and VisibleId are required.");
            }

            try
            {
                await _userService.CompletedUserQuest(model.email, model.nanoId);
                return Ok("Quest completed and badge updated if necessary.");
            }
            catch (ArgumentException ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet("GetUserBadges")]
        public async Task<IActionResult> GetUserBadges([FromQuery] string email)
        {
            if (string.IsNullOrWhiteSpace(email))
            {
                return BadRequest("Email is required.");
            }

            try
            {
                var badges = await _userService.GetUserBadgesByEmail(email);
                if (badges == null || !badges.Any())
                {
                    return NotFound("No badges found for the given email.");
                }

                return Ok(badges);
            }
            catch (ArgumentException ex)
            {
                return NotFound(ex.Message);
            }
        }
    }
}

public class QuestCompleteModel
{
    [Required]
    public string email { get; set; } = string.Empty;

    [Required]
    public string nanoId { get; set; } = string.Empty;
}