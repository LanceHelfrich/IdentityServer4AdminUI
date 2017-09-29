using IdentityServer4.Models;
using Microsoft.AspNetCore.Mvc.Rendering;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace IS4Server.ViewModels
{
    public class WebAPIResources 
    {
        public string Name { get; set; }

        [Display(Name="Display Name")]
        public string DisplayName { get; set; }
        
        public string Scope { get; set; }
        
    }
}
