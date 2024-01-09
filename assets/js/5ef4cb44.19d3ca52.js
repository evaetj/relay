"use strict";(self.webpackChunkrelay_website=self.webpackChunkrelay_website||[]).push([[79435],{3905:(e,n,r)=>{r.r(n),r.d(n,{MDXContext:()=>d,MDXProvider:()=>c,mdx:()=>h,useMDXComponents:()=>u,withMDXComponents:()=>m});var t=r(67294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function l(){return l=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e},l.apply(this,arguments)}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function o(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function s(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},l=Object.keys(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var d=t.createContext({}),m=function(e){return function(n){var r=u(n.components);return t.createElement(e,l({},n,{components:r}))}},u=function(e){var n=t.useContext(d),r=n;return e&&(r="function"==typeof e?e(n):o(o({},n),e)),r},c=function(e){var n=u(e.components);return t.createElement(d.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},g=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=u(r),c=a,g=m["".concat(i,".").concat(c)]||m[c]||p[c]||l;return r?t.createElement(g,o(o({ref:n},d),{},{components:r})):t.createElement(g,o({ref:n},d))}));function h(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=g;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var d=2;d<l;d++)i[d]=r[d];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}g.displayName="MDXCreateElement"},68629:(e,n,r)=>{r.d(n,{Z:()=>p});var t=r(39960),a=r(86341),l=r(67294);function i(){var e=window.encodeURI(JSON.stringify({title:"Feedback about "+window.location.pathname,description:"**!!! Required !!!**\n\nPlease modify the task description to let us know how the docs can be improved.\n\n**Please do not ask support questions via this form! Instead, ask in fburl.com/relay_support**",tag_ids:{add:[0xac96423e5b680,0x64079768ac750]}}));window.open("https://www.internalfb.com/tasks/?n="+e)}function o(e){var n=e.children;return l.createElement("div",{className:"docsRating",id:"docsRating"},l.createElement("hr",null),n)}var s=function(){var e=l.useState(!1),n=e[0],r=e[1],t=function(e){r(!0),function(e){window.ga&&window.ga("send",{hitType:"event",eventCategory:"button",eventAction:"feedback",eventValue:e})}(e)};return n?"Thank you for letting us know!":l.createElement(l.Fragment,null,"Is this page useful?",l.createElement("svg",{className:"i_thumbsup",alt:"Like",id:"docsRating-like",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return t(1)}},l.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})),l.createElement("svg",{className:"i_thumbsdown",alt:"Dislike",id:"docsRating-dislike",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return t(0)}},l.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})))},d=function(){return l.createElement("p",null,"Let us know how these docs can be improved by",l.createElement("a",{className:"button",role:"button",tabIndex:0,onClick:i},"Filing a task"))},m=function(){return l.createElement("p",null,"Help us make the site even better by"," ",l.createElement(t.default,{to:"https://www.surveymonkey.com/r/FYC9TCJ"},"answering a few quick questions"),".")},u=function(){return l.createElement(o,null,l.createElement(d,null),l.createElement(s,null),l.createElement(m,null))},c=function(){return l.createElement(o,null,l.createElement(s,null),l.createElement(m,null))};const p=function(){return(0,a.fbContent)({internal:l.createElement(u,null),external:l.createElement(c,null)})}},1358:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>u,contentTitle:()=>d,default:()=>g,frontMatter:()=>s,metadata:()=>m,toc:()=>c});var t=r(83117),a=r(80102),l=(r(67294),r(3905)),i=(r(68629),r(86341)),o=["components"],s={id:"relay-resolvers",title:"Relay Resolvers",slug:"/guides/relay-resolvers/",description:"Relay guide to Relay Resolvers",keywords:["resolvers","derived","selectors","reactive"]},d=void 0,m={unversionedId:"guides/relay-resolvers",id:"version-v14.0.0/guides/relay-resolvers",title:"Relay Resolvers",description:"Relay guide to Relay Resolvers",source:"@site/versioned_docs/version-v14.0.0/guides/relay-resolvers.md",sourceDirName:"guides",slug:"/guides/relay-resolvers/",permalink:"/docs/v14.0.0/guides/relay-resolvers/",draft:!1,editUrl:"https://github.com/facebook/relay/tree/main/website/versioned_docs/version-v14.0.0/guides/relay-resolvers.md",tags:[],version:"v14.0.0",lastUpdatedBy:"Monica Tang",lastUpdatedAt:1704822295,formattedLastUpdatedAt:"Jan 9, 2024",frontMatter:{id:"relay-resolvers",title:"Relay Resolvers",slug:"/guides/relay-resolvers/",description:"Relay guide to Relay Resolvers",keywords:["resolvers","derived","selectors","reactive"]},sidebar:"docs",previous:{title:"@required Directive",permalink:"/docs/v14.0.0/guides/required-directive/"},next:{title:"Error States with ErrorBoundaries",permalink:"/docs/v14.0.0/guided-tour/rendering/error-states/"}},u={},c=[{value:"Docblock Fields",id:"docblock-fields",level:2},{value:"Relay Resolver Signature",id:"relay-resolver-signature",level:2},{value:"How They Work",id:"how-they-work",level:2},{value:"Error Handling",id:"error-handling",level:2},{value:"Passing arguments to resolver fields",id:"passing-arguments-to-resolver-fields",level:2},{value:"Defining Resolver field with Fragment Arguments",id:"defining-resolver-field-with-fragment-arguments",level:2},{value:"Using Resolver field with arguments for Fragment",id:"using-resolver-field-with-arguments-for-fragment",level:3},{value:"Defining Resolver field with Runtime (JS) Arguments",id:"defining-resolver-field-with-runtime-js-arguments",level:3},{value:"Using Resolver field with runtime arguments",id:"using-resolver-field-with-runtime-arguments",level:3},{value:"Defining Resolver field with Combined Arguments",id:"defining-resolver-field-with-combined-arguments",level:3},{value:"Using Resolver field with combined arguments",id:"using-resolver-field-with-combined-arguments",level:3},{value:"Current Limitations",id:"current-limitations",level:2}],p={toc:c};function g(e){var n=e.components,r=(0,a.Z)(e,o);return(0,l.mdx)("wrapper",(0,t.Z)({},p,r,{components:n,mdxType:"MDXLayout"}),(0,l.mdx)("p",null,"Relay Resolvers is an experimental Relay feature which enables modeling derived state as client-only fields in Relay\u2019s GraphQL graph. Similar to server ",(0,l.mdx)("a",{parentName:"p",href:"https://graphql.org/learn/execution/"},"resolvers"),", a Relay Resolver is a function which defines how to compute the value of a GraphQL field. However, unlike server resolvers, Relay Resolvers are evaluated reactively on the client. A Relay Resolver reads fields off of its parent object and returns a derived result. If any of those fields change, Relay will automatically reevaluate the resolver."),(0,l.mdx)("p",null,"Relay Resolvers are particularly valuable in apps which store client state in Relay via ",(0,l.mdx)("a",{parentName:"p",href:"https://relay.dev/docs/guides/client-schema-extensions/"},"client schema extensions"),", since they allow you to compose together client data, server data \u2014 and even other Relay Resolver fields \u2014 into fields which update reactively as the underlying data changes."),(0,l.mdx)("p",null,"Relay Resolvers were originally conceived of as an alternative to Flux-style ",(0,l.mdx)("a",{parentName:"p",href:"https://redux.js.org/usage/deriving-data-selectors"},"selectors")," and can be thought of as providing similar capabilities."),(0,l.mdx)("p",null,"Concretely, Relay Resolvers are defined as functions annotated with a special docblock syntax. The Relay compiler will automatically recognize these docblocks in any JavaScript file and use them to extend the schema that is available within your project."),(0,l.mdx)("p",null,"Let\u2019s look at an example Relay Resolver:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-jsx"},"import type {UserGreetingResolver$key} from 'UserGreetingResolver.graphql';\nimport {graphql} from 'relay-runtime';\nimport {readFragment} from 'relay-runtime/store/ResolverFragments';\n\n/**\n * @RelayResolver\n *\n * @onType User\n * @fieldName greeting\n * @rootFragment UserGreetingResolver\n *\n * A greeting for the user which includes their name and title.\n */\nexport default function userGreetingResolver(userKey: UserGreetingResolver$key): string {\n  const user = readFragment(graphql`\n    fragment UserGreetingResolver on User {\n      honorific\n      last_name\n    }`, userKey);\n\n  return `Hello ${user.honorific} ${user.last_name}!`;\n}\n")),(0,l.mdx)("p",null,"This resolver adds a new field ",(0,l.mdx)("inlineCode",{parentName:"p"},"greeting")," to the ",(0,l.mdx)("inlineCode",{parentName:"p"},"User")," object type. It reads the ",(0,l.mdx)("inlineCode",{parentName:"p"},"honorific")," and ",(0,l.mdx)("inlineCode",{parentName:"p"},"last_name")," fields off of the parent ",(0,l.mdx)("inlineCode",{parentName:"p"},"User")," and derives a greeting string. The new ",(0,l.mdx)("inlineCode",{parentName:"p"},"greeting")," field may now be used by any Relay component throughout your project which has access to a ",(0,l.mdx)("inlineCode",{parentName:"p"},"User"),"."),(0,l.mdx)("p",null,"Consuming this new field looks identical to consuming a field defined in the server schema:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-jsx"},"function MyGreeting({userKey}) {\n  const user = useFragment(`\n    fragment MyGreeting on User {\n      greeting\n    }`, userKey);\n  return<h1>{user.greeting}<h1>;\n}\n")),(0,l.mdx)("h2",{id:"docblock-fields"},"Docblock Fields"),(0,l.mdx)("p",null,"The Relay compiler looks for the following fields in any docblocks that includes ",(0,l.mdx)("inlineCode",{parentName:"p"},"@RelayResolver"),":"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"@RelayResolver")," (required)"),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"@onType")," or ",(0,l.mdx)("inlineCode",{parentName:"li"},"@onInterface")," (required) The GraphQL type/interface on which the new field should be exposed"),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"@fieldName")," (required) The name of the new field"),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"@rootFragment")," (required) The name of the fragment read by ",(0,l.mdx)("inlineCode",{parentName:"li"},"readFragment")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"@deprecated")," (optional) Indicates that the field is ",(0,l.mdx)("a",{parentName:"li",href:"https://spec.graphql.org/June2018/#sec--deprecated"},"deprecated"),". May be optionally followed text giving the reason that the field is deprecated.")),(0,l.mdx)("p",null,"The docblock may also contain free text. This free text will be used as the field\u2019s human-readable description, which will be surfaced in Relay\u2019s editor support on hover and in autocomplete results."),(0,l.mdx)("h2",{id:"relay-resolver-signature"},"Relay Resolver Signature"),(0,l.mdx)("p",null,"In order for Relay to be able to call a Relay Resolver, it must conform to a set of conventions:"),(0,l.mdx)("ol",null,(0,l.mdx)("li",{parentName:"ol"},"The resolver function must accept a single argument, which is the key for its root fragment."),(0,l.mdx)("li",{parentName:"ol"},"The resolver function must be the default export of its module (only one resolver per module)"),(0,l.mdx)("li",{parentName:"ol"},"The resolver must read its fragment using the special ",(0,l.mdx)("inlineCode",{parentName:"li"},"readFragment")," function."),(0,l.mdx)("li",{parentName:"ol"},"The resolver function must be pure"),(0,l.mdx)("li",{parentName:"ol"},"The resolver\u2019s return value must be immutable")),(0,l.mdx)("p",null,"Unlike server resolvers, Relay Resolvers may return any JavaScript value. This includes classes, functions and arrays. However, we generally encourage having Relay Resolvers return scalar values and only returning more complex JavaScript values (like functions) as an escape hatch."),(0,l.mdx)(i.FbInternalOnly,{mdxType:"FbInternalOnly"},"## Lint Rule",(0,l.mdx)("p",null,"In many cases, the contents of the docblock can be derived from the javascript implementation. In those cases, the ",(0,l.mdx)("a",{parentName:"p",href:"https://www.internalfb.com/eslint/relay-resolvers"},(0,l.mdx)("inlineCode",{parentName:"a"},"relay-resolvers"))," ESLint rule rule will offer auto-fixes to derive the docblock from the implementation and ensure that the two remain in sync. The lint rule also enforces a naming convention for resolver function and modules names.")),(0,l.mdx)("h2",{id:"how-they-work"},"How They Work"),(0,l.mdx)("p",null,"When parsing your project, the Relay compiler looks for ",(0,l.mdx)("inlineCode",{parentName:"p"},"@RelayResolver")," docblocks and uses them to add special fields to the GraphQL schema. If a query or fragment references one of these fields, Relay\u2019s generated artifact for that query or fragment will automatically include an ",(0,l.mdx)("inlineCode",{parentName:"p"},"import")," of the resolver function. ",(0,l.mdx)("em",{parentName:"p"},"Note that this can happen recursively if the Relay Resolver field you are reading itself reads one or more Relay Resolver fields.")),(0,l.mdx)("p",null,"When the field is first read by a component, Relay will evaluate the Relay Resolver function and cache the result. Other components that read the same field will read the same cached value. If at any point any of the fields that the resolver reads (via its root fragment) change, Relay will reevaluate the resolver. If the return value changes (determined by ",(0,l.mdx)("inlineCode",{parentName:"p"},"===")," equality) Relay will propagate that change to all components (and other Relay Resolvers) that are currently reading the field."),(0,l.mdx)("h2",{id:"error-handling"},"Error Handling"),(0,l.mdx)("p",null,"In order to make product code as robust as possible, Relay Resolvers follow the GraphQL spec\u2019s documented ",(0,l.mdx)("a",{parentName:"p",href:"https://graphql.org/learn/best-practices/#nullability"},"best practice")," of returning null when a field resolver errors. Instead of throwing, errors thrown by Relay Resolvers will be logged to your environment's configured ",(0,l.mdx)("inlineCode",{parentName:"p"},"requiredFieldLogger")," with an event of kind ",(0,l.mdx)("inlineCode",{parentName:"p"},'"relay_resolver.error"'),". If you make use of Relay Resolves you should be sure to configure your environment with a ",(0,l.mdx)("inlineCode",{parentName:"p"},"requiredFieldLogger")," which reports those events to whatever system you use for tracking runtime errors."),(0,l.mdx)("p",null,"If your component requires a non-null value in order to render, and can\u2019t provide a reasonable fallback experience, you can annotate the field access with ",(0,l.mdx)("inlineCode",{parentName:"p"},"@required"),"."),(0,l.mdx)("h2",{id:"passing-arguments-to-resolver-fields"},"Passing arguments to resolver fields"),(0,l.mdx)("p",null,"For resolvers (and live resolvers) we support two ways of defining field arguments:"),(0,l.mdx)("ol",null,(0,l.mdx)("li",{parentName:"ol"},"GraphQL: Arguments that are defined via @argumentDefinitions on the resolver's fragment."),(0,l.mdx)("li",{parentName:"ol"},"JS Runtime: Arguments that can be passed directly to the resolver function."),(0,l.mdx)("li",{parentName:"ol"},"You can also combine these, and define arguments on the fragment and on the resolver's field itself, Relay will validate the naming (these arguments have to have different names), and pass GraphQL arguments to fragment, and JS arguments to the resolver's function.")),(0,l.mdx)("p",null,"Let\u2019s look at the example 1:"),(0,l.mdx)("h2",{id:"defining-resolver-field-with-fragment-arguments"},"Defining Resolver field with Fragment Arguments"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-js"},'/**\n* @RelayResolver\n* @fieldName **my_resolver_field**\n* @onType **MyType**\n* @rootFragment myResolverFragment\n*/\nfunction myResolver(key) {\n   const data = readFragment(graphql`\n       fragment myResolverFragment on MyType\n            @argumentDefinitions(**my_arg**: {type: "Float!"}) {\n            field_with_arg(arg: $my_arg) {\n               __typename\n            }\n       }\n   `, key);\n\n   return data.field_with_arg.__typename;\n}\n')),(0,l.mdx)("h3",{id:"using-resolver-field-with-arguments-for-fragment"},"Using Resolver field with arguments for Fragment"),(0,l.mdx)("p",null,"This resolver will extend the ",(0,l.mdx)("strong",{parentName:"p"},"MyType")," with the new field ",(0,l.mdx)("strong",{parentName:"p"},"my_resolver_field(my_arg: Float!)")," and the fragment arguments for ",(0,l.mdx)("strong",{parentName:"p"},"myResolverFragment")," can be passed directly to this field."),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-js"},'const data = useLazyLoadQuery(graphql`\n    query myQuery($id: ID, $my_arg: Float!) {\n        node(id: $id) {\n           ... on MyType {\n                my_resolver_field(my_arg: $my_arg)\n           }\n        }\n   }\n`, { id: "some id", my_arg: 2.5 });\n')),(0,l.mdx)("p",null,"For these fragment arguments relay will pass then all queries/fragments where the resolver field is used to the resolver\u2019s fragment."),(0,l.mdx)("h3",{id:"defining-resolver-field-with-runtime-js-arguments"},"Defining Resolver field with Runtime (JS) Arguments"),(0,l.mdx)("p",null,"Relay resolvers also support runtime arguments that are not visible/passed to fragments, but are passed to the resolver function itself."),(0,l.mdx)("p",null,"You can define these fragments using GraphQL\u2019s ",(0,l.mdx)("a",{parentName:"p",href:"https://graphql.org/learn/schema/"},"Schema Definition Language")," in the ",(0,l.mdx)("strong",{parentName:"p"},"@fieldName")),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-js"},'/**\n* @RelayResolver\n* @fieldName **my_resolver_field(my_arg: String, my_other_arg: Int)**\n* @onType **MyType**\n* @rootFragment myResolverFragment\n*/\nfunction myResolver(key, args) {\n   if (args.my_other_arg === 0) {\n       return "The other arg is 0";\n   }\n\n   const data = readFragment(graphql`\n       fragment myResolverFragment on MyType\n           some_field\n       }\n   `, key);\n   return data.some_field.concat(args.my_arg);\n}\n')),(0,l.mdx)("h3",{id:"using-resolver-field-with-runtime-arguments"},"Using Resolver field with runtime arguments"),(0,l.mdx)("p",null,"This resolver will extend ",(0,l.mdx)("strong",{parentName:"p"},"MyType")," with the new field ",(0,l.mdx)("strong",{parentName:"p"},"my_resolver_field(my_arg: String, my_other_arg: Int).")),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-js"},'const data = useLazyLoadQuery(graphql`\n    query myQuery($id: ID, $my_arg: String!) {\n        node(id: $id) {\n           ... on MyType {\n                my_resolver_field(my_arg: $my_arg, my_other_arg: 1)\n           }\n        }\n   }\n`, { id: "some id", my_arg: "hello world!"});\n')),(0,l.mdx)("h3",{id:"defining-resolver-field-with-combined-arguments"},"Defining Resolver field with Combined Arguments"),(0,l.mdx)("p",null,"We can also combine both of these approaches and define field arguments both on the resolver\u2019s fragment and on the field itself:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-js"},'/**\n* @RelayResolver\n* @fieldName **my_resolver_field(my_js_arg: String)**\n* @onType **MyType**\n* @rootFragment myResolverFragment\n*/\nfunction myResolver(key, args) {\n   const data = readFragment(graphql`\n       fragment myResolverFragment on MyType\n            @argumentDefinitions(**my_gql_arg**: {type: "Float!"}) {\n            field_with_arg(arg: $my_arg) {\n               __typename\n            }\n       }\n   `, key);\n\n   return `Hello ${args.my_js_arg}, ${data.field_with_arg.__typename}`;\n}\n')),(0,l.mdx)("h3",{id:"using-resolver-field-with-combined-arguments"},"Using Resolver field with combined arguments"),(0,l.mdx)("p",null,"Relay will extend the ",(0,l.mdx)("strong",{parentName:"p"},"MyType")," with the new resolver field that has two arguments: **my_resolver_field(my_js_arg: String, my_gql_arg: Float!)"),(0,l.mdx)("p",null,"**\nExample query:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-js"},'const data = useLazyLoadQuery(graphql`\n    query myQuery($id: ID, $my_arg: String!) {\n        node(id: $id) {\n           ... on MyType {\n                my_resolver_field(my_js_arg: "World", my_qql_arg: 2.5)\n           }\n        }\n   }\n`, { id: "some id" });\n')),(0,l.mdx)("h2",{id:"current-limitations"},"Current Limitations"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"Relay Resolvers are still considered experimental. To use them you must ensure that the ",(0,l.mdx)("inlineCode",{parentName:"li"},"ENABLE_RELAY_RESOLVERS")," runtime feature flag is enabled, and that the ",(0,l.mdx)("inlineCode",{parentName:"li"},"enable_relay_resolver_transform")," feature flag is enabled in your project\u2019s Relay config file.")))}g.isMDXComponent=!0}}]);