
using IdentityServer4.Test;
using System.Collections.Generic;

namespace IS4Server.Config
{
    internal class Users
    {

        public static List<TestUser> GetUsers()
        {
            return new List<TestUser>
            {
                new TestUser
                {
                    Username = "test",
                    Password = "123"
                }
            };
        }

    }
}
