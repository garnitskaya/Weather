(this.webpackJsonpweather=this.webpackJsonpweather||[]).push([[0],[,,,,,,,,,,,,,function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),s=n(6),a=n.n(s),i=n(2),o=n(3),u=n.n(o),l=n(5),j=n(7),d=function e(){var t=this;Object(j.a)(this,e),this._apiBase="https://api.openweathermap.org/data/2.5/weather",this._apiKey="appid=60f6d2438edc03c76131adc3db79b9cb",this.getResource=function(){var e=Object(l.a)(u.a.mark((function e(t){var n,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:if((n=e.sent).ok){e.next=5;break}throw new Error("Could not fetch ".concat(t,", status:").concat(n.status));case 5:return e.next=7,n.json();case 7:return c=e.sent,e.abrupt("return",c);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.gettingWeather=function(){var e=Object(l.a)(u.a.mark((function e(n){var c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource("".concat(t._apiBase,"?q=").concat(n,"&units=metric&lang=ru&").concat(t._apiKey));case 2:return c=e.sent,e.abrupt("return",t.transformSity(c));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.transformSity=function(e){return{icon:" https://openweathermap.org/img/wn/".concat(e.weather[0].icon,"@2x.png"),name:e.name,country:e.sys.country,description:e.weather[0].description,feelsLike:Math.round(e.main.feels_like)+"\xb0C",temp:Math.round(e.main.temp)+"\xb0C",wind:Math.round(e.wind.speed)+"\u043c/\u0441",sunrise:e.sys.sunrise+e.timezone,sunset:e.sys.sunset+e.timezone,pressure:Math.round(.750063755419211*e.main.pressure)+"\u043c\u043c \u0440\u0442.\u0441\u0442.",humidity:e.main.humidity+"%",timezone:e.timezone}}},h=(n(13),n(0)),b=function(e){return Object(h.jsxs)("form",{className:"form",onSubmit:e.onSubmit,children:[Object(h.jsx)("input",{name:"city",type:"text",placeholder:"\u041f\u043e\u0433\u043e\u0434\u0430 \u0432 \u0432\u0430\u0448\u0435\u043c \u0433\u043e\u0440\u043e\u0434\u0435",onChange:e.onChangeCity,value:e.cityName}),Object(h.jsx)("button",{children:"\u041f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u043f\u043e\u0433\u043e\u0434\u0443"})]})},m=n.p+"static/media/night.8afd95ec.jpg",p=n.p+"static/media/blue_sky.3311531d.jpg",f=(n(15),function(e){var t=e.city,n=t.icon,r=t.name,s=t.country,a=t.description,o=t.feelsLike,u=t.temp,l=t.wind,j=t.sunrise,d=t.sunset,b=t.pressure,f=t.humidity,O=t.timezone,x=Date.now()/1e3+O,y=(x-j)*(100/(d-j)),v=Object(c.useState)(x),g=Object(i.a)(v,2),w=g[0],A=g[1];Object(c.useEffect)((function(){var e=setInterval((function(){return A((function(e){return e+1}))}),1e3);return function(){clearInterval(e)}}),[]);var _,M=function(e){var t=new Date(1e3*e),n=t.getUTCHours(),c=t.getUTCMinutes()<10?"0"+t.getUTCMinutes():t.getUTCMinutes();return"".concat(n,":").concat(c)};return x<=j?(_={transform:"rotate(0deg)"},document.querySelector("body").style.background="url(".concat(m,") center center/cover no-repeat")):x>d?(_={transform:"rotate(100deg)"},document.querySelector("body").style.background="url(".concat(m,") center center/cover no-repeat")):(j<x||x<d)&&(_={transform:"rotate(".concat(y,"deg)")},document.querySelector("body").style.background="url(".concat(p,") center center/cover no-repeat ")),Object(h.jsx)("div",{className:"weather",children:r?Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("div",{className:"weater__time",children:M(w)}),Object(h.jsxs)("div",{className:"weather__items",children:[Object(h.jsx)("img",{className:"weather__icon",src:n,alt:n}),Object(h.jsxs)("div",{className:"weather__item",children:[Object(h.jsxs)("span",{children:[" ",u]})," ",r]})]}),Object(h.jsxs)("ul",{className:"weather__list",children:[Object(h.jsxs)("li",{children:["\u041c\u0435\u0441\u0442\u043e\u043f\u043e\u043b\u043e\u0436\u0435\u043d\u0438\u0435: ",r,", ",s]}),Object(h.jsxs)("li",{children:["\u0422\u0435\u043c\u043f\u0435\u0440\u0430\u0442\u0443\u0440\u0430: ",u," "]}),Object(h.jsxs)("li",{children:["\u041f\u043e \u043e\u0449\u0443\u0449\u0435\u043d\u0438\u044e: ",o," "]}),Object(h.jsxs)("li",{children:["\u0412\u0435\u0442\u0435\u0440: ",l]}),Object(h.jsxs)("li",{children:["\u041e\u0441\u0430\u0434\u043a\u0438: ",a]}),Object(h.jsxs)("li",{children:["\u0414\u0430\u0432\u043b\u0435\u043d\u0438\u0435: ",b]}),Object(h.jsxs)("li",{children:["\u0412\u043b\u0430\u0436\u043d\u043e\u0441\u0442\u044c: ",f]}),Object(h.jsxs)("li",{children:[Object(h.jsx)("div",{className:"weather__list-line",children:Object(h.jsx)("span",{style:_})}),Object(h.jsxs)("div",{className:"weather__list-sun",children:[Object(h.jsxs)("span",{children:["\u0412\u043e\u0441\u0445\u043e\u0434: ",M(j)," "]}),Object(h.jsxs)("span",{children:["\u0417\u0430\u043a\u0430\u0442: ",M(d)," "]})]})]})]})]}):Object(h.jsx)("h2",{children:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0433\u043e\u0440\u043e\u0434\u0430"})})}),O=function(){return Object(h.jsx)("div",{children:Object(h.jsxs)("svg",{style:{display:"block",margin:"50px auto"},width:"64px",height:"64px",viewBox:"0 0 128 128",children:[Object(h.jsx)("path",{fill:"#000000",className:"cls-1",d:"M64 127.75a64 64 0 1 1 64-64 64 64 0 0 1-64 64zM125.72 65h-13.75A47.86 47.86 0 0 1 65 111.73v13.74A61.73 61.73 0 0 0 125.72 65zM65 65v21.95A23.2 23.2 0 0 0 87.2 65H65zm22.2-2A23.22 23.22 0 0 0 65 40.55V63h22.23zm-46.37 2A23.2 23.2 0 0 0 63 86.95V65H40.8zM63 63V40.55A23.22 23.22 0 0 0 40.78 63H63zm-24.2 2H18.3A45.85 45.85 0 0 0 63 109.72V88.95A25.2 25.2 0 0 1 38.8 65zm0-2A25.2 25.2 0 0 1 63 38.55V18.03A45.85 45.85 0 0 0 18.28 63h20.5zM65 38.55A25.2 25.2 0 0 1 89.2 63h20.77A45.85 45.85 0 0 0 65 18.03v20.52zM89.2 65A25.2 25.2 0 0 1 65 88.95v20.77A45.85 45.85 0 0 0 109.97 65H89.2zM63 125.47v-13.75A47.86 47.86 0 0 1 16.28 65h-14A61.73 61.73 0 0 0 63 125.47zM2.27 63h14A47.86 47.86 0 0 1 63 16.03v-14A61.73 61.73 0 0 0 2.27 63zM65 2.02v14A47.86 47.86 0 0 1 111.98 63h13.75A61.73 61.73 0 0 0 65 2.02z"}),Object(h.jsxs)("g",{children:[Object(h.jsxs)("linearGradient",{id:"linear-gradient",children:[Object(h.jsx)("stop",{offset:"0%",stopColor:"#000000"}),Object(h.jsx)("stop",{offset:"100%",stopColor:"#ffffff"})]}),Object(h.jsx)("path",{fill:"url(#linear-gradient)",fillOpacity:"0.5",d:"M65.128,64.894l0.025,60.968a61.781,61.781,0,0,1-32.011-8.315q-0.705-.406-1.4-0.83L62.531,63.4Z"}),Object(h.jsx)("animateTransform",{attributeName:"transform",type:"rotate",from:"0 64 64",to:"360 64 64",dur:"2280ms",repeatCount:"indefinite"}),Object(h.jsx)("path",{fill:"#000000",d:"M62.531,63.4l2.6,1.5L34.257,118.374l-2.6-1.5Z"})]}),Object(h.jsx)("circle",{fill:"#000000",cx:"55.641",cy:"97.563",r:"6.047",children:Object(h.jsx)("animate",{attributeName:"opacity",dur:"2280ms",begin:"0s",repeatCount:"indefinite",keyTimes:"0;1",values:"1;0"})})]})})};n(16);var x=function(){var e=Object(c.useState)([]),t=Object(i.a)(e,2),n=t[0],r=t[1],s=Object(c.useState)(""),a=Object(i.a)(s,2),o=a[0],u=a[1],l=Object(c.useState)(!1),j=Object(i.a)(l,2),m=j[0],p=j[1],x=Object(c.useState)(!1),y=Object(i.a)(x,2),v=y[0],g=y[1],w=new d,A=function(e){r(e),u(""),p(!1),g(!1)},_=function(){p(!0),r([]),g(!1),u("")},M=v?Object(h.jsx)(O,{}):null,z=m?Object(h.jsx)("h2",{children:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0433\u043e\u0440\u043e\u0434\u0430"}):null,C=M||z?null:Object(h.jsx)(f,{city:n});return Object(h.jsxs)("div",{className:"app",children:[Object(h.jsx)("h1",{children:"\u043f\u043e\u0433\u043e\u0434\u0430"}),Object(h.jsx)(b,{onSubmit:function(e){e.preventDefault(),g(!0),o?w.gettingWeather(o).then(A).catch(_):_()},cityName:o,onChangeCity:function(e){u(e.target.value)}}),z,M,C]})};n(17);a.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(x,{})}),document.getElementById("root"))}],[[18,1,2]]]);
//# sourceMappingURL=main.1cf919bc.chunk.js.map