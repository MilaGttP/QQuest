using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace qquest_backend.Models
{
    [Table("qquest_created_quests_users")]
    public class CreatedQuestsUser
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public int UserId { get; set; }

        [Required]
        public int QuestId { get; set; }

        [ForeignKey("UserId")]
        public User User { get; set; } = null!;

        [ForeignKey("QuestId")]
        public Quest Quest { get; set; } = null!;
    }
}
