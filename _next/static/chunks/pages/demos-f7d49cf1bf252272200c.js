_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[9],{BAJz:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/demos",function(){return s("NJZb")}])},NJZb:function(e,t,s){"use strict";s.r(t),s.d(t,"__N_SSG",(function(){return u}));var c=s("nKUr"),n=s("q1tI"),l=s("BMmE"),a=s("TSYQ"),i=s.n(a),r=s("9ixD"),o=s("FBI6"),d=s("aRic"),m=s.n(d),b=function(e){var t=e.className,s=e.demo,n=Object(o.d)(s.cover);return Object(c.jsx)("div",{className:"portfolio-item ".concat(t),onClick:function(e){!function(e,t){if(e.target.classList.contains("stackUpEl"))return!1;window.open(t)}(e,s.website_url)},children:Object(c.jsxs)("div",{className:"relative block h-full bg-gray-300 bg-center bg-cover border rounded hover:bg-gray-200",style:{backgroundImage:"url(".concat(n,")")},children:[Object(c.jsxs)("div",{className:"absolute top-0 right-0 mt-4 mr-4 text-green-900",children:[Object(c.jsx)("a",{href:s.repo_url,target:"_blank",className:"p-2 text-2xl hover:text-gray-400",children:Object(c.jsx)("i",{className:"stackUpEl fab fa-git-alt"})}),Object(c.jsx)("a",{href:s.website_url,target:"_blank",className:"p-2 text-xl hover:text-gray-400",children:Object(c.jsx)("i",{className:"stackUpEl fas fa-external-link-alt"})})]}),Object(c.jsxs)("div",{className:"absolute bottom-0 w-full pt-2 pl-4 text-white bg-gray-700 portfolio-item-content",children:[Object(c.jsx)("h2",{className:"text-xl font-bold",children:s.name}),Object(c.jsx)("div",{className:"justify-center block py-1 text-sm technologies",children:s.tags&&s.tags.map((function(e){return Object(c.jsx)("span",{className:"inline-block pl-2",children:Object(c.jsx)("img",{src:"/technologies/".concat(e.slug,".png"),className:"h-4",alt:e.name})},e.slug)}))})]})]})})},u=!0;t.default=function(e){var t=e.website,a=e.demos,d=function(e){var t=e.custom_fields?Object(o.a)(e.custom_fields,"description"):{},s=e.custom_fields?Object(o.a)(e.custom_fields,"tag_filters"):[];return{meta:{title:e.title,description:e.description},content:{name:"Contact",description:t.value,tagFilters:s.json}}}(Object(o.c)(t,"phungnlg-demos")),u=d.meta,g=d.content,x=Object(n.useState)(""),j=x[0],f=x[1],p=Object(n.useState)(),h=p[0],N=p[1],O=g.tagFilters;Object(l.a)((function(){var e=s("Px4X");N(new e("#portfolios-grid",{itemSelector:".portfolio-item",layoutMode:"fitRows"})),w("*")}));var w=function(e){f(e),"*"!==e&&(e="."+e),h&&h.arrange({filter:e})},_=function(e){return e.tags.map((function(e){return e.slug})).join(" ")};return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(r.b,{title:u.title,description:u.description,openGraph:{title:"".concat(u.title," \ud83d\udc68\ud83c\udffd\u200d\ud83d\udcbb Phung NLG"),site_name:"".concat(u.title)}}),Object(c.jsxs)("div",{className:"container px-4 py-24 mx-auto",children:[Object(c.jsxs)("div",{className:"flex flex-wrap justify-between mb-4",children:[Object(c.jsxs)("div",{className:"p-4 text-center lg:w-6/12 lg:text-left sm:p-0",children:[Object(c.jsx)("h1",{className:"mb-6 text-3xl font-bold leading-normal xl:text-4xl lg:pt-4",children:g.name}),Object(c.jsx)("h3",{className:"mb-6 font-medium leading-relaxed xl:text-lg",children:g.description})]}),Object(c.jsx)("div",{className:"w-2/3 mx-auto lg:mx-0 lg:w-5/12",children:Object(c.jsx)("img",{src:m.a})})]}),Object(c.jsx)("div",{className:"flex flex-wrap",children:Object(c.jsx)("div",{className:"w-full mb-4 text-center lg:mb-2",children:O&&O.map((function(e){return Object(c.jsx)("button",{className:i()("text:sm lg:text-lg m-2 lg:m-4 bg-orange-500 font-bold p-2 lg:p-6 py-1 lg:py-2 text-white shadow-md rounded",{"bg-green-500":j===e.slug,"bg-gray-500":j!==e.slug}),onClick:function(){w(e.slug)},children:e.name},e.slug)}))})}),Object(c.jsx)("div",{id:"portfolios-grid",className:"flex flex-wrap",children:a&&a.map((function(e){return Object(c.jsx)(b,{demo:e,className:"w-full lg:w-1/2 py-4 lg:px-4 cursor-pointer ".concat(_(e))},e.id)}))})]})]})}},aRic:function(e,t){e.exports="/_next/static/images/demos-59182388c829b39c4fa4e58132584ee8.svg"}},[["BAJz",1,0,2,3]]]);