(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{141:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return m}));var n,i,o=t(0),r=t.n(o),c=t(153),l=t(159),s=[{title:"Static composition",imageUrl:"img/soil_composition.PNG",description:"Estimated soil composition up to 2 meters for any location in\n                Australia. Resolution is 90 m. 1000s of locations available for\n                free, more available upon request.",link:"https://app.amphoradata.com/Discover?"+(n="Soil",i=120,"SearchDefinition.Labels="+n+"&SearchDefinition.Take="+i+"&handler=MapView")},{title:"Real-time moisture",imageUrl:"img/soil_moisture_index.PNG",description:"  Remote sensing of soil moisture in surface layer with 1 week\n                delay. Resolution is 30m. Any global location available for free\n                on request.\n            "}];function m(){return r.a.createElement(c.a,{title:"Data Catalogue"},r.a.createElement(l.c,{tabs:l.b,heading:"Data Products",subheading:"Get the insights you need in 30 seconds"},r.a.createElement(l.a,{products:s})))}},154:function(e,a,t){"use strict";t.d(a,"a",(function(){return o}));var n=t(0),i=t.n(n),o=(t(49),function(e){return i.a.createElement("div",{className:"buttons"},e.children)})},159:function(e,a,t){"use strict";t.d(a,"b",(function(){return l})),t.d(a,"a",(function(){return E})),t.d(a,"c",(function(){return u}));var n=t(0),i=t.n(n),o=t(150),r=t(155),c=t.n(r),l=(t(49),[{to:"/data/vegetation",name:"Vegetation"},{to:"/data/weather",name:"Weather"},{to:"/data/water",name:"Water"},{to:"/data/soil",name:"Soil"},{to:"/data/economic",name:"Economic"}]),s="undefined"!=typeof window,m=function(e){var a="";return s&&window&&window.location&&window.location.pathname&&(a=window.location.pathname.replace(/\/$/,"")),i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:c()("row row--no-gutters mt-4 text--center tabs_row")},e.tabs.map((function(e){return i.a.createElement("div",{key:e.to,className:"col"},i.a.createElement(o.a,{className:"font_medium_bold text--black",to:e.to},i.a.createElement("div",{className:c()("buttons_tab",e.to===a&&"tab_active")},e.name)))}))),e.children)},d=t(154),u=function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"row mt-12"},i.a.createElement("div",{className:"col col--8"},i.a.createElement("div",{className:"font_large_caps"},e.heading),i.a.createElement("div",{className:"font_large"},e.subheading)),i.a.createElement("div",{className:"col col--4"},e.button||i.a.createElement(o.a,{to:"https://identity.amphoradata.com/Register"},i.a.createElement(d.a,null,"Get Data")))),i.a.createElement(m,{tabs:e.tabs}),e.children))},f=t(1),p=t(151),E=(t(51),function(e){var a=e.products;return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",null,a&&a.length&&i.a.createElement("section",{className:"data-products"},i.a.createElement("div",{className:"container"},a.map((function(e,a){return i.a.createElement(g,Object(f.a)({key:a},e))}))))))});function g(e){var a=e.imageUrl,t=e.title,n=e.description,o=e.link,r=Object(p.a)(a);return i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col"},r&&i.a.createElement("div",{className:"text--center",style:{paddingLeft:"30px",paddingRight:"30px"}},i.a.createElement("img",{src:r,alt:t}))),i.a.createElement("div",{className:"col"},i.a.createElement("h3",{className:"font_large"},t),i.a.createElement("p",{className:"font_medium"},n),o&&i.a.createElement("a",{target:"_blank",href:o},"View Data")))}}}]);