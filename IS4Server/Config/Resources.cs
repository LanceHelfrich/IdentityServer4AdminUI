using IdentityServer4.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace IS4Server.Config
{
    internal class Resources
    {
        public static List<ApiResource> GetApiResource()
        {
            return new List<ApiResource>
            {
                new ApiResource
                {
                   Name = "customAPI",
                   DisplayName = "Custom API",
                   Description = "Custom API Access",
                   Scopes = new List<Scope>
                   {
                       new Scope("customAPI.read"),
                       new Scope("customAPI.write")
                   },
                   UserClaims = new List<string> {"role"},
                   ApiSecrets = new List<Secret>{new Secret("scopeSecret".Sha256())},
                }
            

            };
           
        }


        public static List<IdentityResource> GetIdentityResources()
        {
            return new List<IdentityResource>
            {
                new IdentityResources.OpenId(),
                new IdentityResources.Profile(),
                new IdentityResources.Email(),
                new IdentityResource
                {
                    Name = "role",
                    UserClaims = new List<string> {"role"}
                }

            };
        }

    }
}
