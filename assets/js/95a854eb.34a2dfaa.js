"use strict";(self.webpackChunkrelay_website=self.webpackChunkrelay_website||[]).push([[15987],{3905:(e,t,n)=>{n.r(t),n.d(t,{MDXContext:()=>p,MDXProvider:()=>m,mdx:()=>g,useMDXComponents:()=>c,withMDXComponents:()=>d});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},a.apply(this,arguments)}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=o.createContext({}),d=function(e){return function(t){var n=c(t.components);return o.createElement(e,a({},t,{components:n}))}},c=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},m=function(e){var t=c(e.components);return o.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},y=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,y=d["".concat(i,".").concat(m)]||d[m]||u[m]||a;return n?o.createElement(y,s(s({ref:t},p),{},{components:n})):o.createElement(y,s({ref:t},p))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=y;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}y.displayName="MDXCreateElement"},72276:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>s,metadata:()=>p,toc:()=>c});var o=n(83117),r=n(80102),a=(n(67294),n(3905)),i=["components"],s={id:"upgrading-to-relay-hooks",title:"Upgrading to Relay Hooks",slug:"/migration-and-compatibility/"},l=void 0,p={unversionedId:"migration-and-compatibility/upgrading-to-relay-hooks",id:"version-v11.0.0/migration-and-compatibility/upgrading-to-relay-hooks",title:"Upgrading to Relay Hooks",description:"Relay Hooks is a set of new Hooks-based APIs for using Relay with React that improves upon the existing container-based APIs.",source:"@site/versioned_docs/version-v11.0.0/migration-and-compatibility/upgrading-to-relay-hooks.md",sourceDirName:"migration-and-compatibility",slug:"/migration-and-compatibility/",permalink:"/docs/v11.0.0/migration-and-compatibility/",draft:!1,editUrl:"https://github.com/facebook/relay/tree/main/website/versioned_docs/version-v11.0.0/migration-and-compatibility/upgrading-to-relay-hooks.md",tags:[],version:"v11.0.0",lastUpdatedBy:"Mathew Luo",lastUpdatedAt:1663791612,formattedLastUpdatedAt:"9/21/2022",frontMatter:{id:"upgrading-to-relay-hooks",title:"Upgrading to Relay Hooks",slug:"/migration-and-compatibility/"},sidebar:"version-v11.0.0/docs",previous:{title:"Testing Relay with Preloaded Queries",permalink:"/docs/v11.0.0/guides/testing-relay-with-preloaded-queries/"},next:{title:"Suspense Compatibility",permalink:"/docs/v11.0.0/migration-and-compatibility/suspense-compatibility/"}},d={},c=[{value:"Accessing Relay Hooks",id:"accessing-relay-hooks",level:2},{value:"Next Steps",id:"next-steps",level:2}],m={toc:c};function u(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.mdx)("wrapper",(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("p",null,(0,a.mdx)("a",{parentName:"p",href:"/blog/2021/03/09/introducing-relay-hooks"},"Relay Hooks")," is a set of new Hooks-based APIs for using Relay with React that improves upon the existing container-based APIs."),(0,a.mdx)("p",null,"In this we will cover how to start using Relay Hooks, what you need to know about compatibility, and how to migrate existing container-based code to Hooks if you choose to do so. However, note that migrating existing code to Relay Hooks is ",(0,a.mdx)("strong",{parentName:"p"},(0,a.mdx)("em",{parentName:"strong"},"not"))," required, and ",(0,a.mdx)("strong",{parentName:"p"},"container-based code will continue to work"),"."),(0,a.mdx)("h2",{id:"accessing-relay-hooks"},"Accessing Relay Hooks"),(0,a.mdx)("p",null,"Make sure the latest versions of React and Relay are installed, and that you\u2019ve followed additional setup in our ",(0,a.mdx)("a",{parentName:"p",href:"../getting-started/installation-and-setup/"},"Installation & Setup")," guide:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre"},"yarn add react react-dom react-relay\n")),(0,a.mdx)("p",null,"Then, you can import Relay Hooks from the ",(0,a.mdx)("strong",{parentName:"p"},(0,a.mdx)("inlineCode",{parentName:"strong"},"react-relay"))," module, or if you only want to include Relay Hooks in your bundle, you can import them from ",(0,a.mdx)("strong",{parentName:"p"},(0,a.mdx)("inlineCode",{parentName:"strong"},"react-relay/hooks")),":"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-js"},"import {graphql, useFragment} from 'react-relay'; // or 'react-relay/hooks'\n\n// ...\n")),(0,a.mdx)("h2",{id:"next-steps"},"Next Steps"),(0,a.mdx)("p",null,"Check out the following guides in this section:"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"./suspense-compatibility/"},"Suspense Compatibility")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"./relay-hooks-and-legacy-container-apis/"},"Relay Hooks and Legacy Container APIs"))),(0,a.mdx)("p",null,"For more documentation on the APIs themselves, check out our ",(0,a.mdx)("a",{parentName:"p",href:"../api-reference/relay-environment-provider"},"API Reference")," or our ",(0,a.mdx)("a",{parentName:"p",href:"../guided-tour/"},"Guided Tour"),"."))}u.isMDXComponent=!0}}]);