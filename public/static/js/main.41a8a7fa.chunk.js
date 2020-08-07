(this.webpackJsonpcovid19tracker=this.webpackJsonpcovid19tracker||[]).push([[0],{103:function(e,t,a){},107:function(e,t,a){},207:function(e,t,a){},208:function(e,t,a){},209:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(6),c=a.n(r),l=(a(98),a(14)),i=a(241),s=a(242),u=a(243),d=a(236),m=a(240),f=(a(99),a(16)),p=a.n(f);var v=function(e){var t=e.title,a=e.today,n=e.total,r=e.onClick,c=void 0===r?function(){}:r,l=e.selected,i=void 0===l||l,s=e.color,u=void 0===s?"red":s;return console.log(u),o.a.createElement(d.a,{className:"infoBox "+(i?"selected ":"")+u,onClick:c},o.a.createElement(m.a,null,o.a.createElement("h1",{className:"infoBox__title",color:"textSecondary"}," ",t),o.a.createElement("h2",{className:"infoBox__today "+u},"+",p()(a).format("0.0a")," Today"),o.a.createElement("h2",{className:"infoBox__total",color:"textSecondary"}," ",p()(n).format("0.0a")," Total")))},h=(a(103),a(245)),y=a(246),E=a(244),b=a(247),g={cases:{hex:"#CC1034",rgb:"rgb(204, 16, 52)",rgba:function(e){return"rgb(204,16,52,"+e+")"},multiplier:800},recovered:{hex:"#7dd71d",rgb:"rgb(125,215,29)",rgba:function(e){return"rgb(125,215,29,"+e+")"},multiplier:1200},deaths:{hex:"#000000",rgba:function(e){return"rgb(0,0,0,"+e+")"},multiplier:2e3}};a(104);var j=function(e){var t=e.center,a=void 0===t?[39.557191,-7.8536599]:t,r=e.zoom,c=void 0===r?5:r,i=e.type,s=void 0===i?"cases":i,u=e.selectedCountry,d=void 0===u?"worldwide":u,m=e.countries,f=void 0===m?[]:m,v=e.className,j=void 0===v?"":v,w=Object(n.useState)(!1),O=Object(l.a)(w,2),_=O[0],k=O[1],N=Object(n.useState)({countryInfo:{flag:""},cases:0,recovered:0,deaths:0}),x=Object(l.a)(N,2),C=x[0],I=x[1];return Object(n.useEffect)((function(){if("worldwide"!==d){var e=f.find((function(e){return e.countryInfo.iso2===d}));I(e),k(!0)}else k(!1)}),[d]),o.a.createElement("div",{className:"map "+j},o.a.createElement(h.a,{center:a,minZoom:2,maxZoom:7,zoom:c},o.a.createElement(y.a,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'}),f.map((function(e,t){return o.a.createElement(E.a,{"data-key":e.countryInfo.iso2,key:t,center:[e.countryInfo.lat,e.countryInfo.long],fillOpacity:.5,color:g[s].hex,fillColor:g[s].hex,radius:Math.sqrt(e[s])*g[s].multiplier,onclick:function(t){I(e),k(!0)}})})),_&&o.a.createElement(b.a,{position:[C.countryInfo.lat,C.countryInfo.long],onClose:function(){k(!1)},className:"map__popup"},o.a.createElement("img",{src:C.countryInfo.flag,alt:"Flag"}),o.a.createElement("p",{className:"country"},C.country),o.a.createElement("p",{className:"data"},p()(C[s]).format("0,0")+" "+s," "))))};a(107);var w=function(e){var t=e.countries,a=void 0===t?[]:t;return o.a.createElement("div",{className:"table"},o.a.createElement("table",null,o.a.createElement("tbody",null,a.map((function(e){return o.a.createElement("tr",{key:e.country},o.a.createElement("td",null,o.a.createElement("img",{src:e.countryInfo.flag,alt:"Flag"})),o.a.createElement("td",null,e.country),o.a.createElement("td",{className:"right-td"},o.a.createElement("p",null,"Cases:",o.a.createElement("strong",null,p()(e.cases).format("0.0a"))),o.a.createElement("p",null,"Recovered:",o.a.createElement("strong",null,p()(e.recovered).format("0.0a"))),o.a.createElement("p",null,"Deaths:",o.a.createElement("strong",null,p()(e.deaths).format("0.0a")))))})))))},O=a(88),_=(a(207),{legend:{display:!1},elements:{point:{radius:0}},maintainAspectRatio:!1,tooltips:{mode:"index",intersect:!1,callbacks:{label:function(e,t){return p()(e.value).format("+0,0")}}},scales:{xAxes:[{type:"time",time:{format:"MM/DD/YY",tooltipFormat:"ll"}}],yAxes:[{gridLines:{display:!1},ticks:{callback:function(e,t,a){return p()(e).format("0a")}}}]}});var k=function(e){var t=e.country,a=void 0===t?"worldwide":t,r=e.type,c=void 0===r?"cases":r,i=Object(n.useState)(null),s=Object(l.a)(i,2),u=s[0],d=s[1],m=Object(n.useState)([]),f=Object(l.a)(m,2),p=f[0],v=f[1],h=Object(n.useState)([]),y=Object(l.a)(h,2),E=y[0],b=y[1];function j(e){var t=Object.keys(e).length>0?Object.keys(e)[0]:0,a=e[t];return delete e[t],Object.keys(e).map((function(t,n){var o=e[t]-a;return o<0&&(o=0),a=e[t],{x:t,y:o}}))}return Object(n.useEffect)((function(){fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=120").then((function(e){return e.json()})).then((function(e){d(e);var t=j(e[c]);b(t)})),fetch("https://disease.sh/v3/covid-19/historical?lastdays=120").then((function(e){return e.json()})).then((function(e){v(e)}))}),[]),Object(n.useEffect)((function(){if("worldwide"===a){if(null==u)return void b([]);console.log(u[c]);var e=j(u[c]);b(e)}else{var t=p.find((function(e){return e.country===a}));if(t&&"timeline"in t){e=j(t.timeline[c]);b(e)}else b()}}),[a,c]),o.a.createElement("div",{className:"chart"},o.a.createElement(O.Line,{options:_,data:{datasets:[{backgroundColor:g[c].rgba(.5),borderColor:g[c].hex,data:E}]}}))};a(208);var N=function(){var e=Object(n.useState)("worldwide"),t=Object(l.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)("cases"),f=Object(l.a)(c,2),p=f[0],h=f[1],y=Object(n.useState)(null),E=Object(l.a)(y,2),b=E[0],g=E[1],O=Object(n.useState)([]),_=Object(l.a)(O,2),N=_[0],x=_[1],C=Object(n.useState)({cases:0,todayCases:0,deaths:0,todayDeaths:0,recovered:0,todayRecovered:0}),I=Object(l.a)(C,2),S=I[0],D=I[1],B=Object(n.useState)([0,0]),R=Object(l.a)(B,2),F=R[0],M=R[1],z=Object(n.useState)(2),A=Object(l.a)(z,2),W=A[0],T=A[1];return Object(n.useEffect)((function(){fetch("https://disease.sh/v3/covid-19/all").then((function(e){return e.json()})).then((function(e){D(e),g(e)})),fetch("https://disease.sh/v3/covid-19/countries").then((function(e){return e.json()})).then((function(e){x(e),console.log(e)}))}),[]),o.a.createElement("div",{className:"app"},o.a.createElement("div",{className:"app__left"},o.a.createElement("div",{className:"app__header"},o.a.createElement("h1",null,"COVID-19 TRACKER"),o.a.createElement("div",{className:"app__selector"},o.a.createElement("img",{src:"worldwide"===a?"https://upload.wikimedia.org/wikipedia/commons/2/2f/Flag_of_the_United_Nations.svg":N.find((function(e){return e.countryInfo.iso2===a})).countryInfo.flag,alt:"Flag"}),o.a.createElement(i.a,{variant:"outlined"},o.a.createElement(s.a,{value:a,onChange:function(e){var t=e.target.value;if(r(t),"worldwide"===t&&null!=b)D(b),T(2),M(0,0);else{var a=N.find((function(e){return e.countryInfo.iso2===t}));T(5),M([a.countryInfo.lat,a.countryInfo.long]),D(a)}}},o.a.createElement(u.a,{key:0,value:"worldwide"},"Worldwide"),N.map((function(e,t){return o.a.createElement(u.a,{key:t+1,value:e.countryInfo.iso2},e.country)})))))),o.a.createElement("div",{className:"app__infoboxes"},o.a.createElement(v,{title:"Cases",today:S.todayCases,total:S.cases,selected:"cases"===p,color:"red",onClick:function(e){h("cases")}}),o.a.createElement(v,{title:"Recoveries",today:S.todayRecovered,total:S.recovered,selected:"recovered"===p,color:"green",onClick:function(e){h("recovered")}}),o.a.createElement(v,{title:"Deaths",today:S.todayDeaths,total:S.deaths,selected:"deaths"===p,color:"black",onClick:function(e){h("deaths")}})),o.a.createElement(j,{className:"app__map",type:p,selectedCountry:a,countries:N,zoom:W,center:F})),o.a.createElement("div",{className:"app__right"},o.a.createElement(d.a,{className:"app__right__card"},o.a.createElement(m.a,{className:"app__right__card"},o.a.createElement("div",{className:"app__information"},o.a.createElement("h3",null,"Data By Country"),o.a.createElement(w,{countries:N}),o.a.createElement("h3",null,"worldwide"===a?"Worldwide":N.find((function(e){return e.countryInfo.iso2===a})).country," new ",p),o.a.createElement(k,{type:p,country:"worldwide"===a?"worldwide":N.find((function(e){return e.countryInfo.iso2===a})).country}))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},93:function(e,t,a){e.exports=a(209)},98:function(e,t,a){},99:function(e,t,a){}},[[93,1,2]]]);
//# sourceMappingURL=main.41a8a7fa.chunk.js.map