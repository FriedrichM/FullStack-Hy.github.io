(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{"/4ef":function(e,a,t){},"0v46":function(e,a,t){},N1om:function(e,a,t){var n=t("sgoq")((function(e,a,t){return e+(t?"-":"")+a.toLowerCase()}));e.exports=n},XFRJ:function(e,a,t){"use strict";var n=t("zLVn"),r=(t("m4Pe"),t("jsr+")),o=t("Wbzz"),l=t("q1tI"),c=t.n(l),s=t("u1fg"),i=function(e){var a,t=e.className,l=e.wrapperClassName,i=e.link,u=e.content,m=e.stack,d=e.bold,p=e.thickBorder,b=e.upperCase,g=Object(n.a)(e,["className","wrapperClassName","link","content","stack","bold","thickBorder","upperCase"]),f=c.a.createElement("div",{className:"arrow__container arrows--horizontal "+t},u.map((function(e,a){var t={backgroundColor:e.backgroundColor?e.backgroundColor:"transparent",color:e.backgroundColor===s.black?"white":s.black};return c.a.createElement("div",Object.assign({key:"arrow"+a,className:"arrow__wrapper"},g),c.a.createElement("div",{className:"arrow__rectangle "+(d?"bold":"")+" "+(p?"arrow__rectangle--thick-border":""),style:t},e.link?c.a.createElement(o.Link,{to:e.link},b?e.text.toUpperCase():e.text):b?e.text.toUpperCase():e.text),c.a.createElement("div",{className:"arrow__point "+(p?"arrow__point--thick-border":""),style:t}))})));return m||i?!m&&i?a=c.a.createElement("div",{className:"spacing--after-small auto-bottom-margin"},c.a.createElement(o.Link,{to:i,style:{display:"inline-block"}},f)):m&&(a=c.a.createElement("div",{className:"col-10 spacing--after "+l},c.a.createElement("div",{className:"arrow__container arrow__container--with-link",style:{display:"flex",flexDirection:"column"}},u.map((function(e){var a={backgroundColor:e.backgroundColor?e.backgroundColor:"transparent",color:e.backgroundColor===s.black?"white":s.black};return c.a.createElement(o.Link,Object.assign({key:e.text,to:e.path,className:"arrow__wrapper--stacked "+t},g),c.a.createElement(r.a,{flex:!0,className:"arrow__rectangle",style:a},c.a.createElement("p",{className:"arrow--stacked-title"},c.a.createElement("span",null,e.text))),c.a.createElement("div",{className:"arrow__point",style:a}))}))))):a=c.a.createElement("div",{className:"col-10 spacing--after"},f),a};i.defaultProps={className:"",wrapperClassName:""},a.a=i},Zosa:function(e,a,t){"use strict";t.d(a,"a",(function(){return n}));var n={0:"light-violet",1:"green",2:"dark-orange",3:"light-orange",4:"yellow",5:"pink",6:"violet",7:"light-blue",8:"turquoise",9:"light-green",10:"part10-light-blue",11:"purple"}},gqR3:function(e,a){e.exports={fi:"Helsingin yliopiston ja Houston Inc:n kaikille avoin ja ilmainen moderniin Javascript-pohjaiseen web-sovelluskehitykseen keskittyvä kurssi. Osallistujilta edellytetään vahvaa ohjelmointirutiinia, pitkäjänteistyyttä ja valmiuksia omatoimiseen ongelmanratkaisuun.",en:"Open online course on Javascript based modern web development by University of Helsinki and Houston Inc.."}},jyfX:function(e,a,t){var n=t("sZCt")("kebabCase",t("N1om"),t("Eszj"));n.placeholder=t("wuTn"),e.exports=n},kl3L:function(e,a,t){"use strict";t("l54/");var n=t("jsr+"),r=t("Wbzz"),o=t("q1tI"),l=t.n(o),c=t("ymbu"),s=t.n(c),i=t("c7NW"),u=t.n(i),m=t("9Koi"),d=(t("UX5x"),function(e){return String.fromCharCode(e.charCodeAt(0)-1)}),p=function(e){return String.fromCharCode(e.charCodeAt(0)+1)},b=function(e,a){return Object.keys(s.a[a]).includes(e.toString())},g=function(e,a,t){return p(e)in s.a[t][a]},f=function(e,a,t){return!e&&b(a+1,t)||e&&g(e,a,t)},h=function(e){return"fi"===e?"Osa":"Part"},v=function(e){return"fi"===e?"/osa":"/"+e+"/part"},k=function(e){var a=e.part,t=e.letter,o=e.lang,c=Object(m.a)().t;return l.a.createElement(n.a,{className:"container spacing spacing--after-large prev-next__container"},!t&&b(a-1,o)?l.a.createElement(l.a.Fragment,null,l.a.createElement(r.Link,{to:""+v(o)+(a-1),className:"col-4--mobile push-right-1 prev"},l.a.createElement(n.a,{flex:!0,dirColumn:!0},l.a.createElement("p",null,h(o)," ",a-1),l.a.createElement("b",null,c("previousPart")))),f(t,a,o)&&l.a.createElement("div",{className:"col-1--mobile separator"})):t?"a"!==t?l.a.createElement(l.a.Fragment,null,l.a.createElement(r.Link,{to:""+v(o)+a+"/"+u()(s.a[o][a][d(t)]),className:"col-4--mobile push-right-1 prev"},l.a.createElement(n.a,{flex:!0,dirColumn:!0},l.a.createElement("p",null,h(o)," ",""+a+d(t)),l.a.createElement("b",null,c("previousPart")))),f(t,a,o)&&l.a.createElement("div",{className:"col-1--mobile separator"})):b(a-1,o)?l.a.createElement(l.a.Fragment,null,l.a.createElement(r.Link,{to:""+v(o)+(a-1),className:"col-4--mobile push-right-1 prev"},l.a.createElement(n.a,{flex:!0,dirColumn:!0},l.a.createElement("p",null,h(o)," ",a-1),l.a.createElement("b",null,c("previousPart")))),f(t,a,o)&&l.a.createElement("div",{className:"col-1--mobile separator"})):l.a.createElement(n.a,{className:"push-right-1"}):l.a.createElement(n.a,{className:"push-right-1"}),!t&&b(a+1,o)?l.a.createElement(r.Link,{to:""+v(o)+(a+1),className:"col-4--mobile push-left-1 next"},l.a.createElement(n.a,{flex:!0,dirColumn:!0},l.a.createElement("p",null,h(o)," ",a+1),l.a.createElement("b",null,c("nextPart")))):t?g(t,a,o)?l.a.createElement(r.Link,{to:""+v(o)+a+"/"+u()(s.a[o][a][p(t)]),className:"col-4--mobile push-left-1 next"},l.a.createElement(n.a,{flex:!0,dirColumn:!0},l.a.createElement("p",null,h(o)," ",""+a+p(t)),l.a.createElement("b",null,c("nextPart")))):b(a+1,o)?l.a.createElement(r.Link,{to:""+v(o)+(a+1),className:"col-4--mobile push-left-1 next"},l.a.createElement(n.a,{flex:!0,dirColumn:!0},l.a.createElement("p",null,h(o)," ",a+1),l.a.createElement("b",null,c("nextPart")))):l.a.createElement(n.a,{className:"push-left-1"}):l.a.createElement(n.a,{className:"push-left-1"}))};k.defaultProps={part:void 0,letter:void 0},a.a=k},"l54/":function(e,a,t){},m4Pe:function(e,a,t){},mt4B:function(e,a,t){"use strict";t.d(a,"a",(function(){return l}));var n=t("zLVn"),r=(t("rXWv"),t("q1tI")),o=t.n(r),l=function(e){var a=e.className,t=e.backgroundColor,r=Object(n.a)(e,["className","backgroundColor"]),l=t?{backgroundColor:t}:null;return o.a.createElement("div",Object.assign({className:"banner "+a,style:l},r))};l.defaultProps={className:""}},rXWv:function(e,a,t){},tkMx:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return J}));var n=t("KQm4"),r=t("dI71"),o=(t("xPXs"),t("q1tI")),l=t.n(o),c=t("XFRJ"),s=t("y2O/"),i=t.n(s),u=t("mt4B"),m=t("9Koi"),d=t("jsr+"),p=(t("/4ef"),function(e){var a=e.part,t=e.letter,n=Object(m.a)(),r=n.t,o=n.i18n.language,c="fi"===o?"osa"+a:"part"+a;return l.a.createElement(d.a,{flex:!0,className:"container spacing",centered:!0},l.a.createElement("a",{className:"edit-link",target:"__BLANK",href:"zh"===o?"https://github.com/RichardStark/fullstack-hy2020.github.io/edit/source/src/content/"+a+"/"+o+"/"+c+t+".md":"https://github.com/FullStack-HY/FullStack-Hy.github.io/edit/source/src/content/"+a+"/"+o+"/"+c+t+".md"},l.a.createElement("span",null,r("proposeChanges"))))}),b=t("CN8t"),g=t("Bl7J"),f=t("76ZC"),h=t.n(f),v=t("kl3L"),k=t("vrFN"),E=(t("0v46"),t("XSxc")),y=t("Wbzz"),N=t("jyfX"),C=t.n(N),w=t("ymbu"),x=t.n(w),I=t("c7NW"),A=t.n(I),j=t("xB9W");function R(e,a){var t;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(t=function(e,a){if(!e)return;if("string"==typeof e)return S(e,a);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return S(e,a)}(e))||a&&e&&"number"==typeof e.length){t&&(e=t);var n=0;return function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(t=e[Symbol.iterator]()).next.bind(t)}function S(e,a){(null==a||a>e.length)&&(a=e.length);for(var t=0,n=new Array(a);t<a;t++)n[t]=e[t];return n}var P=function(e){function a(a){var t;return(t=e.call(this,a)||this).componentDidMount=function(){var e=Array.from(document.querySelectorAll("h3")).map((function(e){return e.id=C()(e.innerText),e.classList.add("offset"),{text:e.innerText,id:e.id,level:e.nodeName}}));t.setState({headings:e}),window.addEventListener("scroll",t.scrollHandler)},t.scrollHandler=function(){t.scrollTimer&&clearTimeout(t.scrollTimer),t.scrollTimer=setTimeout((function(){for(var e,a=window.scrollY,n=t.state.headings[0],r=R(t.state.headings);!(e=r()).done;){var o=e.value,l=document.getElementById(o.id);if(l&&l.offsetTop>=a)break;n=o}t.state.selectedItem!==n.id&&t.setState({selectedItem:n.id})}),50)},t.loopThroughPartsNode=function(e){var a=t.state.headings,n=t.props,r=n.part,o=n.letter,c=n.currentPath,s=n.currentPartTitle,i=n.colorCode,u=n.lang,m=[];for(var d in e)console.log(Object(j.a)(u,r,"/"+A()(e[d]))),s!==e[d]?m.push(l.a.createElement(y.Link,{key:d,className:"left-navigation-link",style:{borderColor:i},to:Object(j.a)(u,r,"/"+A()(e[d]))},d+" "+e[d])):m.push(l.a.createElement(E.a,{containerClassName:"accordion--side-navigation",style:{color:i},titleStyle:{backgroundColor:i,borderColor:i},initiallyOpened:!0,key:d,title:o+" "+e[d],selectedItem:t.state.selectedItem,list:a.map((function(e){return{id:e.id,href:c+"#"+e.id,text:e.text}}))}));return m},t.state={headings:[],selectedItem:null},t}Object(r.a)(a,e);var t=a.prototype;return t.componentWillUnmount=function(){window.removeEventListener("scroll",this.scrollHandler)},t.render=function(){var e=this.props.part;return l.a.createElement(d.a,{className:"scroll-navigation-container"},l.a.createElement(d.a,{className:"scroll-navigation-container-inner"},l.a.createElement(d.a,{tag:"ul",dirColumn:!0,className:"scroll-navigation "+this.props.className},this.loopThroughPartsNode(x.a[this.props.lang][e]))))},a}(o.Component);P.defaultProps={className:"",lang:"fi"};var L=P,T=t("K4iA"),F=t("u1fg"),O=t("GkXj"),_=t.n(O),B=t("gqR3"),M=t.n(B),D=t("5I0T"),z=t.n(D),G=t("Zosa"),W=t("33yf"),X=t.n(W),J=function(e){function a(a){var t;return(t=e.call(this,a)||this).handleScroll=function(){window.scrollY>300&&!t.state.showArrowUp?t.setState({showArrowUp:!0}):window.scrollY<=300&&t.state.showArrowUp&&t.setState({showArrowUp:!1})},t.state={h1Title:"",otherTitles:"",showArrowUp:!1},t}Object(r.a)(a,e);var t=a.prototype;return t.componentDidMount=function(){var e=Array.from(document.querySelectorAll("a")),a=document.querySelector("h1"),t=document.querySelectorAll("h3"),r=Array.from(t).map((function(e){return e.innerText})),o=this.props.data.markdownRemark.frontmatter;e.map((function(e){return e.style="border-color: "+F[G.a[o.part]],e.classList.contains("language-switcher__language")?e.target=e.target:e.target="_blank",e.onmouseover=function(){e.style.backgroundColor=F[G.a[o.part]]},e.onmouseleave=function(){e.style.backgroundColor="transparent"},null})),this.setState({h1Title:a.innerText,otherTitles:Object(n.a)(r)}),window.addEventListener("scroll",this.handleScroll)},t.componentWillUnmount=function(){window.removeEventListener("scroll",this.handleScroll)},t.render=function(){var e=this.props.data.markdownRemark,a=e.frontmatter,t=e.html,r=a.mainImage,o=a.letter,s=a.part,m=a.lang,f=F[G.a[s]],E={replace:function(e){var a=e.type,t=e.name,n=e.attribs,r=e.children;return"tag"===a&&"picture"===t?l.a.createElement("picture",null,l.a.createElement("img",{style:{borderColor:f},alt:"fullstack content",src:r[0].attribs.src})):"tag"===a&&"pre"===t?l.a.createElement("pre",null,_()(r,E)):"tag"===a&&"content"===n.class?l.a.createElement(d.a,{className:"course-content"},l.a.createElement(d.a,{className:"course-content-inner"},_()(r,E))):"tag"===a&&"tasks"===n.class?l.a.createElement(u.a,{style:{backgroundColor:f},className:"spacing tasks content-banner"},l.a.createElement(d.a,{className:"course-content",style:{borderColor:f,backgroundColor:"transparent"}},l.a.createElement(d.a,{className:"course-content-inner"},"pre"===r.name?l.a.createElement("pre",null,_()(r,E)):_()(r,E)))):void 0}};return l.a.createElement(g.a,null,l.a.createElement(k.a,{lang:m,title:"Fullstack "+("fi"===m?"osa":"part")+s+" | "+this.state.h1Title,description:M.a[m],keywords:[].concat(Object(n.a)(z.a),[this.state.h1Title],Object(n.a)(this.state.otherTitles))}),this.state.showArrowUp&&l.a.createElement("div",{className:"arrow-go-up",onClick:function(){return window.scrollTo({top:0,left:0,behavior:"smooth"})}},l.a.createElement("img",{src:i.a,alt:"arrow-up"})),l.a.createElement("div",{className:"course-container spacing--after"},l.a.createElement(u.a,{className:"part-main__banner spacing--mobile--small",backgroundColor:f,style:{backgroundImage:"url("+X.a.resolve(r.publicURL)+")",backgroundColor:f}},l.a.createElement("div",{className:"container spacing--after"},l.a.createElement(c.a,{className:"breadcrumb",content:[{backgroundColor:f,text:"Fullstack",link:"/"+("fi"===m?"":m+"/")+"#course-contents"},{backgroundColor:f,text:("fi"===m?"Osa":"Part")+" "+s,link:Object(j.a)(m,s)},{backgroundColor:F.black,text:x.a[m][s][o]}]}))),l.a.createElement(d.a,{className:"course"},l.a.createElement(L,{part:s,letter:o,lang:m,currentPartTitle:x.a[m][s][o],currentPath:Object(j.a)(m,s,"/"+A()(x.a[m][s][o])),colorCode:f}),l.a.createElement(d.a,{className:"course-content-container"},l.a.createElement(d.a,{className:"course-content",autoBottomMargin:!0},l.a.createElement(d.a,{className:"course-content-inner"},l.a.createElement("p",{className:"col-1 letter",style:{borderColor:f}},o),l.a.createElement(T.a,{headingLevel:"h1",text:x.a[m][s][o]}))),h()(t,E))),l.a.createElement(p,{part:s,letter:o,lang:m}),l.a.createElement(v.a,{part:s,letter:o,lang:m})),l.a.createElement(b.a,{lang:m}))},a}(o.Component)},u1fg:function(e){e.exports=JSON.parse('{"white":"#ffffff","black":"#33332d","main":"#e1e1e1","violet":"#B795F3","turquoise":"#82F7EB","green":"#AEFFDA","dark-orange":"#EB8755","light-orange":"#EEAC5D","yellow":"#F7F382","pink":"#E693CB","blue":"#706BE4","light-blue":"#82D2F7","light-violet":"#B2BBF0","light-green":"#D4FCB5","smartly-purple":"#f8f5f9","part10-light-blue":"#AFF4FE","purple":"#D4A8E2"}')},xB9W:function(e,a,t){"use strict";a.a=function(e,a,t){return void 0===t&&(t=""),"fi"===e?"/osa"+a+t:"/"+e+"/part"+a+t}},xPXs:function(e,a,t){},"y2O/":function(e,a){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCIgdmlld0JveD0iMCAwIDQ4IDQ4Ij48dGl0bGU+aWNfYXJyb3dfdXB3YXJkXzQ4cHg8L3RpdGxlPg0KICAgIDxnIGNsYXNzPSJuYy1pY29uLXdyYXBwZXIiIGZpbGw9IiMxMTExMTEiPg0KICAgICAgICA8cGF0aCBkPSJNOCAyNGwyLjgzIDIuODNMMjIgMTUuNjZWNDBoNFYxNS42NmwxMS4xNyAxMS4xN0w0MCAyNCAyNCA4IDggMjR6Ii8+DQogICAgPC9nPg0KPC9zdmc+"},ymbu:function(e,a){e.exports={fi:{0:{a:"Yleistä",b:"Web-sovelluksen toimintaperiaatteita"},1:{a:"Reactin alkeet",b:"Javascriptiä",c:"Komponentin tila ja tapahtumankäsittely",d:"Monimutkaisempi tila, Reactin debuggaus"},2:{a:"Kokoelmien renderöinti ja moduulit",b:"Lomakkeiden käsittely",c:"Palvelimella olevan datan hakeminen",d:"Palvelimella olevan datan muokkaaminen",e:"Tyylien lisääminen React-sovellukseen"},3:{},4:{},5:{},6:{},7:{}},en:{0:{a:"General info",b:"Fundamentals of Web apps"},1:{a:"Introduction to React",b:"JavaScript",c:"Component state, event handlers",d:"A more complex state, debugging React apps"},2:{a:"Rendering a collection, modules",b:"Forms",c:"Getting data from server",d:"Altering data in server",e:"Adding styles to React app"},3:{},4:{},5:{},6:{},7:{}},zh:{0:{a:"基础知识",b:"Web 应用的基础设施"},1:{a:"React 简介",b:"JavaScript",c:"组件状态，事件处理",d:"深入React 应用调试"},2:{a:"从渲染集合到模块学习",b:"表单",c:"从服务器获取数据",d:"在服务端将数据Alert出来",e:"给React应用加点样式"},3:{a:"Node.js 与 Express",b:"把应用部署到网上",c:"将数据存入MongoDB",d:"ESLint与代码检查"},4:{a:"从后端结构到测试入门",b:"测试后端应用",c:"用户管理",d:"密钥认证"},5:{a:"完成前台的登录功能",b:"props.children 与 proptypes",c:"测试React 应用",d:"端到端测试"},6:{a:"Flux架构与Redux",b:"再来点 reducers",c:"在Redux应用中与后端通信",d:"connect方法"},7:{a:"React-router",b:"自定义 hooks",c:"样式进阶",d:"Webpack",e:"各种各样的Class components",f:"练习：扩展你的博客列表"},8:{a:"GraphQL服务器",b:"React 与 GraphQL",c:"数据库与用户管理",d:"登录与更新缓存",e:"Fragments 与 subscriptions"},9:{a:"背景与介绍",b:"Typescript的一小步",c:"Typescript版的express应用",d:"利用Typescript编写React应用"},10:{a:"React Native 介绍",b:"React Native 入门",c:"与服务端通信",d:"测试与扩展我们的应用"},11:{a:"CI/CD 简介",b:"开始认识 GitHub Actions 吧",c:"部署",d:"保持健康状态",e:"再扩展一下"}},es:{0:{a:"Información general",b:"Fundamentos de las aplicaiones web"},1:{a:"Introducción a React",b:"JavaScript",c:"Estado del componente, controladores de eventos",d:"Un estado más complejo, depurando aplicaciones React"},2:{a:"Renderizando una colección, módulos",b:"Formularios",c:"Obteniendo datos del servidor",d:"Alterando datos en el servidor",e:"Agregar estilos a la aplicación React"},3:{a:"Node.js y Express",b:"Implementación de la aplicación en Internet",c:"Guardando datos en MongoDB",d:"Validación y ESLint"},4:{a:"Estructura de la aplicación backend, introducción a las pruebas",b:"Porbando el backend",c:"Administración de usuarios",d:"Autenticación de token"},5:{a:"Iniciar sesión en la interfaz",b:"props.children y proptypes",c:"Probando aplicaciones React",d:"Pruebas de extremo a extremo"},6:{a:"Flux-architecture y Redux",b:"Muchos reducers",c:"Comunicarse con el servidor en una aplicación redux",d:"conectar"},7:{a:"React-router",b:"Hooks personalizados",c:"Más sobre estilos",d:"Webpack",e:"Componentes de clases, varios",f:"Ejercicios: ampliar la lista de blogs"},8:{a:"Servidor GraphQL",b:"React y GraphQL",c:"Administración de bases de datos y usuarios",d:"Iniciar sesión y actualizar la caché",e:"Fragmentos y suscripciones"},9:{a:"Antecedentes e introducción",b:"Primeros pasos con Typescript",c:"Escribiendo la aplicación express",d:"React con tipos"},10:{a:"Introducción a React Native",b:"Conceptos básicos de React Native",c:"Comunicandose con el servidor",d:"Probar y ampliar nuestra aplicación"},11:{a:"Introducción a CI/CD",b:"Introducción a las acciones de Github",c:"Despliegue",d:"Manteniéndose verde",e:"Expandiéndose aún más"}}}}}]);
//# sourceMappingURL=component---src-templates-content-template-js-781ef613ae92dd3bded9.js.map