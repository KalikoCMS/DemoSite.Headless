namespace DemoSite.Headless.Models.Pages {
    using System.ComponentModel.DataAnnotations;
    using KalikoCMS.Attributes;
    using KalikoCMS.Core;
    using KalikoCMS.PropertyType;

    [PageType("FD430DFC-D37D-4BF9-AF77-0B7936BCCE1C", "Article page")]
    public class ArticlePage : CmsPage {
        [Required]
        [Property("Heading")]
        public virtual StringProperty Heading { get; set; }

        [Required]
        [Property("Main body")]
        public virtual HtmlProperty MainBody { get; set; }
    }
}