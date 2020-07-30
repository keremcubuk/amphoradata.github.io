(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{128:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return i})),a.d(t,"rightToc",(function(){return u})),a.d(t,"default",(function(){return d}));var n=a(1),r=a(6),o=(a(0),a(149)),c={id:"buy-data",title:"Buy Data",sidebar_label:"Buy Data"},i={unversionedId:"get_data/buy-data",id:"get_data/buy-data",isDocsHomePage:!1,title:"Buy Data",description:"You need to search the Amphora Data Catalogue to find the data you want. You need to purchase the Amphora after you find the one you want.",source:"@site/docs/get_data/buy-data.md",permalink:"/docs/get_data/buy-data",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/get_data/buy-data.md",sidebar_label:"Buy Data",sidebar:"someSidebar",previous:{title:"Find Data",permalink:"/docs/get_data/find-data"},next:{title:"Pull flat file from an Amphora",permalink:"/docs/get_data/pull-file"}},u=[{value:"Buy an Amphora",id:"buy-an-amphora",children:[]},{value:"Accept terms and conditions",id:"accept-terms-and-conditions",children:[]},{value:"View bought Amphora",id:"view-bought-amphora",children:[]}],p={rightToc:u};function d(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"You need to search the Amphora Data Catalogue to find the data you want. You need to purchase the Amphora after you find the one you want."),Object(o.b)("h2",{id:"buy-an-amphora"},"Buy an Amphora"),Object(o.b)("h4",{id:"buy-with-web-application"},"Buy with web application"),Object(o.b)("p",null,"To access any data in an Amphora, you need to purchase it. Many Amphora don't cost anything but still need to be purchased. Purchase the Amphora you want by clicking the ",Object(o.b)("inlineCode",{parentName:"p"},"Buy")," button in the top right of the Amphora page. "),Object(o.b)("h4",{id:"buy-programmatically"},"Buy programmatically"),Object(o.b)("p",null,"You can buy an Amphora programmatically. The command is "),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),"client.buy_amphora(amphora_id)\n")),Object(o.b)("p",null,"Note that you must accept the terms and conditions in the Amphora through the web app. You only need to do this once for each terms and conditions, not for each Amphora."),Object(o.b)("h2",{id:"accept-terms-and-conditions"},"Accept terms and conditions"),Object(o.b)("p",null,"You may need to accept the terms and conditions of the Amphora. These terms and conditions govern the use of the data and must be adhered to -  please read them carefully."),Object(o.b)("h2",{id:"view-bought-amphora"},"View bought Amphora"),Object(o.b)("p",null,"After you purchase the Amphora, it will show up on your organisation profile as a Debit."),Object(o.b)("p",null,"You can watch a video of finding and buying an Amphora on our ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.youtube.com/channel/UCdeAwh89DuwZKJ6JJK9TCnw"}),"YouTube")," Channel."))}d.isMDXComponent=!0},149:function(e,t,a){"use strict";a.d(t,"a",(function(){return l})),a.d(t,"b",(function(){return s}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function u(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=r.a.createContext({}),d=function(e){var t=r.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i({},t,{},e)),a},l=function(e){var t=d(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},h=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),l=d(a),h=n,s=l["".concat(c,".").concat(h)]||l[h]||b[h]||o;return a?r.a.createElement(s,i({ref:t},p,{components:a})):r.a.createElement(s,i({ref:t},p))}));function s(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,c=new Array(o);c[0]=h;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var p=2;p<o;p++)c[p]=a[p];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}h.displayName="MDXCreateElement"}}]);