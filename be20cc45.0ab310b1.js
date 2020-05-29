(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{191:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return c})),t.d(a,"metadata",(function(){return i})),t.d(a,"rightToc",(function(){return l})),t.d(a,"default",(function(){return s}));var r=t(1),n=t(9),o=(t(0),t(214)),c={id:"find-data",title:"Find Data",sidebar_label:"Find Data"},i={id:"find-data",title:"Find Data",description:"You need to search the Amphora Data Catalogue to find the data you want. You need to purchase the Amphora after you find the one you want.",source:"@site/docs/find-data.md",permalink:"/docs/find-data",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/find-data.md",sidebar_label:"Find Data",sidebar:"someSidebar",previous:{title:"What is an Amphora",permalink:"/docs/what-is-amphora"},next:{title:"Buy Data",permalink:"/docs/buy-data"}},l=[{value:"Search with web app",id:"search-with-web-app",children:[]},{value:"Search programmatically",id:"search-programmatically",children:[]}],p={rightToc:l};function s(e){var a=e.components,t=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,t,{components:a,mdxType:"MDXLayout"}),Object(o.b)("p",null,"You need to search the Amphora Data Catalogue to find the data you want. You need to purchase the Amphora after you find the one you want."),Object(o.b)("h2",{id:"search-with-web-app"},"Search with web app"),Object(o.b)("p",null,"To find an Amphora, click Discover in the header. This will take you to a list of all Amphoras on the platform. "),Object(o.b)("p",null,"You can search this list multiple ways "),Object(o.b)("p",null,Object(o.b)("img",Object(r.a)({parentName:"p"},{src:"../img/DataMarketSearch.jpg",alt:"Data market search"}))),Object(o.b)("p",null,"You can use the advanced search buttons to search for Amphora by\n1) Keywords\n2) Location\n3) Labels"),Object(o.b)("h4",{id:"search-with-map"},"Search with map"),Object(o.b)("p",null,"You can also view the data sets on a map if there is a specific location you are looking for."),Object(o.b)("h2",{id:"search-programmatically"},"Search programmatically"),Object(o.b)("p",null,"You can search for Amphora with the python SDK (v0.10+). The command is"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-py"}),"search_for_amphorae\n")),Object(o.b)("p",null,"You can search for Amphora by labels, location, or a term. You can search with Boolean OR and AND operators too."),Object(o.b)("p",null,"Full code for searching is below"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-py"}),"credentials = Credentials(username=your_username, password=your_password)\nclient = AmphoraDataRepositoryClient(credentials)\n\n# Search by location\namphora_list = client.search_for_amphorae(lat = -28.641, lon = 153.445, dist = 50)\n\n# Search by labels\namphora_list = client.search_for_amphorae(labels = 'forecast')\n\n# Search by term\namphora_list = client.search_for_amphorae(term = 'rainfall')\n\n# Search all together with OR\namphora_list = client.search_for_amphorae(lat = -28.641, lon = 153.445, dist = 50, labels = 'forecast', term = 'rainfall', search_term = 'OR')\n\n# Search all together with AND\namphora_list = client.search_for_amphorae(lat = -28.641, lon = 153.445, dist = 50, labels = 'forecast', term = 'rainfall', search_term = 'AND')\n")),Object(o.b)("h4",{id:"get-your-own-amphoras"},"Get your own Amphoras"),Object(o.b)("p",null,"You can also get the list of your own Amphoras with"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-py"}),"client.get_your_amphorae()\n")))}s.isMDXComponent=!0},214:function(e,a,t){"use strict";t.d(a,"a",(function(){return u})),t.d(a,"b",(function(){return m}));var r=t(0),n=t.n(r);function o(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function c(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?c(Object(t),!0).forEach((function(a){o(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var p=n.a.createContext({}),s=function(e){var a=n.a.useContext(p),t=a;return e&&(t="function"==typeof e?e(a):i({},a,{},e)),t},u=function(e){var a=s(e.components);return n.a.createElement(p.Provider,{value:a},e.children)},h={inlineCode:"code",wrapper:function(e){var a=e.children;return n.a.createElement(n.a.Fragment,{},a)}},b=Object(r.forwardRef)((function(e,a){var t=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(t),b=r,m=u["".concat(c,".").concat(b)]||u[b]||h[b]||o;return t?n.a.createElement(m,i({ref:a},p,{components:t})):n.a.createElement(m,i({ref:a},p))}));function m(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=t.length,c=new Array(o);c[0]=b;var i={};for(var l in a)hasOwnProperty.call(a,l)&&(i[l]=a[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var p=2;p<o;p++)c[p]=t[p];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);