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

        [Required]
        [StringLength(256)]
        public string RightAnswer { get; set; } = string.Empty;

        [Required]
        public int QuestId { get; set; }

        [ForeignKey("QuestId")]
        public Quest? Quest { get; set; }
    }
}
