using IdentityServer4;
using IdentityServer4.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace IS4Server.Config
{
    internal class Clients
    {
        public static List<Client> GetClients()
        {
            return new List<Client>
            {
            new Client
              {
               ClientId = "testWebClient",
               ClientName = "testWebClient",
               AllowedGrantTypes = GrantTypes.Implicit,
               RedirectUris = new List<string> { "http://localhost:52701/signin-oidc" },
               PostLogoutRedirectUris = new List<string> { "http://localhost:52701/" },
               AllowedScopes = new List<string>
               {
                   IdentityServerConstants.StandardScopes.OpenId,
                   IdentityServerConstants.StandardScopes.Profile,
                   IdentityServerConstants.StandardScopes.Email
               }
              }
            };
        }
    }
}

