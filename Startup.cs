using Microsoft.Owin;
using Owin;

[assembly: OwinStartup(typeof(DemoSite.Headless.Startup))]
namespace DemoSite.Headless {

    public partial class Startup {
        public void Configuration(IAppBuilder app) {
            ConfigureAuth(app);
        }
    }
}