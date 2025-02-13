using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace qquest_backend.Models
{
    [Table("qquest_quest_task")]
    public class QuestTask
    {
        [Key]
        public int Id { get; set; }

        [Required]
        [StringLength(256)]
        public string Title { get; set; } = string.Empty;

        [Required]
        [StringLength(16)]
        public string Type { get; set; } = string.Empty;

        [StringLength(1024)]
        public string? Answers { get; set; }

        [StringLength(16)]
        public int ContentId { get; set; }

        [Required]
        [StringLength(256)]
        public string RightAnswer { get; set; } = string.Empty;

        [Required]
        public int QuestId { get; set; }

        [ForeignKey("QuestId")]
        public Quest? Quest { get; set; }
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
}
