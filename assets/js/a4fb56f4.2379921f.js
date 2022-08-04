"use strict";(self.webpackChunkrelay_website=self.webpackChunkrelay_website||[]).push([[28456],{3905:(e,n,t)=>{t.r(n),t.d(n,{MDXContext:()=>l,MDXProvider:()=>u,mdx:()=>h,useMDXComponents:()=>c,withMDXComponents:()=>m});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(){return r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},r.apply(this,arguments)}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=a.createContext({}),m=function(e){return function(n){var t=c(n.components);return a.createElement(e,r({},n,{components:t}))}},c=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=c(e.components);return a.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},f=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,l=d(e,["components","mdxType","originalType","parentName"]),m=c(t),u=i,f=m["".concat(s,".").concat(u)]||m[u]||p[u]||r;return t?a.createElement(f,o(o({ref:n},l),{},{components:t})):a.createElement(f,o({ref:n},l))}));function h(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,s=new Array(r);s[0]=f;var o={};for(var d in n)hasOwnProperty.call(n,d)&&(o[d]=n[d]);o.originalType=e,o.mdxType="string"==typeof e?e:i,s[1]=o;for(var l=2;l<r;l++)s[l]=t[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},68629:(e,n,t)=>{t.d(n,{Z:()=>p});var a=t(39960),i=t(44256),r=t(67294);function s(){var e=window.encodeURI(JSON.stringify({title:"Feedback about "+window.location.pathname,description:"**!!! Required !!!**\n\nPlease modify the task description to let us know how the docs can be improved.\n\n**Please do not ask support questions via this form! Instead, ask in fburl.com/relay_support**",tag_ids:{add:[0xac96423e5b680,0x64079768ac750]}}));window.open("https://www.internalfb.com/tasks/?n="+e)}function o(e){var n=e.children;return r.createElement("div",{className:"docsRating",id:"docsRating"},r.createElement("hr",null),n)}var d=function(){var e=r.useState(!1),n=e[0],t=e[1],a=function(e){t(!0),function(e){window.ga&&window.ga("send",{hitType:"event",eventCategory:"button",eventAction:"feedback",eventValue:e})}(e)};return n?"Thank you for letting us know!":r.createElement(r.Fragment,null,"Is this page useful?",r.createElement("svg",{className:"i_thumbsup",alt:"Like",id:"docsRating-like",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return a(1)}},r.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})),r.createElement("svg",{className:"i_thumbsdown",alt:"Dislike",id:"docsRating-dislike",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return a(0)}},r.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})))},l=function(){return r.createElement("p",null,"Let us know how these docs can be improved by",r.createElement("a",{className:"button",role:"button",tabIndex:0,onClick:s},"Filing a task"))},m=function(){return r.createElement("p",null,"Help us make the site even better by"," ",r.createElement(a.default,{to:"https://www.surveymonkey.com/r/FYC9TCJ"},"answering a few quick questions"),".")},c=function(){return r.createElement(o,null,r.createElement(l,null),r.createElement(d,null),r.createElement(m,null))},u=function(){return r.createElement(o,null,r.createElement(d,null),r.createElement(m,null))};const p=function(){return(0,i.fbContent)({internal:r.createElement(c,null),external:r.createElement(u,null)})}},87093:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>m,default:()=>h,frontMatter:()=>l,metadata:()=>c,toc:()=>p});var a=t(83117),i=t(80102),r=(t(67294),t(3905)),s=t(68629),o=t(44256),d=["components"],l={id:"imperatively-modifying-linked-fields",title:"Imperatively modifying linked fields",slug:"/guided-tour/updating-data/imperatively-modifying-linked-fields/",description:"Using readUpdatableQuery_EXPERIMENTAL to update linked fields in the store",keywords:["record source","store","updater","typesafe updaters","readUpdatableQuery","readUpdatableFragment","updatable","assignable"]},m=void 0,c={unversionedId:"guided-tour/updating-data/imperatively-modifying-linked-fields",id:"version-v14.0.0/guided-tour/updating-data/imperatively-modifying-linked-fields",title:"Imperatively modifying linked fields",description:"Using readUpdatableQuery_EXPERIMENTAL to update linked fields in the store",source:"@site/versioned_docs/version-v14.0.0/guided-tour/updating-data/imperatively-modifying-linked-fields.md",sourceDirName:"guided-tour/updating-data",slug:"/guided-tour/updating-data/imperatively-modifying-linked-fields/",permalink:"/docs/guided-tour/updating-data/imperatively-modifying-linked-fields/",draft:!1,editUrl:"https://github.com/facebook/relay/tree/main/website/versioned_docs/version-v14.0.0/guided-tour/updating-data/imperatively-modifying-linked-fields.md",tags:[],version:"v14.0.0",lastUpdatedBy:"Marshall Roch",lastUpdatedAt:1659586067,formattedLastUpdatedAt:"8/4/2022",frontMatter:{id:"imperatively-modifying-linked-fields",title:"Imperatively modifying linked fields",slug:"/guided-tour/updating-data/imperatively-modifying-linked-fields/",description:"Using readUpdatableQuery_EXPERIMENTAL to update linked fields in the store",keywords:["record source","store","updater","typesafe updaters","readUpdatableQuery","readUpdatableFragment","updatable","assignable"]}},u={},p=[{value:"Example: setting the viewer&#39;s best friend",id:"example-setting-the-viewers-best-friend",level:2},{value:"Putting it all together",id:"putting-it-all-together",level:3},{value:"Pitfalls",id:"pitfalls",level:2},{value:"Example: Assigning to a list",id:"example-assigning-to-a-list",level:2},{value:"Validation and type refinement",id:"validation-and-type-refinement",level:2},{value:"Validation when the destination field is an interface",id:"validation-when-the-destination-field-is-an-interface",level:2}],f={toc:p};function h(e){var n=e.components,t=(0,i.Z)(e,d);return(0,r.mdx)("wrapper",(0,a.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,r.mdx)(o.OssOnly,{mdxType:"OssOnly"},(0,r.mdx)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.mdx)("div",{parentName:"div",className:"admonition-heading"},(0,r.mdx)("h5",{parentName:"div"},(0,r.mdx)("span",{parentName:"h5",className:"admonition-icon"},(0,r.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,r.mdx)("div",{parentName:"div",className:"admonition-content"},(0,r.mdx)("p",{parentName:"div"},"Because in TypeScript, ",(0,r.mdx)("a",{parentName:"p",href:"https://github.com/microsoft/TypeScript/issues/43662"},"getters and setters cannot have different types"),", and the generated types of getters and setters is not the same, ",(0,r.mdx)("inlineCode",{parentName:"p"},"readUpdatableQuery_EXPERIMENTAL")," is currently unusable with TypeScript. ",(0,r.mdx)("inlineCode",{parentName:"p"},"readUpdatableFragment_EXPERIMENTAL")," is usable, as long as the updatable fragment contains only scalar fields.")))),(0,r.mdx)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.mdx)("div",{parentName:"div",className:"admonition-heading"},(0,r.mdx)("h5",{parentName:"div"},(0,r.mdx)("span",{parentName:"h5",className:"admonition-icon"},(0,r.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.mdx)("div",{parentName:"div",className:"admonition-content"},(0,r.mdx)("p",{parentName:"div"},"See also ",(0,r.mdx)("a",{parentName:"p",href:"../imperatively-modifying-store-data"},"using readUpdatableQuery_EXPERIMENTAL to update scalar fields in the store"),"."))),(0,r.mdx)("p",null,"The examples in the ",(0,r.mdx)("a",{parentName:"p",href:"../imperatively-modifying-store-data/"},"previous section")," showed how to use the ",(0,r.mdx)("inlineCode",{parentName:"p"},"readUpdatableQuery_EXPERIMENTAL")," API to update scalar fields like ",(0,r.mdx)("inlineCode",{parentName:"p"},"is_new_comment")," and ",(0,r.mdx)("inlineCode",{parentName:"p"},"is_selected"),"."),(0,r.mdx)("p",null,"The examples did ",(0,r.mdx)("strong",{parentName:"p"},"not")," cover how to assign to linked fields. Let's start with an example of a component which allows the user of the application to update the Viewer's ",(0,r.mdx)("inlineCode",{parentName:"p"},"best_friend")," field."),(0,r.mdx)("h2",{id:"example-setting-the-viewers-best-friend"},"Example: setting the viewer's best friend"),(0,r.mdx)("p",null,"The first thing we do is to define a client schema extension adding the field to the Viewer type."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-graphql"},"extend type Viewer {\n  best_friend: User,\n}\n")),(0,r.mdx)("p",null,"Next, let's define a fragment and give it the ",(0,r.mdx)("inlineCode",{parentName:"p"},"@assignable")," directive, making it an ",(0,r.mdx)("strong",{parentName:"p"},"assignable fragment"),". Assignable fragments can only contain a single field, ",(0,r.mdx)("inlineCode",{parentName:"p"},"__typename"),". This fragment will be on the ",(0,r.mdx)("inlineCode",{parentName:"p"},"User")," type."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-js"},"// AssignBestFriendButton.react.js\ngraphql`\n  fragment AssignBestFriendButton_assignable_user on User @assignable {\n    __typename\n  }\n`;\n")),(0,r.mdx)("p",null,"The file that the Relay compiler generates for assignable fragments will contain a single named JavaScript export, a ",(0,r.mdx)("inlineCode",{parentName:"p"},"validate")," function, in addition to exports of types. This function performs a runtime check to determine whether a particular item is valid for assignment. If the item is invalid, the validator will return ",(0,r.mdx)("inlineCode",{parentName:"p"},"false"),"."),(0,r.mdx)("p",null,"In this case, because we are assigning a User, this ",(0,r.mdx)("strong",{parentName:"p"},"validator")," will check whether the item's ",(0,r.mdx)("inlineCode",{parentName:"p"},"__typename")," field is equal to the literal string ",(0,r.mdx)("inlineCode",{parentName:"p"},'"User"'),"."),(0,r.mdx)("p",null,"Lets import the generated validate function."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-js"},"// AssignBestFriendButton.react.js\nimport {validate as ValidateUser} from 'AssignableBestFriendButton_assignable_user.graphql';\n")),(0,r.mdx)("p",null,"Next, lets define a component that accepts a User fragment reference. In the fragment, we will spread ",(0,r.mdx)("inlineCode",{parentName:"p"},"AssignableBestFriendButton_assignable_user"),"."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-js"},"// AssignBestFriendButton.react.js\nimport type {AssignBestFriendButton_user$key} from 'AssignBestFriendButton_user.graphql';\n\nconst {useFragment} = require('react-relay');\n\nexport default function AssignBestFriendButton({\n  someTypeRef: AssignBestFriendButton_user$key,\n}) {\n  const data = useFragment(graphql`\n    fragment AssignBestFriendButton_someType on SomeType {\n      user {\n        name\n        ...AssignableBestFriendButton_assignable_user\n      }\n    }\n  `, someTypeRef);\n\n  // We will replace this stub with the real thing below.\n  const onClick = () => {};\n\n  return (<button onClick={onClick}>\n    Declare {data.user?.name ?? 'someone with no name'} your new best friend!\n  </button>);\n}\n")),(0,r.mdx)("p",null,"That's great! Now, we have a component that renders a button. Let's fill out that button's click handler by using the ",(0,r.mdx)("inlineCode",{parentName:"p"},"commitLocalUpdate")," and ",(0,r.mdx)("inlineCode",{parentName:"p"},"readUpdatableQuery_EXPERIMENTAL")," APIs to assign ",(0,r.mdx)("inlineCode",{parentName:"p"},"viewer.best_friend"),"."),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"In order to make it valid to assign ",(0,r.mdx)("inlineCode",{parentName:"li"},"data.user")," to ",(0,r.mdx)("inlineCode",{parentName:"li"},"best_friend"),", we must ",(0,r.mdx)("strong",{parentName:"li"},"also")," spread ",(0,r.mdx)("inlineCode",{parentName:"li"},"AssignBestFriendButton_assignable_user")," under the ",(0,r.mdx)("inlineCode",{parentName:"li"},"best_friend")," field in the viewer in the updatable query or fragment."),(0,r.mdx)("li",{parentName:"ul"},"In addition, we must pass ",(0,r.mdx)("inlineCode",{parentName:"li"},"user")," through the imported ",(0,r.mdx)("inlineCode",{parentName:"li"},"validateUser")," function.")),(0,r.mdx)(o.FbInternalOnly,{mdxType:"FbInternalOnly"},(0,r.mdx)("div",{className:"admonition admonition-info alert alert--info"},(0,r.mdx)("div",{parentName:"div",className:"admonition-heading"},(0,r.mdx)("h5",{parentName:"div"},(0,r.mdx)("span",{parentName:"h5",className:"admonition-icon"},(0,r.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.mdx)("div",{parentName:"div",className:"admonition-content"},(0,r.mdx)("p",{parentName:"div"},"With further improvements to our type generation, runtime validation will be required in fewer situations."),(0,r.mdx)("p",{parentName:"div"},"In this case, the source for assignment is a User, which we statically know has the concrete type User, meaning that the ",(0,r.mdx)("inlineCode",{parentName:"p"},"__typename")," field will have the value ",(0,r.mdx)("inlineCode",{parentName:"p"},'"User"'),". Unfortunately, the generated type only indicates that the ",(0,r.mdx)("inlineCode",{parentName:"p"},"__typename")," field has type ",(0,r.mdx)("inlineCode",{parentName:"p"},"string"),"."),(0,r.mdx)("p",{parentName:"div"},"If the generated types were updated to reflect this fact, validation would not be necessary in this instance."),(0,r.mdx)("p",{parentName:"div"},"We hope to implement this as part of a broader improvement to our typegen.")))),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-js"},"import type {RecordSourceSelectorProxy} from 'react-relay';\n\nconst {commitLocalUpdate, useRelayEnvironment} = require('react-relay');\n\n// ...\n\nconst environment = useRelayEnvironment();\nconst onClick = () => {\n  const updatableData = commitLocalUpdate(\n    environment,\n    (store: RecordSourceSelectorProxy) => {\n      const {updatableData} = store.readUpdatableQuery_EXPERIMENTAL(\n          graphql`\n            query AssignBestFriendButtonUpdatableQuery\n            @updatable {\n              viewer {\n                best_friend {\n                  ...AssignableBestFriendButton_assignable_user\n                }\n              }\n            }\n          `,\n          {}\n        );\n\n      const user = data.user;\n      if (user != null && updatableData.viewer != null) {\n        const validUser = validateUser(user);\n        if (validUser !== false) {\n          updatableData.viewer.best_friend = validUser;\n        }\n      }\n    }\n  );\n};\n")),(0,r.mdx)("h3",{id:"putting-it-all-together"},"Putting it all together"),(0,r.mdx)("p",null,"The full example is as follows:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-graphql"},"extend type Viewer {\n  best_friend: User,\n}\n")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-js"},"// AssignBestFriendButton.react.js\nimport {validate as ValidateUser} from 'AssignableBestFriendButton_assignable_user.graphql';\nimport type {AssignBestFriendButton_user$key} from 'AssignBestFriendButton_user.graphql';\nimport type {RecordSourceSelectorProxy} from 'react-relay';\n\nconst {commitLocalUpdate, useFragment, useRelayEnvironment} = require('react-relay');\n\ngraphql`\n  fragment AssignBestFriendButton_assignable_user on User @assignable {\n    __typename\n  }\n`;\n\nexport default function AssignBestFriendButton({\n  userFragmentRef: AssignBestFriendButton_someType$key,\n}) {\n  const data = useFragment(graphql`\n    fragment AssignBestFriendButton_someType on SomeType {\n      user {\n        name\n        ...AssignableBestFriendButton_assignable_user\n      }\n    }\n  `, userFragmentRef);\n\n  const environment = useRelayEnvironment();\n  const onClick = () => {\n    const updatableData = commitLocalUpdate(\n      environment,\n      (store: RecordSourceSelectorProxy) => {\n        const {updatableData} = store.readUpdatableQuery_EXPERIMENTAL(\n            graphql`\n              query AssignBestFriendButtonUpdatableQuery\n              @updatable {\n                viewer {\n                  best_friend {\n                    ...AssignableBestFriendButton_assignable_user\n                  }\n                }\n              }\n            `,\n            {}\n          );\n\n        const user = data.user;\n        if (user != null && updatableData.viewer != null) {\n          const validUser = validateUser(user);\n          if (validUser !== false) {\n            updatableData.viewer.best_friend = validUser;\n          }\n        }\n      }\n    );\n  };\n\n  return (<button onClick={onClick}>\n    Declare {user.name ?? 'someone with no name'} my best friend!\n  </button>);\n}\n")),(0,r.mdx)("p",null,"Let's recap what is happening here."),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"We are writing a component in which clicking a button results in a user is being assigned to ",(0,r.mdx)("inlineCode",{parentName:"li"},"viewer.best_friend"),". After this button is clicked, all components which were previously reading the ",(0,r.mdx)("inlineCode",{parentName:"li"},"viewer.best_friend")," field will be re-rendered, if necessary."),(0,r.mdx)("li",{parentName:"ul"},"The source of the assignment is a user where an ",(0,r.mdx)("strong",{parentName:"li"},"assignable fragment")," is spread."),(0,r.mdx)("li",{parentName:"ul"},"The target of the assignment is accessed using the ",(0,r.mdx)("inlineCode",{parentName:"li"},"commitLocalUpdate")," and ",(0,r.mdx)("inlineCode",{parentName:"li"},"readUpdatableQuery_EXPERIMENTAL")," APIs."),(0,r.mdx)("li",{parentName:"ul"},"The query passed to ",(0,r.mdx)("inlineCode",{parentName:"li"},"readUpdatableQuery_EXPERIMENTAL")," must include the ",(0,r.mdx)("inlineCode",{parentName:"li"},"@updatable")," directive."),(0,r.mdx)("li",{parentName:"ul"},"Finally, in order to have ",(0,r.mdx)("inlineCode",{parentName:"li"},"updatableData.viewer.best_friend = something")," typecheck, we must:",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},"validate that the ",(0,r.mdx)("inlineCode",{parentName:"li"},"viewer")," is not null,"),(0,r.mdx)("li",{parentName:"ul"},"validate that the ",(0,r.mdx)("inlineCode",{parentName:"li"},"user")," is not null, and"),(0,r.mdx)("li",{parentName:"ul"},"validate that the source (",(0,r.mdx)("inlineCode",{parentName:"li"},"user"),") is valid for assignment by using the ",(0,r.mdx)("inlineCode",{parentName:"li"},"validateUser")," function.")))),(0,r.mdx)("h2",{id:"pitfalls"},"Pitfalls"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Note that there are no guarantees about what fields are present on the assigned user. This means that any consumes an updated field has no guarantee that the required fields were fetched and are present on the assigned object.")),(0,r.mdx)(o.FbInternalOnly,{mdxType:"FbInternalOnly"},(0,r.mdx)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.mdx)("div",{parentName:"div",className:"admonition-heading"},(0,r.mdx)("h5",{parentName:"div"},(0,r.mdx)("span",{parentName:"h5",className:"admonition-icon"},(0,r.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.mdx)("div",{parentName:"div",className:"admonition-content"},(0,r.mdx)("p",{parentName:"div"},"It is technically feasible to add fields to the assignable fragment, which would have the effect of guaranteeing that certain fields are present in the assigned object."),(0,r.mdx)("p",{parentName:"div"},"If this is a need, please reach out to ",(0,r.mdx)("a",{parentName:"p",href:"https://www.internalfb.com/profile/view/1238951"},"Robert Balicki"),".")))),(0,r.mdx)("h2",{id:"example-assigning-to-a-list"},"Example: Assigning to a list"),(0,r.mdx)("p",null,"Let's modify the previous example to append the user to a list of best friends. In this example, the following principle is relevant:"),(0,r.mdx)("blockquote",null,(0,r.mdx)("p",{parentName:"blockquote"},"Every assigned linked field (i.e. the right hand side of the assignment) ",(0,r.mdx)("strong",{parentName:"p"},"must originate in a read-only fragment, query, mutation or subscription"),".")),(0,r.mdx)("p",null,"This means that ",(0,r.mdx)("inlineCode",{parentName:"p"},"updatableData.foo = updatableData.foo")," is invalid. For the same reason, ",(0,r.mdx)("inlineCode",{parentName:"p"},"updatableData.viewer.best_friends = updatableData.viewer.best_friends.concat([newBestFriend])")," is invalid. To work around this restriction, we must select the existing best friends from a read-only fragment, and perform the assignment as follows: ",(0,r.mdx)("inlineCode",{parentName:"p"},"viewer.best_friends = existing_list.concat([newBestFriend])"),"."),(0,r.mdx)("p",null,"Consider the following full example:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-graphql"},'extend type Viewer {\n  # We are now defined a "best_friends" field instead of a "best_friend" field\n  best_friends: [User!],\n}\n')),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-js"},"// AssignBestFriendButton.react.js\nimport {validate as ValidateUser} from 'AssignableBestFriendButton_assignable_user.graphql';\nimport type {AssignBestFriendButton_user$key} from 'AssignBestFriendButton_user.graphql';\nimport type {AssignBestFriendButton_viewer$key} from 'AssignBestFriendButton_viewer';\n\nimport type {RecordSourceSelectorProxy} from 'react-relay';\n\nconst {commitLocalUpdate, useFragment, useRelayEnvironment} = require('react-relay');\n\ngraphql`\n  fragment AssignBestFriendButton_assignable_user on User @assignable {\n    __typename\n  }\n`;\n\nexport default function AssignBestFriendButton({\n  someTypeRef: AssignBestFriendButton_someType$key,\n  viewerFragmentRef: AssignBestFriendButton_viewer$key,\n}) {\n  const data = useFragment(graphql`\n    fragment AssignBestFriendButton_someType on SomeType {\n      user {\n        name\n        ...AssignableBestFriendButton_assignable_user\n      }\n    }\n  `, someTypeRef);\n\n  const viewer = useFragment(graphql`\n    fragment AssignBestFriendButton_viewer on Viewer {\n      best_friends {\n        # since viewer.best_friends appears in the right hand side of the assignment\n        # (i.e. updatableData.viewer.best_friends = viewer.best_friends.concat(...)),\n        # the best_friends field must contain the correct assignable fragment spread\n        ...AssignableBestFriendButton_assignable_user\n      }\n    }\n  `, viewerRef);\n\n  const environment = useRelayEnvironment();\n  const onClick = () => {\n    commitLocalUpdate(\n      environment,\n      (store: RecordSourceSelectorProxy) => {\n        const {updatableData} = store.readUpdatableQuery_EXPERIMENTAL(\n            graphql`\n              query AssignBestFriendButtonUpdatableQuery\n              @updatable {\n                viewer {\n                  best_friends {\n                    ...AssignableBestFriendButton_assignable_user\n                  }\n                }\n              }\n            `,\n            {}\n          );\n\n        // See the note above about reducing the cases in which we need to validate\n        // at runtime.\n        const existingBestFriends = viewer.best_friends == null ? [] : viewer.best_friends\n          .flatMap(friend => {\n            const validFriend = validateUser(friend);\n            if (validFriend === false) {\n              return [];\n            } else {\n              return [validFriend];\n            }\n          });\n\n        const user = data.user;\n        if (updatableData.viewer != null && user != null) {\n          const validUser = validateUser(user);\n          if (validUser !== false) {\n            updatableData.viewer.best_friends = existingBestFriends.concat([validUser]);\n          }\n        }\n      }\n    );\n  };\n\n  return (<button onClick={onClick}>\n    Add {user.name ?? 'someone with no name'} to my list of best friends!\n  </button>);\n}\n")),(0,r.mdx)("h2",{id:"validation-and-type-refinement"},"Validation and type refinement"),(0,r.mdx)("p",null,"Validation is a runtime check to ensure that the source is valid for assignment. If the destination field has a concrete type, the validator checks that the ",(0,r.mdx)("inlineCode",{parentName:"p"},"__typename")," field has the correct value (e.g. ",(0,r.mdx)("inlineCode",{parentName:"p"},'"User"')," in the previous examples.)"),(0,r.mdx)("p",null,"In some cases, you can do this yourself without the need for a validator. If you have a linked field with an interface type and containing only inline fragments refining the type to a concrete field, where each inline fragment contains a ",(0,r.mdx)("inlineCode",{parentName:"p"},"__typename")," selection, then the generated flowtype will be a ",(0,r.mdx)("strong",{parentName:"p"},"discriminated union with the ",(0,r.mdx)("inlineCode",{parentName:"strong"},"__typename")," field as discriminator"),". In cases like this, you use the ",(0,r.mdx)("inlineCode",{parentName:"p"},"__typename")," field for refinement and avoid using the validator."),(0,r.mdx)("p",null,"Example:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-js"},'const data = useFragment(graphql`\n  fragment TestComponent_bar on SomeType {\n    node(id: "4") {\n      ... on User {\n        __typename\n        ...MyAssignableFragment_assignable_user\n      }\n      # other selections\n    }\n  }\n`, fragmentReference);\n\nconst onClick = () => {\n  commitLocalUpdate(\n    environment,\n    store => {\n      const {updatableData} = store.readUpdatableQuery_EXPERIMENTAL(\n        graphql`\n          TestComponentUpdatableQuery {\n            best_friend {\n              ...MyAssignableFragment_assignable_user\n            }\n          }\n        `\n      );\n\n      if (data.node?.__typename === \'User\') {\n        // because the generated type for data has a discriminated union at data.node,\n        // in this block, flow correctly infers that data.node has typename "User"\n        // and you can assign the user without runtime validation\n        updatableData.best_friend = data.node;\n      }\n    }\n  )\n}\n')),(0,r.mdx)("h2",{id:"validation-when-the-destination-field-is-an-interface"},"Validation when the destination field is an interface"),(0,r.mdx)("p",null,"From a developer's perspective, validators behave identically whether the destination field is an interface or a concrete type."),(0,r.mdx)("p",null,"Under the hood, if the destination field is an interface, validators check for the presence of an assignable fragment marker. Assignable fragment markers are extra selections of the form ",(0,r.mdx)("inlineCode",{parentName:"p"},"__isNameOfAssignableFragment: __typename")," that are added to read-only fragments where assignable fragments are spread."),(0,r.mdx)(s.Z,{mdxType:"DocsRating"}))}h.isMDXComponent=!0},47596:function(e,n,t){var a=this&&this.__awaiter||function(e,n,t,a){return new(t||(t=Promise))((function(i,r){function s(e){try{d(a.next(e))}catch(n){r(n)}}function o(e){try{d(a.throw(e))}catch(n){r(n)}}function d(e){var n;e.done?i(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(s,o)}d((a=a.apply(e,n||[])).next())}))};Object.defineProperty(n,"__esModule",{value:!0}),n.getSpecInfo=void 0;const i=t(11737);n.getSpecInfo=function(e){return a(this,void 0,void 0,(function*(){return yield i.call({module:"bloks",api:"getSpecInfo",args:{styleId:e}})}))}},11737:function(e,n){var t=this&&this.__awaiter||function(e,n,t,a){return new(t||(t=Promise))((function(i,r){function s(e){try{d(a.next(e))}catch(n){r(n)}}function o(e){try{d(a.throw(e))}catch(n){r(n)}}function d(e){var n;e.done?i(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(s,o)}d((a=a.apply(e,n||[])).next())}))};Object.defineProperty(n,"__esModule",{value:!0}),n.call=void 0;let a=!1,i=0;const r={};n.call=function(e){return t(this,void 0,void 0,(function*(){if("staticdocs.thefacebook.com"!==window.location.hostname&&"localhost"!==window.location.hostname)return Promise.reject(new Error("Not running on static docs"));a||(a=!0,window.addEventListener("message",(e=>{if("static-docs-bridge-response"!==e.data.event)return;const n=e.data.id;n in r||console.error(`Recieved response for id: ${n} with no matching receiver`),"response"in e.data?r[n].resolve(e.data.response):r[n].reject(new Error(e.data.error)),delete r[n]})));const n=i++,t=new Promise(((e,t)=>{r[n]={resolve:e,reject:t}})),s={event:"static-docs-bridge-call",id:n,module:e.module,api:e.api,args:e.args},o="localhost"===window.location.hostname?"*":"https://www.internalfb.com";return window.parent.postMessage(s,o),t}))}},24855:function(e,n,t){var a=this&&this.__awaiter||function(e,n,t,a){return new(t||(t=Promise))((function(i,r){function s(e){try{d(a.next(e))}catch(n){r(n)}}function o(e){try{d(a.throw(e))}catch(n){r(n)}}function d(e){var n;e.done?i(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(s,o)}d((a=a.apply(e,n||[])).next())}))};Object.defineProperty(n,"__esModule",{value:!0}),n.reportFeatureUsage=n.reportContentCopied=void 0;const i=t(11737);n.reportContentCopied=function(e){return a(this,void 0,void 0,(function*(){const{textContent:n}=e;try{yield i.call({module:"feedback",api:"reportContentCopied",args:{textContent:n}})}catch(t){}}))},n.reportFeatureUsage=function(e){return a(this,void 0,void 0,(function*(){const{featureName:n,id:t}=e;console.log("used feature");try{yield i.call({module:"feedback",api:"reportFeatureUsage",args:{featureName:n,id:t}})}catch(a){}}))}},44256:function(e,n,t){var a=this&&this.__createBinding||(Object.create?function(e,n,t,a){void 0===a&&(a=t),Object.defineProperty(e,a,{enumerable:!0,get:function(){return n[t]}})}:function(e,n,t,a){void 0===a&&(a=t),e[a]=n[t]}),i=this&&this.__setModuleDefault||(Object.create?function(e,n){Object.defineProperty(e,"default",{enumerable:!0,value:n})}:function(e,n){e.default=n}),r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var n={};if(null!=e)for(var t in e)"default"!==t&&Object.prototype.hasOwnProperty.call(e,t)&&a(n,e,t);return i(n,e),n};Object.defineProperty(n,"__esModule",{value:!0}),n.OssOnly=n.FbInternalOnly=n.getEphemeralDiffNumber=n.hasEphemeralDiffNumber=n.isInternal=n.validateFbContentArgs=n.fbInternalOnly=n.fbContent=n.inpageeditor=n.feedback=n.uidocs=n.bloks=void 0,n.bloks=r(t(47596)),n.uidocs=r(t(17483)),n.feedback=r(t(24855)),n.inpageeditor=r(t(27312));const s=["internal","external"];function o(e){return l(e),m()?"internal"in e?d(e.internal):[]:"external"in e?d(e.external):[]}function d(e){return"function"==typeof e?e():e}function l(e){if("object"!=typeof e)throw new Error(`fbContent() args must be an object containing keys: ${s}. Instead got ${e}`);if(!Object.keys(e).find((e=>s.find((n=>n===e)))))throw new Error(`No valid args found in ${JSON.stringify(e)}. Accepted keys: ${s}`);const n=Object.keys(e).filter((e=>!s.find((n=>n===e))));if(n.length>0)throw new Error(`Unexpected keys ${n} found in fbContent() args. Accepted keys: ${s}`)}function m(){try{return Boolean(!1)}catch(e){return console.log("process.env.FB_INTERNAL couldn't be read, maybe you forgot to add the required webpack EnvironmentPlugin config?",e),!1}}function c(){try{return null}catch(e){return console.log("process.env.PHABRICATOR_DIFF_NUMBER couldn't be read, maybe you forgot to add the required webpack EnvironmentPlugin config?",e),null}}n.fbContent=o,n.fbInternalOnly=function(e){return o({internal:e})},n.validateFbContentArgs=l,n.isInternal=m,n.hasEphemeralDiffNumber=function(){return Boolean(c())},n.getEphemeralDiffNumber=c,n.FbInternalOnly=function(e){return m()?e.children:null},n.OssOnly=function(e){return m()?null:e.children}},27312:function(e,n,t){var a=this&&this.__awaiter||function(e,n,t,a){return new(t||(t=Promise))((function(i,r){function s(e){try{d(a.next(e))}catch(n){r(n)}}function o(e){try{d(a.throw(e))}catch(n){r(n)}}function d(e){var n;e.done?i(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(s,o)}d((a=a.apply(e,n||[])).next())}))};Object.defineProperty(n,"__esModule",{value:!0}),n.submitDiff=void 0;const i=t(11737);n.submitDiff=function(e){return a(this,void 0,void 0,(function*(){const{file_path:n,new_content:t,project_name:a,diff_number:r}=e;try{return yield i.call({module:"inpageeditor",api:"createPhabricatorDiffApi",args:{file_path:n,new_content:t,project_name:a,diff_number:r}})}catch(s){throw new Error(`Error occurred while trying to submit diff. Stack trace: ${s}`)}}))}},17483:function(e,n,t){var a=this&&this.__awaiter||function(e,n,t,a){return new(t||(t=Promise))((function(i,r){function s(e){try{d(a.next(e))}catch(n){r(n)}}function o(e){try{d(a.throw(e))}catch(n){r(n)}}function d(e){var n;e.done?i(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(s,o)}d((a=a.apply(e,n||[])).next())}))};Object.defineProperty(n,"__esModule",{value:!0}),n.getApi=n.docsets=void 0;const i=t(11737);n.docsets={BLOKS_CORE:"887372105406659"},n.getApi=function(e){return a(this,void 0,void 0,(function*(){const{name:n,framework:t,docset:a}=e;return yield i.call({module:"uidocs",api:"getApi",args:{name:n,framework:t,docset:a}})}))}}}]);