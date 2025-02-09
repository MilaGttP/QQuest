using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace qquest_backend.Models
{
    [Table("qquest_badge")]
    public class Badge
    {
        [Key]
        public int Id { get; set; }

        [Required]
        [StringLength(32)]
        public string Name { get; set; } = string.Empty;

        [Required]
        [StringLength(128)]
        public string Photo { get; set; } = string.Empty;

        [Required]
        [StringLength(128)]
        public string Description { get; set; } = string.Empty;
    }
}
