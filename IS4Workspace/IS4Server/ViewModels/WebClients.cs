using IdentityServer4.Models;
using Microsoft.AspNetCore.Mvc.Rendering;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;


namespace IS4Server.ViewModels
{
    public class WebClients
    {
        [Required]
        public string ClientId { get; set; }

        [Display(Name = "Client Name")]
        public string ClientName { get; set; }

        [Display(Name = "Client Secret")]
        public string ClientSecret { get; set; }

        [Required]
        [Display(Name = "Client Scope")]
        public string ClientScope { get; set; } 
    }
}
