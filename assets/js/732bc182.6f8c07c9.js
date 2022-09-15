"use strict";(self.webpackChunkrelay_website=self.webpackChunkrelay_website||[]).push([[99161],{3905:(e,t,n)=>{n.r(t),n.d(t,{MDXContext:()=>l,MDXProvider:()=>u,mdx:()=>y,useMDXComponents:()=>p,withMDXComponents:()=>d});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},a.apply(this,arguments)}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),d=function(e){return function(t){var n=p(t.components);return o.createElement(e,a({},t,{components:n}))}},p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=p(n),u=r,m=d["".concat(i,".").concat(u)]||d[u]||f[u]||a;return n?o.createElement(m,s(s({ref:t},l),{},{components:n})):o.createElement(m,s({ref:t},l))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},40176:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>f,frontMatter:()=>s,metadata:()=>l,toc:()=>p});var o=n(83117),r=n(80102),a=(n(67294),n(3905)),i=["components"],s={id:"introduction-to-relay",title:"Introduction to Relay",original_id:"introduction-to-relay",slug:"/"},c=void 0,l={unversionedId:"introduction-to-relay",id:"version-v1.5.0/introduction-to-relay",title:"Introduction to Relay",description:"Relay is a JavaScript framework for building data-driven React applications powered by GraphQL, designed from the ground up to be easy to use, extensible and, most of all, performant. Relay accomplishes this with static queries and ahead-of-time code generation.",source:"@site/versioned_docs/version-v1.5.0/Introduction-IntroductionToRelay.md",sourceDirName:".",slug:"/",permalink:"/docs/v1.5.0/",draft:!1,editUrl:"https://github.com/facebook/relay/tree/main/website/versioned_docs/version-v1.5.0/Introduction-IntroductionToRelay.md",tags:[],version:"v1.5.0",lastUpdatedBy:"Jordan Eldredge",lastUpdatedAt:1663259967,formattedLastUpdatedAt:"9/15/2022",frontMatter:{id:"introduction-to-relay",title:"Introduction to Relay",original_id:"introduction-to-relay",slug:"/"},sidebar:"version-v1.5.0/docs",next:{title:"Prerequisites",permalink:"/docs/v1.5.0/prerequisites"}},d={},p=[],u={toc:p};function f(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.mdx)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("p",null,"Relay is a JavaScript framework for building data-driven React applications powered by GraphQL, designed from the ground up to be easy to use, extensible and, most of all, performant. Relay accomplishes this with static queries and ahead-of-time code generation."),(0,a.mdx)("p",null,(0,a.mdx)("a",{parentName:"p",href:"https://facebook.github.io/react/"},"React")," allows views to be defined as components where every component is responsible for rendering a part of the UI. Composing other components is how to build complex UIs. Each React component doesn't need to know the inner workings of the composed components."),(0,a.mdx)("p",null,"Relay couples React with GraphQL and develops the idea of encapsulation further. It allows components to specify what data they need and the Relay framework provides the data. This makes the data needs of inner components opaque and allows composition of those needs. Thinking about what data an app needs becomes localized to the component making it easier to reason about what fields are needed or no longer needed."))}f.isMDXComponent=!0}}]);