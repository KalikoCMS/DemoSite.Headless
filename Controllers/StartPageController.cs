namespace DemoSite.Headless.Controllers {
    using System.Web.Mvc;
    using KalikoCMS.Mvc.Framework;
    using Models.Pages;

    public class StartPageController : PageController<StartPage> {
        public override ActionResult Index(StartPage currentPage) {
            // In an ordinary project you'd likely have a start page view here instead
            return Redirect("/index.html");
        }
    }
}