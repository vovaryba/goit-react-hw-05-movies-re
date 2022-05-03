"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[347],{743:function(e,n,t){t.r(n),t.d(n,{default:function(){return v}});var r=t(885),i=t(791),o=t(504),c=t(871),s=t(207),a={main_information:"MovieDetailsPage_main_information__LZJlA",poster:"MovieDetailsPage_poster__gDkbr",genre:"MovieDetailsPage_genre__WYkMc"},l=t(184),u=(0,i.lazy)((function(){return t.e(277).then(t.bind(t,495))})),d=(0,i.lazy)((function(){return t.e(912).then(t.bind(t,20))})),v=function(){var e,n,t,v,h,f,m,p=(0,c.TH)(),x=(0,c.s0)(),j=(0,c.UO)().slug.match(/[a-z0-9]+$/)[0],g=(0,i.useState)(null),_=(0,r.Z)(g,2),b=_[0],k=_[1];(0,i.useEffect)((function(){s.Mc(j).then(k)}),[j]);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("button",{type:"button",onClick:function(){var e,n,t;return x(null!==(e=null===p||void 0===p||null===(n=p.state)||void 0===n||null===(t=n.from)||void 0===t?void 0:t.location)&&void 0!==e?e:"/")},children:null!==(e=null===p||void 0===p||null===(n=p.state)||void 0===n||null===(t=n.from)||void 0===t?void 0:t.label)&&void 0!==e?e:"Back to trending movies"}),b&&34!==b.status_code?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("div",{className:a.main_information,children:[(0,l.jsx)("img",{className:a.poster,src:"https://image.tmdb.org/t/p/original".concat(b.poster_path),alt:b.title}),(0,l.jsxs)("div",{children:[(0,l.jsxs)("h1",{children:[b.title," (",b.release_date.split("-")[0],")"]}),(0,l.jsxs)("p",{children:["User Score: ",10*b.vote_average,"%"]}),(0,l.jsx)("h2",{children:"Overview"}),(0,l.jsx)("p",{children:b.overview}),(0,l.jsx)("h2",{children:"Genres"}),(0,l.jsx)("div",{className:a.genres,children:b.genres.map((function(e){return(0,l.jsx)("span",{className:a.genre,children:e.name},e.id)}))})]})]}),(0,l.jsxs)("div",{children:[(0,l.jsx)("p",{children:"Additional information"}),(0,l.jsxs)("ul",{children:[(0,l.jsx)("li",{children:(0,l.jsx)(o.OL,{to:"cast",state:{from:null!==(v=null===p||void 0===p||null===(h=p.state)||void 0===h?void 0:h.from)&&void 0!==v?v:"/movies"},children:"Cast"})}),(0,l.jsx)("li",{children:(0,l.jsx)(o.OL,{to:"reviews",state:{from:null!==(f=null===p||void 0===p||null===(m=p.state)||void 0===m?void 0:m.from)&&void 0!==f?f:"/movies"},children:"Reviews"})})]})]})]}):(0,l.jsx)("h2",{children:"The resource you requested could not be found."}),(0,l.jsx)(i.Suspense,{fallback:(0,l.jsx)("h2",{children:"Loading..."}),children:(0,l.jsxs)(c.Z5,{children:[(0,l.jsx)(c.AW,{path:"cast",element:(0,l.jsx)(u,{})}),(0,l.jsx)(c.AW,{path:"reviews",element:(0,l.jsx)(d,{})})]})})]})}},207:function(e,n,t){t.d(n,{wr:function(){return u},Mc:function(){return d},uV:function(){return v},Hx:function(){return h},WK:function(){return f}});var r=t(861),i=t(757),o=t.n(i),c="https://api.themoviedb.org/3",s="dc08feb60c6ae64654b90b4c6566ac10";function a(){return l.apply(this,arguments)}function l(){return l=(0,r.Z)(o().mark((function e(){var n,t,r,i=arguments;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=i.length>0&&void 0!==i[0]?i[0]:"",t=i.length>1&&void 0!==i[1]?i[1]:{},e.next=4,fetch(n,t);case 4:if(!(r=e.sent).ok){e.next=11;break}return e.next=8,r.json();case 8:e.t0=e.sent,e.next=12;break;case 11:e.t0=Promise.reject(new Error("Not found"));case 12:return e.abrupt("return",e.t0);case 13:case"end":return e.stop()}}),e)}))),l.apply(this,arguments)}function u(){return a("".concat(c,"/trending/movie/day?api_key=").concat(s))}function d(e){return a("".concat(c,"/movie/").concat(e,"?api_key=").concat(s))}function v(e){return a("".concat(c,"/movie/").concat(e,"/credits?api_key=").concat(s))}function h(e){return a("".concat(c,"/movie/").concat(e,"/reviews?api_key=").concat(s))}function f(e){return a("".concat(c,"/search/movie?api_key=").concat(s,"&query=").concat(e,"&page=1"))}}}]);
//# sourceMappingURL=movie-details-page.a51382fd.chunk.js.map