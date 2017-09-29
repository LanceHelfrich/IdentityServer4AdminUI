using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using IS4Server.ViewModels;
using IS4Server.Config;
using Newtonsoft.Json;

namespace IS4Server.Controllers
{
    public class ClientController : Controller
    {
        const string ClientKey = "ClientSession";
        // GET: Client
        public ActionResult Index()
        {
            try
            {
                var str = HttpContext.Session.GetString(ClientKey);
                var obj = JsonConvert.DeserializeObject<WebClients>(str);
                return View(obj);
            }
            catch (Exception) { return View(); }
            
        }

        // GET: Client/Details/5
        public ActionResult Details(int id)
        {
            return View();
        }

        // GET: Client/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: Client/Create
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create(WebClients webClients)
        {
            Clients clients = new Clients();
            clients.SetClients(webClients.ClientId, webClients.ClientName, webClients.ClientSecret, webClients.ClientScope);

            var jsonString = JsonConvert.SerializeObject(webClients);
            HttpContext.Session.SetString(ClientKey, jsonString);
            
            return View();
            
        }

        // GET: Client/Edit/5
        public ActionResult Edit(int id)
        {
            return View();
        }

        // POST: Client/Edit/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit(int id, IFormCollection collection)
        {
            try
            {
                // TODO: Add update logic here

                return RedirectToAction("Index");
            }
            catch
            {
                return View();
            }
        }

        // GET: Client/Delete/5
        public ActionResult Delete(int id)
        {
            return View();
        }

        // POST: Client/Delete/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Delete(int id, IFormCollection collection)
        {
            try
            {
                // TODO: Add delete logic here

                return RedirectToAction("Index");
            }
            catch
            {
                return View();
            }
        }
    }
}