(this["webpackJsonpreact_tabs-with-router"]=this["webpackJsonpreact_tabs-with-router"]||[]).push([[0],{17:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var c=a(9),n=a.n(c),s=a(4),i=a(2),b=a(6),j=a.n(b),l=a(1),r=function(e){var t=e.to,a=e.title;return Object(l.jsx)(s.c,{to:t,className:function(e){var t=e.isActive;return j()("navbar-item",{"is-active":t})},children:a})},d=function(){return Object(l.jsx)("nav",{className:"navbar is-light is-fixed-top is-mobile has-shadow","data-cy":"Nav",role:"navigation","aria-label":"main navigation",children:Object(l.jsx)("div",{className:"container",children:Object(l.jsxs)("div",{className:"navbar-brand",children:[Object(l.jsx)(r,{title:"Home",to:"/"}),Object(l.jsx)(r,{title:"Tabs",to:"tabs"})]})})})},o=function(){return Object(l.jsx)("div",{className:"container",children:Object(l.jsx)("h1",{className:"title",children:"Home page"})})},x=function(){return Object(l.jsx)("div",{className:"container",children:Object(l.jsx)("h1",{className:"title",children:"Page not found"})})},h=(a(0),function(e){var t=e.tabs,a=e.selectedTabId,c=t.find((function(e){return e.id===a}));return Object(l.jsxs)("div",{"data-cy":"TabsComponent",children:[Object(l.jsx)("div",{className:"tabs is-boxed",children:Object(l.jsx)("ul",{children:t.map((function(e){var t=e.id,a=e.title;return Object(l.jsx)("li",{className:j()({"is-active":t===(null===c||void 0===c?void 0:c.id)}),"data-cy":"Tab",children:Object(l.jsx)(s.b,{to:"/tabs/".concat(t),"data-cy":"TabLink",children:a})},t)}))})}),Object(l.jsx)("div",{className:"block","data-cy":"TabContent",children:(null===c||void 0===c?void 0:c.content)||"Please select a tab"})]})}),O=[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}],m=function(){var e=Object(i.h)().tabId;return Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)("h1",{className:"title",children:"Tabs page"}),Object(l.jsx)(h,{tabs:O,selectedTabId:null!==e&&void 0!==e?e:null})]})},u=(a(15),a(16),a(17),function(){return Object(l.jsxs)("div",{"data-cy":"app",children:[Object(l.jsx)(d,{}),Object(l.jsx)("main",{className:"section",children:Object(l.jsxs)(i.d,{children:[Object(l.jsxs)(i.b,{path:"tabs",children:[Object(l.jsx)(i.b,{index:!0,element:Object(l.jsx)(m,{})}),Object(l.jsx)(i.b,{path:":tabId",element:Object(l.jsx)(m,{})})]}),Object(l.jsx)(i.b,{path:"/",element:Object(l.jsx)(o,{})}),Object(l.jsx)(i.b,{path:"home",element:Object(l.jsx)(i.a,{to:"/",replace:!0})}),Object(l.jsx)(i.b,{path:"*",element:Object(l.jsx)(x,{})})]})})]})});n.a.render(Object(l.jsx)(s.a,{children:Object(l.jsx)(u,{})}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.e9d4f42d.chunk.js.map