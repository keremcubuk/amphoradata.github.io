(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{218:function(e,a,t){"use strict";t.r(a);var n=t(1),o=t(0),r=t.n(o),i=t(250),l=(t(244),t(245)),c=t.n(l),s=t(251),m=t(133),u=t.n(m),d=t(246),h=t(249);var w=[{title:r.a.createElement(r.a.Fragment,null,"Weather forecasts"),imageUrl:"img/forecast_image.PNG",description:r.a.createElement(r.a.Fragment,null,"7 day weather forecasts for any location in Australia 100s of locations available now for $2 per month. More available on request.")},{title:r.a.createElement(r.a.Fragment,null,"Weather actuals"),imageUrl:"img/weather_actuals.PNG",description:r.a.createElement(r.a.Fragment,null,"Real-time actuals of weather parameters for any location in Australia 100s of locations available now for $2 per month. More available on request.")},{title:r.a.createElement(r.a.Fragment,null,"Solar Irradiance"),imageUrl:"img/solar_image.PNG",description:r.a.createElement(r.a.Fragment,null,"Real-time actuals of solar irradiance for any location in Australia Any location available on request for $2 per month.")},{title:r.a.createElement(r.a.Fragment,null,"Comparison of actuals to month forecast\ufeff"),imageUrl:"img/month_forecast.PNG",description:r.a.createElement(r.a.Fragment,null,"Comparison of actual rainfall and temperature to BOM month forecast across Australia. Any location available on request for $2 per month.")}];function f(e){var a=e.imageUrl,t=e.title,n=e.description,o=Object(s.a)(a);return r.a.createElement("div",{className:c()("row",u.a.feature),style:{paddingBottom:"30px",paddingLeft:"60px"}},o&&r.a.createElement("div",{className:"text--center",style:{paddingLeft:"30px",paddingRight:"30px"}},r.a.createElement("img",{className:u.a.featureImage,src:o,alt:t})),r.a.createElement("div",{style:{paddingRight:"30px",width:"400px"}},r.a.createElement("h3",{className:"font_large"},t),r.a.createElement("p",{className:"font_medium"},n)))}a.default=function(){return r.a.createElement(i.a,{title:"Data Catalogue"},r.a.createElement(h.a,{tabs:d.a,heading:"Data Products",subheading:"Get the insights you need in 30 seconds"},r.a.createElement("div",null,w&&w.length&&r.a.createElement("section",{className:u.a.features},r.a.createElement("div",{className:"container"},r.a.createElement("div",null,w.map((function(e,a){return r.a.createElement(f,Object(n.a)({key:a},e))}))))))))}},246:function(e,a,t){"use strict";t.d(a,"b",(function(){return c})),t.d(a,"a",(function(){return s})),t.d(a,"c",(function(){return m})),t.d(a,"d",(function(){return u})),t.d(a,"e",(function(){return d})),t.d(a,"f",(function(){return w}));t(248),t(78);var n=t(0),o=t.n(n),r=t(244),i=t(245),l=t.n(i),c=(t(132),[{to:"/glaze/overview",name:"Overview"}]),s=[{to:"/how-we-help/find-data",name:"Vegetation"},{to:"/how-we-help/find-data-weather",name:"Weather"},{to:"/how-we-help/find-data-water",name:"Water"},{to:"/how-we-help/find-data-soil",name:"Soil"},{to:"/how-we-help/find-data-economic",name:"Economic"}],m=[{to:"/how-we-help/manage-data",name:"Impact"},{to:"/how-we-help/manage-data-how-it-works",name:"How it Works"},{to:"/how-we-help/manage-data-features",name:"Features"},{to:"/how-we-help/manage-data-success",name:"Success Stories"},{to:"/how-we-help/manage-data-details",name:"More Details"}],u=[{to:"/how-we-help/share-data",name:"Impact"},{to:"/how-we-help/share-data-how-it-works",name:"How it Works"},{to:"/how-we-help/share-data-features",name:"Features"},{to:"/how-we-help/share-data-success",name:"Success Stories"},{to:"/how-we-help/share-data-details",name:"More Details"}],d=[{to:"/how-we-help/simplified-integration",name:"Impact"},{to:"/how-we-help/simplified-integration-how-it-works",name:"How it Works"},{to:"/how-we-help/simplified-integration-features",name:"Features"},{to:"/how-we-help/simplified-integration-success",name:"Success Stories"},{to:"/how-we-help/simplified-integration-details",name:"More Details"}],h="undefined"!=typeof window,w=function(e){var a="";return h&&window&&window.location&&window.location.pathname&&(a=window.location.pathname.replace(/\/$/,"")),o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:l()("row row--no-gutters mt-4 text--center tabs_row")},e.tabs.map((function(e){return o.a.createElement("div",{key:e.to,className:"col"},o.a.createElement(r.a,{className:"font_medium_bold text--black",to:e.to},o.a.createElement("div",{className:l()("buttons_tab",e.to===a&&"tab_active")},e.name)))}))),e.children)}},247:function(e,a,t){"use strict";t.d(a,"a",(function(){return r}));var n=t(0),o=t.n(n),r=(t(132),function(e){return o.a.createElement("div",{className:"buttons"},e.children)})},248:function(e,a,t){var n=t(26).f,o=Function.prototype,r=/^\s*function ([^ (]*)/;"name"in o||t(10)&&n(o,"name",{configurable:!0,get:function(){try{return(""+this).match(r)[1]}catch(e){return""}}})},249:function(e,a,t){"use strict";t.d(a,"a",(function(){return c}));var n=t(0),o=t.n(n),r=t(244),i=t(246),l=t(247),c=function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row mt-12"},o.a.createElement("div",{className:"col col--8"},o.a.createElement("div",{className:"font_large_caps"},e.heading),o.a.createElement("div",{className:"font_large"},e.subheading)),o.a.createElement("div",{className:"col col--4"},e.button||o.a.createElement(r.a,{to:"https://identity.amphoradata.com/Register"},o.a.createElement(l.a,null,"Get Data")))),o.a.createElement(i.f,{tabs:e.tabs}),e.children))}}}]);