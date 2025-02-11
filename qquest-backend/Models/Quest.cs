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

        public TimeSpan? TimeLimit { get; set; }

        public DateTime Expiring { get; set; }

        [StringLength(128)]
        public string? Photo { get; set; }

        [Required]
        public int AuthorId { get; set; }

        [ForeignKey("AuthorId")]
        public User Author { get; set; } = null!;
    }
}
