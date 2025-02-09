using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace qquest_backend.Models
{
    [Table("qquest_quest_comment")]
    public class QuestComment
    {
        [Key]
        public int Id { get; set; }

        [Required]
        [StringLength(512)]
        public string Comment { get; set; } = string.Empty;

        [Required]
        public int QuestId { get; set; }

        [ForeignKey("QuestId")]
        public Quest? Quest { get; set; }

        [Required]
        public int UserId { get; set; }

        [ForeignKey("UserId")]
        public User? User { get; set; }
    }
}