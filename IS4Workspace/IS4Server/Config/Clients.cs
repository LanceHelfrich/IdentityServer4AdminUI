using IdentityServer4;
using IdentityServer4.Models;
using IS4Server.ViewModels;
using Microsoft.AspNetCore.Http;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;


namespace IS4Server.Config
{    public class Clients
    {
        public static List<Client> clientList = new List<Client>();
        private const string ClientKey = "ClientSession";
        private static IHttpContextAccessor httpAccessor;

        public void SetClients(string clientId, string clientName, string secret, string scope)
        {
            clientList.Add(new Client
            {
                ClientId = clientId,
                ClientName = clientName,
                AllowedGrantTypes = GrantTypes.ClientCredentials,
                ClientSecrets = { new Secret(secret.Sha256()) },
                AllowedScopes = { scope }
            });
        }
        
        public static List<Client> GetClients()
        {
            try
            {
                var str = httpAccessor.HttpContext.Session.GetString(ClientKey);
                var obj = JsonConvert.DeserializeObject<List<Client>>(str);
                return obj;
            }
            catch (Exception)
            {
                return clientList;
            }

        }
    }
}

