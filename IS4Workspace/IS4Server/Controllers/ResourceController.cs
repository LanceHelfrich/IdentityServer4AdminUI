using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using IS4Server.ViewModels;
using Microsoft.AspNetCore.Mvc.ModelBinding;
using IS4Server.Config;
using Newtonsoft.Json;

namespace IS4Server.Controllers
{
    public class ResourceController : Controller
    {
        private const string ResourceKey = "ResourceSession";

        // GET: Resource
        public ActionResult Index()
        {
            try
            {
                var str = HttpContext.Session.GetString(ResourceKey);
                var obj = JsonConvert.DeserializeObject<WebAPIResources>(str); 
                return View(obj);
            }
            catch (Exception) { return View(); }
        }

        // GET: Resource/Details/5
        public ActionResult Details(int id)
        {
            return View();
        }

        // GET: Resource/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: Resource/Create
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create(WebAPIResources _resources)  
        {
            Resources res = new Resources();
            res.SetApiResources(_resources.Name, _resources.DisplayName, _resources.Scope);

            var jsonString = JsonConvert.SerializeObject(_resources);
            HttpContext.Session.SetString(ResourceKey, jsonString);

            return View();
        }

        // GET: Resource/Edit/5
        public ActionResult Edit(int id)
        {
            return View();
        }

        // POST: Resource/Edit/5
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

        // GET: Resource/Delete/5
        public ActionResult Delete(int id)
        {
            return View();
        }

        // POST: Resource/Delete/5
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