(this.webpackJsonpcards_list=this.webpackJsonpcards_list||[]).push([[0],{37:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){},41:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),i=a(15),c=a.n(i),s=a(10),o=a(24),d={news:[],idToDisplay:0,searchData:""},l=a(11),x="GET_DATA_FROM_SERVER",h="DATA_SELECTION",p=function(e){return{type:x,array:e}};var u=Object(o.a)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case x:return Object(l.a)(Object(l.a)({},e),{},{news:t.array?t.array.map((function(e){return Object(l.a)({},e)})):[]});case h:return console.log("get request from user: ",t.value),Object(l.a)(Object(l.a)({},e),{},{searchData:t.value});default:return e}}),d),b=(a(37),a(38),a(39),a(2)),g=function(){return Object(b.jsx)("div",{className:"articlePage",children:"Article Info"})},j=a(23),m=a(45),f=function(e){return Object(b.jsx)("div",{style:{backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover",width:e.heightValue,height:e.heightValue,backgroundImage:"url(".concat(e.url,")")}})},O=function(e){return Object(b.jsx)("input",{onChange:function(t){return e.setUserInputs(t.target.value)},style:e.styles,value:e.value,id:e.id,placeholder:"enter a movie title"})},w=a(63),v=Object(w.a)((function(){return{cardSection:{margin:0,padding:0,width:"100%",height:"100%",boxSizing:"border-box",border:"1px solid #eaeaea",borderRadius:"5px",boxShadow:"0px 8px 24px rgba(0, 0, 0, 0.05)",fontFamily:"Montserrat",fontWeight:400,color:"#363636","&:hover":{cursor:"pointer",boxShadow:"0px 8px 24px rgba(0, 0, 0, 0.15)"}},cardImage:{height:"217px"},cardContent:{position:"relative",height:"313px",boxSizing:"border-box"},cardPublished:{display:"flex",flexDirection:"row",alignItems:"center",margin:"0 0 25px",padding:"0",height:"20px"},cardPublishedAt:{margin:"0 0 0 8px",padding:"0",fontSize:"14px",lineHeight:"21px",opacity:"0.6"},cardTitle:{margin:"0 0 20px",height:"58px",overflow:"hidden",fontSize:"24px",lineHeight:"29px"},cardDescription:{margin:"0 0 20px",fontSize:"16px",lineHeight:"24px"},cardRaedMore:{display:"flex",flexDirection:"row",alignItems:"center",position:"absolute",bottom:"25px",left:"25px"},cardRaedMoreText:{margin:"0 8px 0 0",fontSize:"16px",lineHeight:"24px",fontWeight:700}}})),y=Object(w.a)((function(){return{gallerySection:{gap:"45px",justifyContent:"center"},cardWrap:{flexGrow:1,height:530,width:400,"@media (max-width: 1015px)":{width:"300px"},"@media (max-width: 815px)":{width:"250px"},"@media (max-width: 650px)":{width:"100%"}}}})),S=Object(w.a)((function(){return{searchSection:{margin:"0 0 45px",width:"600px","@media (max-width: 1000px)":{width:"500px"},"@media (max-width: 800px)":{width:"400px"},"@media (max-width: 600px)":{width:"330px"},"@media (max-width: 400px)":{width:"100%"}},searchPaper:{margin:"0 0 40px",padding:"15px 20px",display:"flex",alignItems:"center",height:"50px",boxSizing:"border-box",border:"1px solid #eaeaea",boxShadow:"0px 8px 24px rgba(0, 0, 0, 0.05)"},searchTitle:{margin:"0 0 10px",padding:"0",textAlign:"left",fontFamily:"Montserrat",fontSize:"16px",lineHeight:"20px",fontWeight:600,color:"#363636"},resultOfSearch:{margin:"0 0 45px",padding:"0 0 5px",textAlign:"left",fontFamily:"Montserrat",fontSize:"16px",lineHeight:"20px",fontWeight:600,color:"#363636",borderBottom:"1px solid #eaeaea"}}})),k={padding:"0",width:"100%",height:"24",fontSize:"16px",fontFamily:"Montserrat",fontWeight:400,lineHeight:"24px",color:"#575757",boxSizing:"border-box",border:"none",outline:"none"},N=a.p+"static/media/search.fa665393.svg",A=function(){var e=S(),t=Object(r.useState)(""),a=Object(j.a)(t,2),n=a[0],i=a[1];return Object(b.jsxs)("section",{className:e.searchSection,children:[Object(b.jsx)("h2",{className:e.searchTitle,children:"Filter by keywords"}),Object(b.jsxs)(m.a,{component:"form",className:e.searchPaper,children:[Object(b.jsx)("div",{style:{marginRight:"20px"},children:Object(b.jsx)(f,{url:N,heightValue:20})}),Object(b.jsx)("div",{style:{width:"100%"},children:Object(b.jsx)(O,{id:"search",value:n,setUserInputs:i,styles:k})})]})]})},M=(a(41),a(68)),R=a(65),z=a(66),D=a(67),I=a.p+"static/media/calendar.18268fb8.svg",T=a.p+"static/media/arrowRight.da47d01a.svg",F=a(20),P=a.n(F),E=a(22),H=function(){var e=Object(E.a)(P.a.mark((function e(){var t,a;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.spaceflightnewsapi.net/v3/articles");case 2:return t=e.sent,e.next=5,t.json();case 5:return a=e.sent,e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),V=function(e){var t="";switch(e.getMonth()){case 1:t="January";break;case 2:t="February";break;case 3:t="March";break;case 4:t="April";break;case 5:t="May";break;case 6:t="June";break;case 7:t="July";break;case 8:t="August";break;case 9:t="September";break;case 10:t="October";break;case 11:t="November";break;case 12:t="December";break;default:t="Unknown"}return t+" "+e.getDate()+"th, "+e.getFullYear()},W=function(){return Object(s.c)((function(e){return e}))},_=function(e){var t,a=v();return Object(b.jsxs)(R.a,{className:a.cardSection,children:[Object(b.jsx)(z.a,{className:a.cardImage,image:e.news.imageUrl,title:e.news.title}),Object(b.jsxs)(D.a,{style:{padding:"25px"},className:a.cardContent,component:"section",children:[Object(b.jsxs)("div",{className:a.cardPublished,children:[Object(b.jsx)(f,{url:I,heightValue:16}),Object(b.jsx)("span",{className:a.cardPublishedAt,children:V(new Date(e.news.publishedAt))})]}),Object(b.jsx)("p",{className:a.cardTitle,children:e.news.title}),Object(b.jsx)("p",{className:a.cardDescription,children:(t=e.news.summary,t.slice(0,97)+"...")}),Object(b.jsxs)("section",{className:a.cardRaedMore,children:[Object(b.jsx)("p",{className:a.cardRaedMoreText,children:"Read more"}),Object(b.jsx)(f,{url:T,widthValue:12,heightValue:10})]})]})]})},C=function(){var e=y(),t=W().news;return console.log("gallery: ",t),Object(b.jsx)(M.a,{container:!0,className:e.gallerySection,children:t.map((function(t){return Object(b.jsx)("div",{className:e.cardWrap,children:Object(b.jsx)(_,{news:t})},t.id)}))})},J=function(){var e=S(),t=W().news.length;return Object(b.jsxs)("div",{className:"homepage",children:[Object(b.jsx)(A,{}),Object(b.jsxs)("p",{className:e.resultOfSearch,children:["Result: ",t]}),Object(b.jsx)(C,{})]})},U=(a(43),function(){return Object(b.jsxs)("div",{className:"main",children:[Object(b.jsx)(J,{}),Object(b.jsx)(g,{})]})});var B=function(){return function(){var e=Object(s.b)();Object(r.useEffect)((function(){H().then((function(t){e(p(t))}))}),[e])}(),Object(b.jsx)("div",{className:"App",children:Object(b.jsx)(U,{})})};c.a.render(Object(b.jsx)(n.a.StrictMode,{children:Object(b.jsx)(s.a,{store:u,children:Object(b.jsx)(B,{})})}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.89e75aa4.chunk.js.map