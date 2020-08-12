(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{100:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return p}));var n=a(1),r=a(6),o=(a(0),a(152)),i={id:"pull-time-series",title:"Pull Time Series (Signal) from an Amphora",sidebar_label:"Pull Time Series"},l={unversionedId:"get_data/pull-time-series",id:"get_data/pull-time-series",isDocsHomePage:!1,title:"Pull Time Series (Signal) from an Amphora",description:"You must have purchased an Amphora to consume it's data",source:"@site/docs/get_data/pull-time-series.md",permalink:"/docs/get_data/pull-time-series",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/get_data/pull-time-series.md",sidebar_label:"Pull Time Series",sidebar:"someSidebar",previous:{title:"Pull flat file from an Amphora",permalink:"/docs/get_data/pull-file"},next:{title:"Access Levels",permalink:"/docs/get_data/access-levels"}},c=[{value:"Get Signal on web app",id:"get-signal-on-web-app",children:[]},{value:"Get Signal programmatically",id:"get-signal-programmatically",children:[]}],s={rightToc:c};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"You must have purchased an Amphora to consume it's data")),Object(o.b)("p",null,"Signals are live time-series. You can view and download Signals, either via the web application, or by using the REST API or any Amphora Data client SDK."),Object(o.b)("h2",{id:"get-signal-on-web-app"},"Get Signal on web app"),Object(o.b)("p",null,"To view an Amphora Signal click ",Object(o.b)("inlineCode",{parentName:"p"},"Signals")," on the left of the Amphora page. You will see a set of graphs similar to below."),Object(o.b)("p",null,Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"/img/view_signal_amphora.png",alt:"View signal image"}))),Object(o.b)("p",null,"This is an exploratory dashboard and it enables you to discover the data in a simple format. You can choose different signals, different time boxes, and filter by specific values or properties. "),Object(o.b)("p",null,"You can download the selected timeseries by clicking the ",Object(o.b)("inlineCode",{parentName:"p"},"...")," botton and selecting ",Object(o.b)("inlineCode",{parentName:"p"},"Download"),"."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Note that not all Amphoras contain Signals.")),Object(o.b)("h2",{id:"get-signal-programmatically"},"Get Signal programmatically"),Object(o.b)("p",null,"Most of the time you will want to consume data programmatically. You can check out the latest SDKs, sample code and tutorials at ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/amphoradata"}),"GitHub"),". We provide a public Open API specification at ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://beta.amphoradata.com/swagger/"}),"amphoradata.com/swagger"),". We currently generate and provide a C# SDK, Node.js SDK, and Python SDK."),Object(o.b)("h4",{id:"python"},"Python"),Object(o.b)("p",null,"You can pull a file with python using"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),"amphora.get_signals()\n")),Object(o.b)("p",null,"The basic code to get started pulling files is"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),"# Import Amphora modules\nfrom amphora.client import AmphoraDataRepositoryClient, Credentials\n\n# Import non-Amphora modules\nimport os\n\n# Login to amphoradata.com\ncredentials = Credentials(username=os.getenv('username'), password=os.getenv('password')) \nclient = AmphoraDataRepositoryClient(credentials)\n\n# Get Amphora object\namphora = client.get_amphora(Amphora_id) \n\n# Pull signal\nsignals = amphora.get_signals()\n")),Object(o.b)("p",null,"You can download this code from ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/amphoradata/samples/blob/master/generic_templates/Pull_a_signal.py"}),"GitHub"),". You can watch a ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.youtube.com/watch?v=tvRC5bBfEsA"}),"tutorial video")," too. There is also more detailed docs in the Python SDK section."),Object(o.b)("h4",{id:"c"},"C#"),Object(o.b)("p",null,"Code for pulling signals can be found on ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/amphoradata/dotnet-sdk/tree/master/sample"}),"GitHub"),". We are expanding our docs for C# so stay tuned for more details."),Object(o.b)("h4",{id:"nodejs"},"Node.js"),Object(o.b)("p",null,"Code for pulling signals can be found on ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/amphoradata/nodejs-sdk/tree/master/samples"}),"GitHub"),". We are expanding our docs for Node.js so stay tuned for more details."))}p.isMDXComponent=!0},152:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return d}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),p=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l({},t,{},e)),a},u=function(e){var t=p(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(a),m=n,d=u["".concat(i,".").concat(m)]||u[m]||b[m]||o;return a?r.a.createElement(d,l({ref:t},s,{components:a})):r.a.createElement(d,l({ref:t},s))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var s=2;s<o;s++)i[s]=a[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);