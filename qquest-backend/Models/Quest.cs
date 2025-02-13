using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace qquest_backend.Models
{
    [Table("qquest_quest")]
    public class Quest
    {
        [Key]
        public int Id { get; set; }

        [Required]
        [StringLength(16)]
        public string IdVisible { get; set; } = string.Empty;

        [Required]
        [StringLength(32)]
        public string Name { get; set; } = string.Empty;

        [Required]
        [StringLength(32)]
        public string Genre { get; set; } = string.Empty;

        [Required]
        public int AvgRate { get; set; }

        [Required]
        public int RatesQuan { get; set; }

        [Required]
        public int CompletedQuan { get; set; }

        [StringLength(128)]
        public string? Description { get; set; }

        [StringLength(8)]
        public string? TimeLimit { get; set; }

        [StringLength(128)]
        public string? Photo { get; set; }

        [Required]
        public int AuthorId { get; set; }

        [ForeignKey("AuthorId")]
        public User Author { get; set; } = null!;
    }

    public class QuestCompleteModel
    {
        [Required]
        public string email { get; set; } = string.Empty;

        [Required]
        public string nanoId { get; set; } = string.Empty;
    }

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
}
