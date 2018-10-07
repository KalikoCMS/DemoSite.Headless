namespace DemoSite.Headless {
    using System.Web.Http;
    using System.Web.Http.Cors;

    public class WebApiConfig {
        public static void Register(HttpConfiguration config) {
            // If you will request content data from another domain, you need to register it here:
            var cors = new EnableCorsAttribute("http://localhost:3000", "*", "*");
            config.EnableCors(cors);

            // KalikoCMS Content API needs attribute routes to be configured:
            config.MapHttpAttributeRoutes();
        }
    }
}