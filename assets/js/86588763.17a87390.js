"use strict";(self.webpackChunkrelay_website=self.webpackChunkrelay_website||[]).push([[65972],{3905:(e,n,t)=>{t.r(n),t.d(n,{MDXContext:()=>c,MDXProvider:()=>p,mdx:()=>y,useMDXComponents:()=>s,withMDXComponents:()=>d});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(){return o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},o.apply(this,arguments)}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function u(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),d=function(e){return function(n){var t=s(n.components);return r.createElement(e,o({},n,{components:t}))}},s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):u(u({},n),e)),t},p=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(t),p=a,m=d["".concat(i,".").concat(p)]||d[p]||f[p]||o;return t?r.createElement(m,u(u({ref:n},c),{},{components:t})):r.createElement(m,u({ref:n},c))}));function y(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var u={};for(var l in n)hasOwnProperty.call(n,l)&&(u[l]=n[l]);u.originalType=e,u.mdxType="string"==typeof e?e:a,i[1]=u;for(var c=2;c<o;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},68629:(e,n,t)=>{t.d(n,{Z:()=>f});var r=t(39960),a=t(44256),o=t(67294);function i(){var e=window.encodeURI(JSON.stringify({title:"Feedback about "+window.location.pathname,description:"**!!! Required !!!**\n\nPlease modify the task description to let us know how the docs can be improved.\n\n**Please do not ask support questions via this form! Instead, ask in fburl.com/relay_support**",tag_ids:{add:[0xac96423e5b680,0x64079768ac750]}}));window.open("https://www.internalfb.com/tasks/?n="+e)}function u(e){var n=e.children;return o.createElement("div",{className:"docsRating",id:"docsRating"},o.createElement("hr",null),n)}var l=function(){var e=o.useState(!1),n=e[0],t=e[1],r=function(e){t(!0),function(e){window.ga&&window.ga("send",{hitType:"event",eventCategory:"button",eventAction:"feedback",eventValue:e})}(e)};return n?"Thank you for letting us know!":o.createElement(o.Fragment,null,"Is this page useful?",o.createElement("svg",{className:"i_thumbsup",alt:"Like",id:"docsRating-like",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return r(1)}},o.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})),o.createElement("svg",{className:"i_thumbsdown",alt:"Dislike",id:"docsRating-dislike",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return r(0)}},o.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})))},c=function(){return o.createElement("p",null,"Let us know how these docs can be improved by",o.createElement("a",{className:"button",role:"button",tabIndex:0,onClick:i},"Filing a task"))},d=function(){return o.createElement("p",null,"Help us make the site even better by"," ",o.createElement(r.default,{to:"https://www.surveymonkey.com/r/FYC9TCJ"},"answering a few quick questions"),".")},s=function(){return o.createElement(u,null,o.createElement(c,null),o.createElement(l,null),o.createElement(d,null))},p=function(){return o.createElement(u,null,o.createElement(l,null),o.createElement(d,null))};const f=function(){return(0,a.fbContent)({internal:o.createElement(s,null),external:o.createElement(p,null)})}},28755:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>c,default:()=>m,frontMatter:()=>l,metadata:()=>d,toc:()=>p});var r=t(83117),a=t(80102),o=(t(67294),t(3905)),i=t(68629),u=["components"],l={id:"use-preloaded-query",title:"usePreloadedQuery",slug:"/api-reference/use-preloaded-query/",description:"API reference for usePreloadedQuery, a React hook used to read query data from the Relay store using a query reference",keywords:["read","query","query reference"]},c=void 0,d={unversionedId:"api-reference/hooks/use-preloaded-query",id:"version-v12.0.0/api-reference/hooks/use-preloaded-query",title:"usePreloadedQuery",description:"API reference for usePreloadedQuery, a React hook used to read query data from the Relay store using a query reference",source:"@site/versioned_docs/version-v12.0.0/api-reference/hooks/use-preloaded-query.md",sourceDirName:"api-reference/hooks",slug:"/api-reference/use-preloaded-query/",permalink:"/docs/v12.0.0/api-reference/use-preloaded-query/",draft:!1,editUrl:"https://github.com/facebook/relay/tree/main/website/versioned_docs/version-v12.0.0/api-reference/hooks/use-preloaded-query.md",tags:[],version:"v12.0.0",lastUpdatedBy:"Jan Mazur",lastUpdatedAt:1662410947,formattedLastUpdatedAt:"9/5/2022",frontMatter:{id:"use-preloaded-query",title:"usePreloadedQuery",slug:"/api-reference/use-preloaded-query/",description:"API reference for usePreloadedQuery, a React hook used to read query data from the Relay store using a query reference",keywords:["read","query","query reference"]},sidebar:"version-v12.0.0/docs",previous:{title:"useRelayEnvironment",permalink:"/docs/v12.0.0/api-reference/use-relay-environment/"},next:{title:"useQueryLoader",permalink:"/docs/v12.0.0/api-reference/use-query-loader/"}},s={},p=[{value:"<code>usePreloadedQuery</code>",id:"usepreloadedquery",level:2},{value:"Arguments",id:"arguments",level:3},{value:"Flow Type Parameters",id:"flow-type-parameters",level:3},{value:"Return Value",id:"return-value",level:3}],f={toc:p};function m(e){var n=e.components,t=(0,a.Z)(e,u);return(0,o.mdx)("wrapper",(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,o.mdx)("h2",{id:"usepreloadedquery"},(0,o.mdx)("inlineCode",{parentName:"h2"},"usePreloadedQuery")),(0,o.mdx)("p",null,"Hook used to access data fetched by an earlier call to ",(0,o.mdx)("a",{parentName:"p",href:"../load-query"},(0,o.mdx)("inlineCode",{parentName:"a"},"loadQuery"))," or with the help of ",(0,o.mdx)("a",{parentName:"p",href:"../use-query-loader"},(0,o.mdx)("inlineCode",{parentName:"a"},"useQueryLoader")),'. This implements the "render-as-you-fetch" pattern:'),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"Call the ",(0,o.mdx)("inlineCode",{parentName:"li"},"loadQuery")," callback returned from ",(0,o.mdx)("inlineCode",{parentName:"li"},"useQueryLoader"),". This will store a query reference in React state.",(0,o.mdx)("ul",{parentName:"li"},(0,o.mdx)("li",{parentName:"ul"},"You can also call the imported ",(0,o.mdx)("inlineCode",{parentName:"li"},"loadQuery")," directly, which returns a query reference. In that case, store the item in state or in a React ref, and call ",(0,o.mdx)("inlineCode",{parentName:"li"},"dispose()")," on the value when you are no longer using it."))),(0,o.mdx)("li",{parentName:"ul"},"Then, in your render method, consume the query reference with ",(0,o.mdx)("inlineCode",{parentName:"li"},"usePreloadedQuery()"),". This call will suspend if the query is still pending, throw an error if it failed, and otherwise return the query results."),(0,o.mdx)("li",{parentName:"ul"},"This pattern is encouraged over ",(0,o.mdx)("inlineCode",{parentName:"li"},"useLazyLoadQuery()")," as it can allow fetching data earlier while not blocking rendering.")),(0,o.mdx)("p",null,"For more information, see the ",(0,o.mdx)("a",{parentName:"p",href:"../../guided-tour/rendering/queries"},"Rendering Queries")," guide."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-js"},"import type {AppQuery as AppQueryType} from 'AppQuery.graphql';\n\nconst React = require('React');\n\nconst {graphql, useQueryLoader, usePreloadedQuery} = require('react-relay');\n\nconst AppQuery = graphql`\n  query AppQuery($id: ID!) {\n    user(id: $id) {\n      name\n    }\n  }\n`;\n\ntype Props = {\n  initialQueryRef: PreloadedQuery<AppQueryType>,\n};\n\nfunction NameLoader(props) {\n  const [queryReference, loadQuery] = useQueryLoader(\n    AppQuery,\n    props.initialQueryRef, /* e.g. provided by router */\n  );\n\n  return (<>\n    <Button\n      onClick={() => loadQuery({id: '4'})}\n      disabled={queryReference != null}\n    >\n      Reveal your name!\n    </Button>\n    <Suspense fallback=\"Loading...\">\n      {queryReference != null\n        ? <NameDisplay queryReference={queryReference} />\n        : null\n      }\n    </Suspense>\n  </>);\n}\n\nfunction NameDisplay({ queryReference }) {\n  const data = usePreloadedQuery<AppQueryType>(AppQuery, queryReference);\n\n  return <h1>{data.user?.name}</h1>;\n}\n")),(0,o.mdx)("h3",{id:"arguments"},"Arguments"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"query"),": GraphQL query specified using a ",(0,o.mdx)("inlineCode",{parentName:"li"},"graphql")," template literal."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"preloadedQueryReference"),": A ",(0,o.mdx)("inlineCode",{parentName:"li"},"PreloadedQuery")," query reference, which can be acquired from ",(0,o.mdx)("a",{parentName:"li",href:"../use-query-loader"},(0,o.mdx)("inlineCode",{parentName:"a"},"useQueryLoader"))," or by calling ",(0,o.mdx)("a",{parentName:"li",href:"../load-query"},(0,o.mdx)("inlineCode",{parentName:"a"},"loadQuery()"))," .")),(0,o.mdx)("h3",{id:"flow-type-parameters"},"Flow Type Parameters"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"TQuery"),": Type parameter that should correspond to the Flow type for the specified query. This type is available to import from the the auto-generated file: ",(0,o.mdx)("inlineCode",{parentName:"li"},"<query_name>.graphql.js"),".")),(0,o.mdx)("h3",{id:"return-value"},"Return Value"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"data"),": Object that contains data which has been read out from the Relay store; the object matches the shape of specified query.",(0,o.mdx)("ul",{parentName:"li"},(0,o.mdx)("li",{parentName:"ul"},"The Flow type for data will also match this shape, and contain types derived from the GraphQL Schema. For example, the type of ",(0,o.mdx)("inlineCode",{parentName:"li"},"data")," above is: ",(0,o.mdx)("inlineCode",{parentName:"li"},"{ user: ?{ name: ?string } }"),".")))),(0,o.mdx)(i.Z,{mdxType:"DocsRating"}))}m.isMDXComponent=!0},47596:function(e,n,t){var r=this&&this.__awaiter||function(e,n,t,r){return new(t||(t=Promise))((function(a,o){function i(e){try{l(r.next(e))}catch(n){o(n)}}function u(e){try{l(r.throw(e))}catch(n){o(n)}}function l(e){var n;e.done?a(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(i,u)}l((r=r.apply(e,n||[])).next())}))};Object.defineProperty(n,"__esModule",{value:!0}),n.getSpecInfo=void 0;const a=t(11737);n.getSpecInfo=function(e){return r(this,void 0,void 0,(function*(){return yield a.call({module:"bloks",api:"getSpecInfo",args:{styleId:e}})}))}},11737:function(e,n){var t=this&&this.__awaiter||function(e,n,t,r){return new(t||(t=Promise))((function(a,o){function i(e){try{l(r.next(e))}catch(n){o(n)}}function u(e){try{l(r.throw(e))}catch(n){o(n)}}function l(e){var n;e.done?a(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(i,u)}l((r=r.apply(e,n||[])).next())}))};Object.defineProperty(n,"__esModule",{value:!0}),n.call=void 0;let r=!1,a=0;const o={};n.call=function(e){return t(this,void 0,void 0,(function*(){if("staticdocs.thefacebook.com"!==window.location.hostname&&"localhost"!==window.location.hostname)return Promise.reject(new Error("Not running on static docs"));r||(r=!0,window.addEventListener("message",(e=>{if("static-docs-bridge-response"!==e.data.event)return;const n=e.data.id;n in o||console.error(`Recieved response for id: ${n} with no matching receiver`),"response"in e.data?o[n].resolve(e.data.response):o[n].reject(new Error(e.data.error)),delete o[n]})));const n=a++,t=new Promise(((e,t)=>{o[n]={resolve:e,reject:t}})),i={event:"static-docs-bridge-call",id:n,module:e.module,api:e.api,args:e.args},u="localhost"===window.location.hostname?"*":"https://www.internalfb.com";return window.parent.postMessage(i,u),t}))}},24855:function(e,n,t){var r=this&&this.__awaiter||function(e,n,t,r){return new(t||(t=Promise))((function(a,o){function i(e){try{l(r.next(e))}catch(n){o(n)}}function u(e){try{l(r.throw(e))}catch(n){o(n)}}function l(e){var n;e.done?a(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(i,u)}l((r=r.apply(e,n||[])).next())}))};Object.defineProperty(n,"__esModule",{value:!0}),n.reportFeatureUsage=n.reportContentCopied=void 0;const a=t(11737);n.reportContentCopied=function(e){return r(this,void 0,void 0,(function*(){const{textContent:n}=e;try{yield a.call({module:"feedback",api:"reportContentCopied",args:{textContent:n}})}catch(t){}}))},n.reportFeatureUsage=function(e){return r(this,void 0,void 0,(function*(){const{featureName:n,id:t}=e;console.log("used feature");try{yield a.call({module:"feedback",api:"reportFeatureUsage",args:{featureName:n,id:t}})}catch(r){}}))}},44256:function(e,n,t){var r=this&&this.__createBinding||(Object.create?function(e,n,t,r){void 0===r&&(r=t),Object.defineProperty(e,r,{enumerable:!0,get:function(){return n[t]}})}:function(e,n,t,r){void 0===r&&(r=t),e[r]=n[t]}),a=this&&this.__setModuleDefault||(Object.create?function(e,n){Object.defineProperty(e,"default",{enumerable:!0,value:n})}:function(e,n){e.default=n}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var n={};if(null!=e)for(var t in e)"default"!==t&&Object.prototype.hasOwnProperty.call(e,t)&&r(n,e,t);return a(n,e),n};Object.defineProperty(n,"__esModule",{value:!0}),n.OssOnly=n.FbInternalOnly=n.getEphemeralDiffNumber=n.hasEphemeralDiffNumber=n.isInternal=n.validateFbContentArgs=n.fbInternalOnly=n.fbContent=n.inpageeditor=n.feedback=n.uidocs=n.bloks=void 0,n.bloks=o(t(47596)),n.uidocs=o(t(17483)),n.feedback=o(t(24855)),n.inpageeditor=o(t(27312));const i=["internal","external"];function u(e){return c(e),d()?"internal"in e?l(e.internal):[]:"external"in e?l(e.external):[]}function l(e){return"function"==typeof e?e():e}function c(e){if("object"!=typeof e)throw new Error(`fbContent() args must be an object containing keys: ${i}. Instead got ${e}`);if(!Object.keys(e).find((e=>i.find((n=>n===e)))))throw new Error(`No valid args found in ${JSON.stringify(e)}. Accepted keys: ${i}`);const n=Object.keys(e).filter((e=>!i.find((n=>n===e))));if(n.length>0)throw new Error(`Unexpected keys ${n} found in fbContent() args. Accepted keys: ${i}`)}function d(){try{return Boolean(!1)}catch(e){return console.log("process.env.FB_INTERNAL couldn't be read, maybe you forgot to add the required webpack EnvironmentPlugin config?",e),!1}}function s(){try{return null}catch(e){return console.log("process.env.PHABRICATOR_DIFF_NUMBER couldn't be read, maybe you forgot to add the required webpack EnvironmentPlugin config?",e),null}}n.fbContent=u,n.fbInternalOnly=function(e){return u({internal:e})},n.validateFbContentArgs=c,n.isInternal=d,n.hasEphemeralDiffNumber=function(){return Boolean(s())},n.getEphemeralDiffNumber=s,n.FbInternalOnly=function(e){return d()?e.children:null},n.OssOnly=function(e){return d()?null:e.children}},27312:function(e,n,t){var r=this&&this.__awaiter||function(e,n,t,r){return new(t||(t=Promise))((function(a,o){function i(e){try{l(r.next(e))}catch(n){o(n)}}function u(e){try{l(r.throw(e))}catch(n){o(n)}}function l(e){var n;e.done?a(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(i,u)}l((r=r.apply(e,n||[])).next())}))};Object.defineProperty(n,"__esModule",{value:!0}),n.submitDiff=void 0;const a=t(11737);n.submitDiff=function(e){return r(this,void 0,void 0,(function*(){const{file_path:n,new_content:t,project_name:r,diff_number:o}=e;try{return yield a.call({module:"inpageeditor",api:"createPhabricatorDiffApi",args:{file_path:n,new_content:t,project_name:r,diff_number:o}})}catch(i){throw new Error(`Error occurred while trying to submit diff. Stack trace: ${i}`)}}))}},17483:function(e,n,t){var r=this&&this.__awaiter||function(e,n,t,r){return new(t||(t=Promise))((function(a,o){function i(e){try{l(r.next(e))}catch(n){o(n)}}function u(e){try{l(r.throw(e))}catch(n){o(n)}}function l(e){var n;e.done?a(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(i,u)}l((r=r.apply(e,n||[])).next())}))};Object.defineProperty(n,"__esModule",{value:!0}),n.getApi=n.docsets=void 0;const a=t(11737);n.docsets={BLOKS_CORE:"887372105406659"},n.getApi=function(e){return r(this,void 0,void 0,(function*(){const{name:n,framework:t,docset:r}=e;return yield a.call({module:"uidocs",api:"getApi",args:{name:n,framework:t,docset:r}})}))}}}]);