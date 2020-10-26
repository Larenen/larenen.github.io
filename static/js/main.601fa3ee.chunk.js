(this["webpackJsonplarenen-portfolio"]=this["webpackJsonplarenen-portfolio"]||[]).push([[0],{15:function(e,t,n){},19:function(e,t,n){e.exports=n(37)},24:function(e,t,n){},25:function(e,t,n){},26:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(16),o=n.n(l),i=(n(24),n(8)),c=n(2);n(25),n(26);function s(){return r.a.createElement("header",{className:"page-header"},r.a.createElement("nav",null,r.a.createElement(i.b,{className:"button",to:"/"},"About"),r.a.createElement(i.b,{className:"button",to:"/portfolio"},"Portfolio")))}n(32),n(33);function m(e){return r.a.createElement(i.b,{to:"project/".concat(e.id)},r.a.createElement("div",{class:"thumbnail"},r.a.createElement("div",{class:"thumbnail__container"},r.a.createElement("div",{class:"thumbnail__img",style:{backgroundImage:"url(".concat(e.image,")")}}),r.a.createElement("div",{class:"thumbnail__content"},r.a.createElement("h1",{class:"thumbnail__caption"},e.caption)))))}var u=n(7);function p(){Object(a.useEffect)((function(){document.title="Portfolio - \u0141ukasz Czerniawski"}));var e=Object(u.b)({config:{duration:1500},opacity:1,from:{opacity:0}});return r.a.createElement(u.a.div,{style:e,className:"contentPortfolio"},r.a.createElement("h1",{className:"title-main"},"Portfolio"),r.a.createElement("div",{className:"containerPortfolio"},r.a.createElement(m,{id:1,image:"/studyOnline-thumbnail.png",caption:"E-learning platform"}),r.a.createElement(m,{id:2,image:"/kantorOnline-thumbnail.png",caption:"Online currency exchange"}),r.a.createElement(m,{id:3,image:"/leagueApi-thumbnail.png",caption:"LeagueTwitchAPI"})))}n(34);function d(){Object(a.useEffect)((function(){document.title="About - \u0141ukasz Czerniawski"}));var e=Object(u.b)({config:{duration:1500},opacity:1,from:{opacity:0}});return r.a.createElement(u.a.div,{style:e,className:"contentAbout"},r.a.createElement("h1",{style:{"font-size":"2.5rem"}},"Hello, my name is \u0141ukasz Czerniawski"),r.a.createElement("p",null,"I am a programming enthusiast and backend developer from Poland. ",r.a.createElement("br",null),"Mainly focused on .NET and JavaScript ecosystems. ",r.a.createElement("br",null),"In my spare time, I like to try new technologies and broaden my programming horizons."))}n(15);var h=n(18),E=n.n(h);n(35),n(36);function g(e){var t=Object(c.f)().id,n=["E-learning platform","Online currency exchange","LeagueTwitchAPI"],l=["https://korepetycje.naucz-mnie.pl","","https://leaguetwitch-api.herokuapp.com"],o=["","","https://github.com/Larenen/LeagueTwitchAPI"],i=Object(u.b)({config:{duration:1500},opacity:1,from:{opacity:0}});return Object(a.useEffect)((function(){document.title=n[t-1]+" - \u0141ukasz Czerniawski"})),t<1||t>n.length?r.a.createElement("h1",{className:"title"},"Error"):r.a.createElement(u.a.div,{style:i,className:"containerProjectView"},r.a.createElement("h1",{className:"title-main"},n[t-1]),r.a.createElement("div",{className:"info"},r.a.createElement("p",{className:"description"},["Polish e-learning platform.","Online Bitcoin exchange platform.","Open source API that allows easy access to League of Legends stats for twitch.tv bots."][t-1]),l[t-1].length>0?r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",className:"button-small",href:l[t-1]},"Visit website"):null),r.a.createElement(E.a,{className:"slider",animation:"cubeAnimation"},[["/studyOnline1.png","/studyOnline2.png","/studyOnline3.png","/studyOnline4.png","/studyOnline5.png","/studyOnline6.png","/studyOnline7.png"],["/kantorOnline1.png","/kantorOnline2.png","/kantorOnline3.png","/kantorOnline4.png","/kantorOnline5.png","/kantorOnline6.png"],["/leagueApi1.png","/leagueApi2.png","/leagueApi3.png","/leagueApi4.png"]][t-1].map((function(e,t){return r.a.createElement("div",{key:t,"data-src":e})}))),r.a.createElement("section",{className:"section"},r.a.createElement("h2",{className:"title"},"About this project"),r.a.createElement("hr",null),r.a.createElement("p",null,["In this project I was responsible for the backend and database. Application allows to conduct online lessons. Users have ability to register as teacher or student. \n         As teacher user are allowed to specify what subject and on what level he wants to teach. \n         Then he can create time period in which he can conduct lessons. Students can search for teachers based on subject and level. \n         Platform provide built-in calendar to keep an eye on future lessons. There is also built-in communicator with audio, video communication and drawing whiteboard.","My role in this project was to implement backend server and database. I was also involved in designing UI. Application that allows you to exchange \n         Bitcoin online. Contains user management system, currency exchange settings and transactions history. Is integrated with external API enabling \n         partial automation of operations.","Open source project, that allows twitch.tv streamers to provide commands for their viewers. \n         Commands allow you to check the rank, win ratio, and mastery points on a given hero. "][t-1])),r.a.createElement("section",{className:"section"},r.a.createElement("h2",{className:"title"},"Technical details"),r.a.createElement("hr",null),r.a.createElement("ul",null,[["C#",".NET Core","ASP.NET Core Web API","ASP.NET Core Identity","Entity Framework Core","MSSQL Server","Redis","SignalR"],["C#",".NET Core","ASP.NET Core Web API","ASP.NET Core Identity","Entity Framework Core","MSSQL Server"],["C#",".NET Core","ASP.NET Core MVC"]][t-1].map((function(e,t){return r.a.createElement("li",{key:t},e)})))),[!0,!1,!0][t-1]?r.a.createElement("section",{className:"section"},r.a.createElement("h2",{className:"title"},"Resources"),r.a.createElement("hr",null),r.a.createElement("div",null,r.a.createElement("span",{className:"resources-info"},"This project is available at"),r.a.createElement("a",{className:"box-fill",target:"_blank",rel:"noopener noreferrer",href:l[t-1]},l[t-1])),o[t-1].length>0?r.a.createElement("div",null," ",r.a.createElement("span",{className:"resources-info"},"Project source")," ",r.a.createElement("a",{className:"box-fill",target:"_blank",rel:"noopener noreferrer",href:o[t-1]},"GitHub")):null):null)}var f=function(){return r.a.createElement(i.a,{basename:""},r.a.createElement(s,null),r.a.createElement(c.c,null,r.a.createElement(c.a,{path:"/portfolio"},r.a.createElement(p,null)),r.a.createElement(c.a,{path:"/project/:id"},r.a.createElement(g,null)),r.a.createElement(c.a,{path:"/"},r.a.createElement(d,null))))};o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(f,null)),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.601fa3ee.chunk.js.map