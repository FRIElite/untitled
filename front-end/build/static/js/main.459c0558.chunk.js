(this["webpackJsonpreact-template"]=this["webpackJsonpreact-template"]||[]).push([[0],{100:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(24),i=a.n(l),o=a(27),c=a(16),m=a(117),u=a(34),s=a(113),p=Object(u.a)(Object(u.a)({},s.a),{},{colors:Object(u.a)(Object(u.a)({},s.a.colors),{},{light:{},dark:{}})}),d=a(66),E=a(8),h=a(104),g=a(115),x=a(26),f=a(105),v=a(106),b=a(107),w=a(108),y=a(109);function j(){var e=Object(h.a)(),t=e.isOpen,a=e.onOpen,n=e.onClose,l=Object(c.b)(),i=l.colorMode,o=l.toggleColorMode,m="light"==i,u=m?"sun":"moon",s=m?"yellow":"gray",p=function(){return r.a.createElement(g.a,{placement:"right",onClose:n,isOpen:t},r.a.createElement(g.d,null),r.a.createElement(g.c,null,r.a.createElement(g.b,null),r.a.createElement(x.e,{borderBottomWidth:"1px"},"Routes"),r.a.createElement(x.b,null,r.a.createElement(f.b,{styleType:"disc"},r.a.createElement(f.a,null,r.a.createElement(v.a,{href:"/",color:"cyan.500"},"Home")),r.a.createElement(f.a,null,r.a.createElement(v.a,{href:"/list",color:"cyan.500"},"List")),r.a.createElement(f.a,null,r.a.createElement(v.a,{href:"/swipe",color:"cyan.500"},"Swipe"))))))};return r.a.createElement(b.a,{width:"100%",direction:"column",justify:"flex-start",align:"center",padding:"15px 15px 30px 15px"},r.a.createElement(b.a,{width:"100%",direction:"row",justify:"space-between",align:"center"},r.a.createElement(w.a,{variant:"ghost",variantColor:s,"aria-label":"Call Sage",icon:u,size:"lg",onClick:function(){return o()}}),r.a.createElement(y.a,{size:"2xl"},"Reco"),r.a.createElement(w.a,{variant:"ghost",variantColor:"teal","aria-label":"Call Sage",icon:"drag-handle",size:"lg",onClick:a})),r.a.createElement(p,null))}var k=a(32),M=a(5),O=a(110);function C(e){var t=e.color,a=void 0===t?"#000":t,n=e.size,l=void 0===n?"100":n;return r.a.createElement("svg",{width:l,height:l,stroke:a,viewBox:"0 0 44 44"},r.a.createElement("g",{fill:"none","fill-rule":"evenodd","stroke-width":"2"},r.a.createElement("circle",{cx:"22",cy:"22",r:"1"},r.a.createElement("animate",{attributeName:"r",begin:"0s",dur:"1.8s",values:"1; 20",calcMode:"spline",keyTimes:"0; 1",keySplines:"0.165, 0.84, 0.44, 1",repeatCount:"indefinite"}),r.a.createElement("animate",{attributeName:"stroke-opacity",begin:"0s",dur:"1.8s",values:"1; 0",calcMode:"spline",keyTimes:"0; 1",keySplines:"0.3, 0.61, 0.355, 1",repeatCount:"indefinite"})),r.a.createElement("circle",{cx:"22",cy:"22",r:"1"},r.a.createElement("animate",{attributeName:"r",begin:"-0.9s",dur:"1.8s",values:"1; 20",calcMode:"spline",keyTimes:"0; 1",keySplines:"0.165, 0.84, 0.44, 1",repeatCount:"indefinite"}),r.a.createElement("animate",{attributeName:"stroke-opacity",begin:"-0.9s",dur:"1.8s",values:"1; 0",calcMode:"spline",keyTimes:"0; 1",keySplines:"0.3, 0.61, 0.355, 1",repeatCount:"indefinite"}))))}a(96);function T(){var e=Object(n.useState)(!1),t=Object(k.a)(e,2),a=t[0],l=t[1];return r.a.createElement(b.a,{direction:"row",justify:"center",align:"center",width:"100%",paddingTop:"30%"},r.a.createElement(M.a,{onMouseOver:function(){return l(!0)},onMouseOut:function(){return l(!1)}},a?r.a.createElement(O.a,{src:"https://media3.giphy.com/media/lgcUUCXgC8mEo/giphy.gif",className:"rick-roll",marginTop:"-100px"}):r.a.createElement(r.a.Fragment,null,r.a.createElement(y.a,{position:"relative",width:"200px",display:"flex",justifyContent:"center"},"Elite",r.a.createElement(M.a,{position:"absolute",zIndex:-1,top:-100,left:-25},r.a.createElement(C,{size:"250"}))))))}var N=a(111),S=a(114),A=a(49),z=a(112),_=a(42);function D(){var e=Object(_.a)("repoData",(function(){return fetch("https://untitled-app-001.herokuapp.com/user/test1").then((function(e){return e.json()}))})),t=e.isLoading,a=(e.error,e.data),n=r.a.useMemo((function(){var e;return t?r.a.createElement(N.a,{width:"100%",height:"100px"}):r.a.createElement(S.a,{columns:1,spacing:1},null===a||void 0===a||null===(e=a[0].ratedMovies)||void 0===e?void 0:e.map((function(e){return r.a.createElement(F,{movie_data:e})})),r.a.createElement(A.a,{borderRadius:"0px"},"Load more"))}),[a]);return r.a.createElement(M.a,{mr:"15px",ml:"15px"},n)}function F(e){var t=e.movie_data,a=r.a.useState(!1),n=Object(k.a)(a,2),l=n[0],i=n[1];t.image_url="https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg";var o=l?{height:"250px"}:{height:"80px"};return r.a.createElement(b.a,Object.assign({bg:"tomato",padding:"5px 5px 5px 5px",onMouseEnter:function(){return i(!0)},onMouseLeave:function(){return i(!1)},transition:"ease-in-out height 0.5s",direction:"row",justify:"flex-start"},o),r.a.createElement(O.a,{height:"100%",src:null===t||void 0===t?void 0:t.image_url,alt:"Dan Abramov",border:"1px solid white"}),r.a.createElement(z.a,null,t.title),r.a.createElement(z.a,null,t.genres.join(", ")))}var V=a(25),Y=a(116);function L(){var e=Object(_.a)("repoData",(function(){return fetch("https://untitled-app-001.herokuapp.com/recommend/test1").then((function(e){return e.json()}))})),t=e.isLoading,a=(e.error,e.data),n=r.a.useState(5),l=Object(k.a)(n,2),i=l[0],o=l[1],m=Object(c.b)(),u=m.colorMode,s=(m.toggleColorMode,"light"==u);a&&(a.image_url="https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg");var p=r.a.useMemo((function(){var e;return r.a.createElement(M.a,{position:"absolute",top:5},r.a.createElement(b.a,{direction:"column",justify:"flex-start",align:"center",w:"200px"},t?r.a.createElement(N.a,{width:"100%",height:"300px"}):r.a.createElement(r.a.Fragment,null,r.a.createElement(y.a,{size:"lg",mb:"10px",width:"200px",whiteSpace:"normal",textAlign:"center",height:"30px"},a.title),r.a.createElement(O.a,{width:"250px",src:null===a||void 0===a?void 0:a.image_url,alt:"Dan Abramov",border:"2px solid white"}),r.a.createElement(b.a,{direction:"row",justify:"flex-start",align:"flex-start",mt:"10px",wrap:"wrap",maxWidth:"100%",position:"relative"},null===(e=a.genres)||void 0===e?void 0:e.map((function(e,t){return r.a.createElement(M.a,{border:"1px solid #9F7AEA",mb:"5px",mr:t!==a.genres.length-1?"5px":"0px",borderRadius:"4px",padding:"0px 4px 0px 4px",fontWeight:"500",color:"#9F7AEA",children:e,fontSize:10,textTransform:"capitalize"})}))))))}),[a]);return r.a.createElement(b.a,{width:"100%",direction:"column",justify:"center",align:"center",mt:"0px",pr:"15%",pl:"15%"},r.a.createElement(b.a,{h:"10px",width:"100%",direction:"row",justify:"center"},new Array(10).fill(0).map((function(e,t){var a=t<=i?"yellow.300":s?"gray":"white";return r.a.createElement(V.a,{name:"star",color:a,mr:0!==t?"3px":"0px"})}))),r.a.createElement(Y.d,{max:10,min:0,defaultValue:i,onChange:function(e){return o(e)},mt:"30px"},r.a.createElement(Y.c,null),r.a.createElement(Y.a,null),r.a.createElement(Y.b,null,r.a.createElement(M.a,{color:"tomato"}),p)),r.a.createElement(b.a,{mt:"450px",direction:"row",w:"100%",justify:"space-evenly"},r.a.createElement(A.a,{width:"30%",variant:"solid",variantColor:"green",children:"Vote"}),r.a.createElement(A.a,{width:"30%",variant:"solid",variantColor:"blue",children:"Skip"})))}function W(){return r.a.createElement(d.a,null,r.a.createElement(j,null),r.a.createElement(E.c,null,r.a.createElement(E.a,{exact:!0,path:"/"},r.a.createElement(T,null)),r.a.createElement(E.a,{exact:!0,path:"/list"},r.a.createElement(D,null)),r.a.createElement(E.a,{exact:!0,path:"/swipe"},r.a.createElement(L,null))))}var X=function(){return r.a.createElement(o.a,{theme:p},r.a.createElement(c.a,null,r.a.createElement(m.a,null),r.a.createElement(W,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(X,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},67:function(e,t,a){e.exports=a(100)},96:function(e,t,a){}},[[67,1,2]]]);
//# sourceMappingURL=main.459c0558.chunk.js.map