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
{
    public class Resources
    {
        public static List<ApiResource> resourceList = new List<ApiResource>();
        private const string ResourceKey = "ResourceSession";
        private static IHttpContextAccessor httpAccessor;
        public void SetApiResources(string name, string displayName, string scope)
        {
            resourceList.Add(new ApiResource
            {
                Name = name,
                DisplayName = displayName,
                Scopes = { new Scope(scope)}
            }); 
        }
        
        public static List<ApiResource> GetApiResource()
        {
            try
            {
                var str = httpAccessor.HttpContext.Session.GetString(ResourceKey); 
                var obj = JsonConvert.DeserializeObject<List<ApiResource>>(str);
                return obj;
            }
            catch (Exception)
            {
                return resourceList;
            }
            
        }

    }
}
