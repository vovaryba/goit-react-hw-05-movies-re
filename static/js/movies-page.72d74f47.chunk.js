"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[493],{990:function(e,t,n){n.r(t),n.d(t,{default:function(){return m}});var r=n(413),c=n(885),o=n(791),u=n(504),a=n(871),i=n(938),s=n(577),f=n(333),l=n.n(f),h=n(207),p="MoviesPage_searchform__-j83n",d=n(184),m=function(){var e=(0,a.s0)(),t=(0,a.TH)(),n=(0,o.useState)([]),f=(0,c.Z)(n,2),m=f[0],v=f[1],b=(0,u.lr)(),x=(0,c.Z)(b,2),y=x[0],k=(x[1],y.get("query"));(0,o.useEffect)((function(){k&&h.WK(k).then((function(e){return v(e.results)}))}),[k]);var j=(0,i.cI)({defaultValues:{request:""}}),g=j.register,q=j.handleSubmit,w=j.reset,_=j.formState.errors;return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)("form",{onSubmit:q((function(n){var c=n.request;h.WK(c).then((function(e){return v(e.results)})),w(),e((0,r.Z)((0,r.Z)({},t),{},{search:"query=".concat(c)}))})),autoComplete:"off",className:p,children:[(0,d.jsx)("input",(0,r.Z)({type:"text",name:"request",autoFocus:!0},g("request",{required:!0}))),(0,d.jsx)("button",{type:"submit",children:"Search"}),_.request&&(0,d.jsx)("span",{style:{display:"none"},children:s.Am.error("Please enter the request")})]}),m.length>0&&(0,d.jsx)("ul",{children:m.map((function(e){return(0,d.jsx)("li",{children:(0,d.jsx)(u.rU,{to:"/movies/".concat((n="".concat(e.title," ").concat(e.id),l()(n,{lower:!0,strict:!0}))),state:{from:{location:t,label:"Go back"}},children:e.title})},e.id);var n}))})]})}},207:function(e,t,n){n.d(t,{wr:function(){return f},Mc:function(){return l},uV:function(){return h},Hx:function(){return p},WK:function(){return d}});var r=n(861),c=n(757),o=n.n(c),u="https://api.themoviedb.org/3",a="dc08feb60c6ae64654b90b4c6566ac10";function i(){return s.apply(this,arguments)}function s(){return s=(0,r.Z)(o().mark((function e(){var t,n,r,c=arguments;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=c.length>0&&void 0!==c[0]?c[0]:"",n=c.length>1&&void 0!==c[1]?c[1]:{},e.next=4,fetch(t,n);case 4:if(!(r=e.sent).ok){e.next=11;break}return e.next=8,r.json();case 8:e.t0=e.sent,e.next=12;break;case 11:e.t0=Promise.reject(new Error("Not found"));case 12:return e.abrupt("return",e.t0);case 13:case"end":return e.stop()}}),e)}))),s.apply(this,arguments)}function f(){return i("".concat(u,"/trending/movie/day?api_key=").concat(a))}function l(e){return i("".concat(u,"/movie/").concat(e,"?api_key=").concat(a))}function h(e){return i("".concat(u,"/movie/").concat(e,"/credits?api_key=").concat(a))}function p(e){return i("".concat(u,"/movie/").concat(e,"/reviews?api_key=").concat(a))}function d(e){return i("".concat(u,"/search/movie?api_key=").concat(a,"&query=").concat(e,"&page=1"))}}}]);
//# sourceMappingURL=movies-page.72d74f47.chunk.js.map