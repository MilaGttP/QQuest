using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace qquest_backend.Models
{
    [Table("qquest_badges_users")]
    public class BadgesUsers
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public int UserId { get; set; }

        [Required]
        public int BadgeId { get; set; }

        [ForeignKey("UserId")]
        public User User { get; set; } = null!;

        [ForeignKey("BadgeId")]
        public Badge Badge { get; set; } = null!;
    }
}
