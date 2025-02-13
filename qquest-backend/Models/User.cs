﻿using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace qquest_backend.Models
{
    [Table("qquest_user")]
    public class User
    {
        [Key]
        public int Id { get; set; }

        [Required]
        [StringLength(32)]
        public string? Name { get; set; }

        [Required]
        [StringLength(32)]
        public string? Surname { get; set; }

        [Required]
        [StringLength(32)]
        [EmailAddress]
        public string Email { get; set; } = string.Empty;

        [StringLength(128)]
        public string? Photo { get; set; }

        [StringLength(128)]
        public string? Description { get; set; }

        [Required]
        public bool IsAdmin { get; set; }
    }

    public class UserModel
    {
        public string email { get; set; }
        public string text { get; set; }
    }
}
