(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,t,n){e.exports=n(42)},21:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(15),o=n.n(l),c=n(2),i=n(3),s=n(5),u=n(4),d=n(6),h=(n(21),n(8)),m=n.n(h),v=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={startPage:null,children:null},n}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;setTimeout(function(){return e.loadStartPage()},1e3)}},{key:"loadStartPage",value:function(){var e=this;m.a.get("".concat("http://localhost:59558/contentapi/v1.0/","page/startpage")).then(function(t){var n=t.data;e.setState({startPage:n}),e.loadChildren(n.pageId)})}},{key:"loadChildren",value:function(e){var t=this;m.a.get("".concat("http://localhost:59558/contentapi/v1.0/","page/").concat(e,"/children")).then(function(e){var n=e.data;t.setState({children:n})})}},{key:"renderContent",value:function(){var e=this.state.startPage;if(null==e)return r.a.createElement("div",{className:"loading"},"Loading content from server...");var t=e.properties,n=t.heading,a=t.mainbody,l=t.topimage;return r.a.createElement("div",{className:"cms"},l&&r.a.createElement("img",{src:"http://localhost:59558"+l.imageUrl,alt:l.description}),r.a.createElement("h2",null,n&&n.value),a&&r.a.createElement("div",{dangerouslySetInnerHTML:{__html:a.value}}))}},{key:"renderChildren",value:function(){var e=this.state.children;return null==e?r.a.createElement("div",{className:"loading"},"Loading content from server..."):r.a.createElement("div",null,e.map(function(e){var t=e.properties,n=t.heading,a=t.mainbody;return r.a.createElement("div",{className:"cms"},r.a.createElement("h2",null,n&&n.value),a&&r.a.createElement("div",{dangerouslySetInnerHTML:{__html:a.value}}))}))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Headless demo using React"),r.a.createElement("p",null,"Content below is fetched from ",r.a.createElement("strong",null,"Kaliko CMS")," using the content API. ",r.a.createElement("i",null,"(A one second delay has been added to the loader so that the loading can be seen.)")),r.a.createElement("div",null,this.renderContent()),r.a.createElement("h2",null,"Posts loaded from the CMS"),this.renderChildren())}}]),t}(a.Component),g=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("main",{className:"main"},r.a.createElement(v,null))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[16,2,1]]]);
//# sourceMappingURL=main.95d0adcd.chunk.js.map