(this["webpackJsonpreact-template"]=this["webpackJsonpreact-template"]||[]).push([[0],{119:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(30),o=a.n(i),l=a(6),c=a(11),u=a(10),m=a(140),s=a(49),d=a(135),p=Object(s.a)(Object(s.a)({},d.a),{},{colors:Object(s.a)(Object(s.a)({},d.a.colors),{},{light:{},dark:{}})}),h=a(22),v=a(12),f=a(134),E=a(125),b=a(137),g=a(37),x=a(81),w=a(138),j=a(66),y=a(126),O=a(127),S=a(128);function C(){var e=Object(E.a)(),t=e.isOpen,a=e.onOpen,n=e.onClose,i=Object(u.b)(),o=i.colorMode,c=i.toggleColorMode,m=Object(f.a)(["reco"]),s=Object(l.a)(m,3),d=(s[0],s[1],s[2]),p="light"==o,C=p?"sun":"moon",k=p?"yellow":"gray",M=Object(v.g)(),_=function(){d("auth"),M.push("/"),window.location.reload()},z=function(){return r.a.createElement(b.a,{placement:"right",onClose:n,isOpen:t},r.a.createElement(b.d,null),r.a.createElement(b.c,null,r.a.createElement(b.b,null),r.a.createElement(g.e,{borderBottomWidth:"1px"},r.a.createElement(x.a,{direction:"row",justify:"flex-start",align:"center"},r.a.createElement(w.a,{name:"Dan Abrahmov",src:"https://bit.ly/dan-abramov"}),r.a.createElement(j.a,{variantColor:"red",variant:"outline",size:"sm",ml:"15px",onClick:_},"Logout"))),r.a.createElement(g.b,null,r.a.createElement(y.b,{styleType:"disc"},r.a.createElement(y.a,null,r.a.createElement(h.b,{to:"/",color:"cyan.500"},"Home")),r.a.createElement(y.a,null,r.a.createElement(h.b,{to:"/list",color:"cyan.500"},"List")),r.a.createElement(y.a,null,r.a.createElement(h.b,{to:"/swipe",color:"cyan.500"},"Swipe"))))))};return r.a.createElement(x.a,{width:"100%",direction:"column",justify:"flex-start",align:"center",padding:"15px 15px 30px 15px"},r.a.createElement(x.a,{width:"100%",direction:"row",justify:"space-between",align:"center"},r.a.createElement(O.a,{variant:"ghost",variantColor:k,"aria-label":"Call Sage",icon:C,size:"lg",onClick:function(){return c()}}),r.a.createElement(S.a,Object.assign({as:h.b},{to:"/"},{size:"2xl"}),"Reco"),r.a.createElement(w.a,{name:"Dan Abrahmov",src:"https://bit.ly/dan-abramov",onClick:a})),r.a.createElement(z,null))}var k=a(136);function M(){var e=function(){var e=["red","orange","yellow","green","teal","cyan","purple"];return e[Math.floor(Math.random()*e.length)]};return r.a.createElement(k.a,{columns:2,spacing:10,mr:"30px",ml:"30px",mt:"50px"},r.a.createElement(j.a,Object.assign({as:h.b},{to:"/swipe"},{height:"100px",variant:"outline",variantColor:e(),size:"lg"})," ","Swipe"," "),r.a.createElement(j.a,Object.assign({as:h.b},{to:"/list"},{height:"100px",variant:"outline",variantColor:e(),size:"lg"})," ","List"," "),r.a.createElement(j.a,Object.assign({as:h.b},{to:"/rate"},{height:"100px",variant:"outline",variantColor:e(),size:"lg"})," ","Rate"," "),r.a.createElement(j.a,Object.assign({as:h.b},{to:"/new"},{height:"100px",variant:"outline",variantColor:e(),size:"lg"})," ","New"," "))}var _=a(129),z=a(4),A=a(82),R=a(83),L=a(24),T=[{id:28,name:"Action"},{id:12,name:"Adventure"},{id:16,name:"Animation"},{id:35,name:"Comedy"},{id:80,name:"Crime"},{id:99,name:"Documentary"},{id:18,name:"Drama"},{id:10751,name:"Family"},{id:14,name:"Fantasy"},{id:36,name:"History"},{id:27,name:"Horror"},{id:10402,name:"Music"},{id:9648,name:"Mystery"},{id:10749,name:"Romance"},{id:878,name:"Science Fiction"},{id:10770,name:"TV Movie"},{id:53,name:"Thriller"},{id:10752,name:"War"},{id:37,name:"Western"}];function D(e){var t;return null===(t=T.find((function(t){return t.id==e})))||void 0===t?void 0:t.name}function F(e){var t=Object.assign({},e);return r.a.createElement(z.a,Object.assign({},t,{border:"1px solid #9F7AEA",mb:"5px",borderRadius:"4px",padding:"0px 4px 0px 4px",fontWeight:"500",color:"#9F7AEA",fontSize:10,textTransform:"capitalize"}))}function P(){var e,t=Object(f.a)(["reco"]),a=Object(l.a)(t,3),n=a[0],i=(a[1],a[2],r.a.useState()),o=Object(l.a)(i,2),c=o[0],u=o[1],m=r.a.useState(5),s=Object(l.a)(m,2),d=s[0],p=s[1];r.a.useEffect((function(){var e;fetch("https://untitled-app-001.herokuapp.com/user/"+(null===n||void 0===n||null===(e=n.auth)||void 0===e?void 0:e.username)).then((function(e){return e.json()})).then((function(e){return u(e)}))}),[]);var h=r.a.useMemo((function(){if(!c)return r.a.createElement(_.a,{width:"100%",height:"100px"});for(var e=[],t=0;t<(null===c||void 0===c||null===(a=c.ratedMovies)||void 0===a?void 0:a.length);t++){var a;if(t>=d)break;e.push(r.a.createElement(W,{movie_data:null===c||void 0===c?void 0:c.ratedMovies[t],index:t}))}return r.a.createElement(k.a,{columns:1,spacing:1},e)}),[c,d]);return r.a.createElement(z.a,{mr:"15px",ml:"15px"},h,d<(null===c||void 0===c||null===(e=c.ratedMovies)||void 0===e?void 0:e.length)&&r.a.createElement(j.a,{borderRadius:"0px",width:"100%",mt:1,onClick:function(){return p(d+5)}},"Load more"))}function W(e){var t,a=e.movie_data,n=(e.index,r.a.useState(!1)),i=Object(l.a)(n,2),o=i[0],c=i[1],m=Object(u.b)(),s=m.colorMode,d=(m.toggleColorMode,"light"==s),p=Object(f.a)(["reco"]),h=Object(l.a)(p,3),v=(h[0],h[1],h[2],r.a.useState()),E=Object(l.a)(v,2),b=E[0],g=E[1];return r.a.useEffect((function(){fetch("https://untitled-app-001.herokuapp.com/movie/"+a._id).then((function(e){return e.json()})).then((function(e){g(e)}))})),b?r.a.createElement(x.a,{bg:d?"gray.100":"gray.700",padding:"5px 5px 5px 5px",onMouseEnter:function(){return c(!0)},onMouseLeave:function(){return c(!1)},transition:"ease-in-out height 0.5s",direction:"row",justify:"space-between",height:o?"300px":"80px"},r.a.createElement(x.a,{direction:"row"},r.a.createElement(A.a,{height:"100%",src:null===b||void 0===b?void 0:b.poster_path,alt:"Dan Abramov",border:"1px solid white"}),r.a.createElement(x.a,{direction:"column",justify:"flex-start",height:"100%",ml:"15px"},r.a.createElement(S.a,{size:"lg",mb:"5px"},b.title),r.a.createElement(x.a,{direction:"row",mb:"10px"},null===b||void 0===b||null===(t=b.genre_ids)||void 0===t?void 0:t.map((function(e){return r.a.createElement(F,{mr:"5px",children:D(e)})}))),o&&r.a.createElement(x.a,{direction:"column",justify:"flex-start"},r.a.createElement(R.a,null,r.a.createElement("b",null,"Release date:")," ",null===b||void 0===b?void 0:b.release_date),r.a.createElement(R.a,null,null===b||void 0===b?void 0:b.overview)))),r.a.createElement(x.a,{direction:"column",height:"100%",justify:"flex-start",mr:"15px",mt:"20px"},r.a.createElement(x.a,{direction:"row"},new Array(10).fill(0).map((function(e,t){var n=t<a.userRating?"yellow.300":d?"gray.300":"white";return r.a.createElement(L.a,{name:"star",color:n,mr:"3px",size:"30px"})}))))):r.a.createElement(_.a,{width:"100%",height:"100px"})}var I=a(139);function J(){var e=r.a.useState(!0),t=Object(l.a)(e,2),a=t[0],n=t[1],i=Object(f.a)(["reco"]),o=Object(l.a)(i,3),c=o[0],m=(o[1],o[2],r.a.useState()),s=Object(l.a)(m,2),d=s[0],p=s[1],h=r.a.useState(5),v=Object(l.a)(h,2),E=v[0],b=v[1],g="light"==Object(u.b)().colorMode;r.a.useEffect((function(){var e;fetch("https://untitled-app-001.herokuapp.com/recommend/"+(null===c||void 0===c||null===(e=c.auth)||void 0===e?void 0:e.username)).then((function(e){return e.json()})).then((function(e){return fetch("https://untitled-app-001.herokuapp.com/movie/"+e._id).then((function(e){return e.json()}))})).then((function(e){return p(e)})).then((function(){return b(5)}))}),[a]);var w=r.a.useMemo((function(){var e;return r.a.createElement(z.a,{position:"absolute",top:5},r.a.createElement(x.a,{direction:"column",justify:"flex-start",align:"center",w:"200px"},d?r.a.createElement(r.a.Fragment,null,r.a.createElement(S.a,{size:"lg",mb:"10px",width:"300px",whiteSpace:"normal",textAlign:"center"},d.title),r.a.createElement(A.a,{width:"250px",src:null===d||void 0===d?void 0:d.poster_path,alt:"Dan Abramov",border:"2px solid white",borderColor:g?"black":"white"}),r.a.createElement(x.a,{direction:"row",justify:"flex-start",align:"flex-start",mt:"10px",wrap:"wrap",maxWidth:"100%",position:"relative"},null===(e=d.genre_ids)||void 0===e?void 0:e.map((function(e,t){return r.a.createElement(F,{mr:t!==d.genre_ids.length-1?"5px":"0px",children:D(e)})})))):r.a.createElement(_.a,{width:"100%",height:"300px"})))}),[d]);return r.a.createElement(x.a,{width:"100%",direction:"column",justify:"center",align:"center",mt:"0px",pr:"15%",pl:"15%"},r.a.createElement(x.a,{h:"10px",width:"100%",direction:"row",justify:"center"},new Array(10).fill(0).map((function(e,t){var a=t<E?"yellow.300":g?"gray.300":"white";return r.a.createElement(L.a,{name:"star",color:a,mr:"3px",size:"30px"})}))),r.a.createElement(I.d,{max:10,min:0,defaultValue:E,value:E,onChange:function(e){return b(e)},mt:"35px"},r.a.createElement(I.c,null),r.a.createElement(I.a,null),r.a.createElement(I.b,null,r.a.createElement(z.a,{color:"tomato"}),w)),r.a.createElement(x.a,{mt:"500px",direction:"row",w:"100%",justify:"space-evenly"},r.a.createElement(j.a,{width:"30%",variant:"solid",variantColor:"green",children:"Vote",onClick:function(){var e;d&&fetch("https://untitled-app-001.herokuapp.com/vote/"+(null===c||void 0===c||null===(e=c.auth)||void 0===e?void 0:e.username),{method:"PUT",mode:"cors",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json"},redirect:"follow",referrerPolicy:"no-referrer",body:JSON.stringify({_id:d._id,userRating:E})}).then((function(){return n(!a)}))}}),r.a.createElement(j.a,{width:"30%",variant:"solid",variantColor:"blue",children:"Skip",onClick:function(){return n(!a)}})))}var U=a(87),B=a(45),H=a(130),N=a(86),V=a(131),q=a(132),$=a(65),G=a(60),K=function(e){var t=Object.assign({},e);return r.a.createElement(x.a,Object.assign({},t,{width:"100%",direction:"column",justify:"center",alignItems:"center",mt:"50px"}))};function Q(){var e=Object(f.a)(["reco"]),t=Object(l.a)(e,3),a=(t[0],t[1]),n=(t[2],Object(v.g)());return r.a.createElement(K,null,r.a.createElement(S.a,{mb:3},"Login"),r.a.createElement(X,{onSubmit:function(e,t){a("auth",{username:e.username,password:e.password}),n.push("/"),t.setSubmitting(!1),window.location.reload()}}))}function X(e){var t=e.onSubmit;Object(U.a)(e,["onSubmit"]);function a(e){return!1}return r.a.createElement(G.b,{initialValues:{},onSubmit:t},(function(e){return r.a.createElement("form",{onSubmit:e.handleSubmit},r.a.createElement(G.a,{name:"username",validate:a},(function(e){var t=e.field,a=e.form;return r.a.createElement(B.a,{isInvalid:a.errors.name&&a.touched.name,mb:3},r.a.createElement(H.a,{htmlFor:"username"},"Username"),r.a.createElement(N.a,Object.assign({},t,{id:"username",placeholder:"Username"})),r.a.createElement(V.a,null,a.errors.name))})),r.a.createElement(G.a,{name:"password",validate:a},(function(e){var t=e.field,a=e.form;return r.a.createElement(B.a,{isInvalid:a.errors.name&&a.touched.name},r.a.createElement(H.a,{htmlFor:"password"},"Password"),r.a.createElement(Y,Object.assign({},t,{id:"password",placeholder:"password"})),r.a.createElement(V.a,null,a.errors.name))})),r.a.createElement(j.a,{mt:4,variantColor:"green",isLoading:e.isSubmitting,type:"submit",width:"100%"},"Submit"))}))}function Y(e){var t=Object.assign({},e),a=r.a.useState(!1),n=Object(l.a)(a,2),i=n[0],o=n[1];return r.a.createElement(q.a,{size:"md"},r.a.createElement(N.a,Object.assign({},t,{pr:"4.5rem",type:i?"text":"password",placeholder:"Enter password"})),r.a.createElement($.b,{width:"3rem"},r.a.createElement(O.a,{h:"1.75rem",size:"sm",onClick:function(){return o(!i)},"aria-label":"password_input",icon:i?"view":"view-off"})))}function Z(){var e,t=Object(f.a)(["reco"]),a=Object(l.a)(t,3),n=a[0],i=(a[1],a[2],r.a.useState()),o=Object(l.a)(i,2),c=o[0],u=o[1],m=r.a.useState(5),s=Object(l.a)(m,2),d=s[0],p=s[1];r.a.useEffect((function(){var e;fetch("https://untitled-app-001.herokuapp.com/user/"+(null===n||void 0===n||null===(e=n.auth)||void 0===e?void 0:e.username)).then((function(e){return e.json()})).then((function(e){return u(e)}))}),[]);var h=r.a.useMemo((function(){if(!c)return r.a.createElement(_.a,{width:"100%",height:"100px"});for(var e=[],t=0;t<(null===c||void 0===c||null===(a=c.unratedMovies)||void 0===a?void 0:a.length);t++){var a;if(t>=d)break;e.push(r.a.createElement(ee,{movie_data:null===c||void 0===c?void 0:c.unratedMovies[t],index:t}))}return r.a.createElement(k.a,{columns:1,spacing:1},e)}),[c,d]);return r.a.createElement(z.a,{mr:"15px",ml:"15px"},h,d<(null===c||void 0===c||null===(e=c.unratedMovies)||void 0===e?void 0:e.length)&&r.a.createElement(j.a,{borderRadius:"0px",width:"100%",mt:1,onClick:function(){return p(d+5)}},"Load more"))}function ee(e){var t,a=e.movie_data,n=(e.index,r.a.useState(-1)),i=Object(l.a)(n,2),o=i[0],c=i[1],m="light"==Object(u.b)().colorMode,s=Object(f.a)(["reco"]),d=Object(l.a)(s,3),p=d[0],h=(d[1],d[2],r.a.useState(!1)),v=Object(l.a)(h,2),E=v[0],b=v[1],g=r.a.useState(),w=Object(l.a)(g,2),j=w[0],y=w[1];r.a.useEffect((function(){fetch("https://untitled-app-001.herokuapp.com/movie/"+a._id).then((function(e){return e.json()})).then((function(e){y(e)}))}));return E?r.a.createElement(r.a.Fragment,null):j?r.a.createElement(x.a,{bg:m?"gray.100":"gray.700",padding:"5px 5px 5px 5px",transition:"ease-in-out height 0.5s",direction:"row",justify:"space-between",height:"80px"},r.a.createElement(x.a,{direction:"row"},r.a.createElement(A.a,{height:"100%",src:null===j||void 0===j?void 0:j.poster_path,alt:"Dan Abramov",border:"1px solid white"}),r.a.createElement(x.a,{direction:"column",justify:"flex-start",height:"100%",ml:"15px"},r.a.createElement(S.a,{size:"lg",mb:"5px"},j.title),r.a.createElement(x.a,{direction:"row",mb:"10px"},null===j||void 0===j||null===(t=j.genre_ids)||void 0===t?void 0:t.map((function(e){return r.a.createElement(F,{mr:"5px",children:D(e)})}))))),r.a.createElement(x.a,{direction:"column",height:"100%",justify:"center",align:"center",mr:"15px"},r.a.createElement(x.a,{direction:"row"},new Array(10).fill(0).map((function(e,t){var a=t<=o?"yellow.300":m?"gray.300":"white";return r.a.createElement(O.a,{"aria-label":"",variant:"ghost",color:a,mr:"3px",icon:"star",onClick:function(){return function(e){var t;j&&fetch("https://untitled-app-001.herokuapp.com/vote/"+(null===p||void 0===p||null===(t=p.auth)||void 0===t?void 0:t.username),{method:"PUT",mode:"cors",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json"},redirect:"follow",referrerPolicy:"no-referrer",body:JSON.stringify({_id:j._id,userRating:e})}).then((function(){return b(!0)}))}(t+1)},onMouseEnter:function(){return c(t)},onMouseLeave:function(){return c(-1)}})}))))):r.a.createElement(_.a,{width:"100%",height:"100px"})}var te=a(133);function ae(){return r.a.createElement(x.a,{direction:"row",justify:"center",width:"100%"},r.a.createElement(ne,null))}var ne=function(){var e,t=Object(f.a)(["reco"]),a=Object(l.a)(t,3),n=a[0],i=(a[1],a[2],Object(u.b)()),o=i.colorMode,c=(i.toggleColorMode,"light"==o),m=r.a.useState([]),s=Object(l.a)(m,2),d=s[0],p=s[1],h=r.a.useState(""),v=Object(l.a)(h,2),E=v[0],b=v[1],g=r.a.useState(),w=Object(l.a)(g,2),y=w[0],O=w[1],C=r.a.useState(!1),k=Object(l.a)(C,2),M=(k[0],k[1],Object(te.a)()),_=r.a.useRef(),z=function(e){var t=e.movie,a=r.a.useState(!1),n=Object(l.a)(a,2),i=n[0],o=n[1];return r.a.createElement(x.a,{direction:"row",justify:"flex-start",onClick:function(){b(t.title),O(t),_.current.focus()},cursor:"pointer",bg:i?c?"gray.100":"gray.600":"",onMouseEnter:function(){return o(!0)},onMouseLeave:function(){return o(!1)},pl:1},r.a.createElement("div",{dangerouslySetInnerHTML:{__html:t.title.replaceAll(E,"<b>".concat(E,"</b>"))}}))};return r.a.createElement(x.a,{direction:"column",width:"100%",pl:10,pr:10},r.a.createElement(x.a,null),r.a.createElement(q.a,{size:"lg"},r.a.createElement(N.a,{ref:_,variant:"flushed",placeholder:"Enter name",onChange:function(e){return t=e.target.value,(null===y||void 0===y?void 0:y.title)&&O({}),b(t),""==t?p([]):fetch("https://untitled-app-001.herokuapp.com"+"/movie?q=".concat(t)).then((function(e){return e.json()})).then((function(e){return p(e)}));var t},width:"100%",focusBorderColor:(null===d||void 0===d?void 0:d.length)>0||""==E?"teal.400":"red.400",mb:1,pl:1,value:E}),r.a.createElement($.b,{width:"4.5rem"},r.a.createElement(j.a,{h:"1.75rem",size:"md",variant:"outline",variantColor:"teal",isDisabled:!(null===y||void 0===y?void 0:y.title),onClick:function(){return function(e){var t;e&&fetch("https://untitled-app-001.herokuapp.com/addunrated/"+(null===n||void 0===n||null===(t=n.auth)||void 0===t?void 0:t.username),{method:"PUT",mode:"cors",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json"},redirect:"follow",referrerPolicy:"no-referrer",body:JSON.stringify({_id:e._id,userRating:0})}).then((function(){return M({title:e.title,description:"was added.",status:"success",duration:3e3,isClosable:!0,position:"bottom-right"})})).catch((function(){return M({title:e.title,description:"failed to add.",status:"error",duration:3e3,isClosable:!0,position:"bottom-right"})}))}(y)}},"Add"))),r.a.createElement(x.a,{direction:"column"},d.map((function(e){return r.a.createElement(z,{movie:e})}))),(null===y||void 0===y?void 0:y.title)&&r.a.createElement(x.a,{bg:c?"gray.100":"gray.700",padding:"5px 5px 5px 5px",transition:"ease-in-out height 0.5s",direction:"row",justify:"space-between",mt:"15px",p:3},r.a.createElement(A.a,{height:"200px",src:null===y||void 0===y?void 0:y.poster_path,alt:"Dan Abramov",border:"1px solid white"}),r.a.createElement(x.a,{direction:"column",justify:"flex-start",height:"100%",ml:"30px"},r.a.createElement(S.a,{size:"lg",mb:"5px"},null===y||void 0===y?void 0:y.title),r.a.createElement(x.a,{direction:"row",mb:"10px"},null===y||void 0===y||null===(e=y.genre_ids)||void 0===e?void 0:e.map((function(e){return r.a.createElement(F,{mr:"5px",children:D(e)})}))),r.a.createElement(x.a,{direction:"column",justify:"flex-start"},r.a.createElement(R.a,null,r.a.createElement("b",null,"Release date:")," ",null===y||void 0===y?void 0:y.release_date),r.a.createElement(R.a,null,null===y||void 0===y?void 0:y.overview)))))};function re(){var e=Object(f.a)(["reco"]),t=Object(l.a)(e,3),a=t[0];t[1],t[2];return r.a.createElement(h.a,null,(null===a||void 0===a?void 0:a.auth)?r.a.createElement(C,null):r.a.createElement(v.a,{to:"/login"}),r.a.createElement(v.d,null,r.a.createElement(v.b,{exact:!0,path:"/"},r.a.createElement(M,null)),r.a.createElement(v.b,{exact:!0,path:"/list"},r.a.createElement(P,null)),r.a.createElement(v.b,{path:"/login"},r.a.createElement(Q,null)),r.a.createElement(v.b,{path:"/rate"},r.a.createElement(Z,null)),r.a.createElement(v.b,{path:"/new"},r.a.createElement(ae,null)),r.a.createElement(v.b,{exact:!0,path:"/swipe"},r.a.createElement(J,null))))}var ie=function(){return r.a.createElement(c.a,{theme:p},r.a.createElement(u.a,null,r.a.createElement(m.a,null),r.a.createElement(re,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(ie,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},88:function(e,t,a){e.exports=a(119)}},[[88,1,2]]]);
//# sourceMappingURL=main.cdc3bf90.chunk.js.map