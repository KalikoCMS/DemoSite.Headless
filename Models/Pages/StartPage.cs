namespace DemoSite.Headless.Models.Pages {
    using System.ComponentModel.DataAnnotations;
    using KalikoCMS.Attributes;
    using KalikoCMS.Core;
    using KalikoCMS.PropertyType;

    [PageType("39A3CCF8-D8BC-4459-B920-9B7E0D07E61D", "Start page", AllowedTypes = new [] { typeof(ArticlePage)})]
    public class StartPage : CmsPage {
        [Required]
        [ImageProperty("Top image", Width = 960, Height = 240)]
        public virtual ImageProperty TopImage { get; set; }

        [Required]
        [Property("Heading")]
        public virtual StringProperty Heading { get; set; }

        [Property("Main body")]
        public virtual HtmlProperty MainBody { get; set; }
    }
}