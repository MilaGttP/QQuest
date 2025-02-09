using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace qquest_backend.Models
{
    [Table("qquest_rating")]
    public class Rating
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public int Place { get; set; }

        [Required]
        public int Score { get; set; }

        [Required]
        public int UserId { get; set; }

        [ForeignKey("UserId")]
        public User User { get; set; } = null!;
    }
}
