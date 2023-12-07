"use strict";(self.webpackChunkrelay_website=self.webpackChunkrelay_website||[]).push([[94886],{3905:(e,t,a)=>{a.r(t),a.d(t,{MDXContext:()=>s,MDXProvider:()=>p,mdx:()=>f,useMDXComponents:()=>u,withMDXComponents:()=>m});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},o.apply(this,arguments)}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),m=function(e){return function(t){var a=u(t.components);return n.createElement(e,o({},t,{components:a}))}},u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,r=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),m=u(a),p=i,h=m["".concat(r,".").concat(p)]||m[p]||c[p]||o;return a?n.createElement(h,l(l({ref:t},s),{},{components:a})):n.createElement(h,l({ref:t},s))}));function f(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,r=new Array(o);r[0]=h;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var s=2;s<o;s++)r[s]=a[s];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},68629:(e,t,a)=>{a.d(t,{Z:()=>c});var n=a(39960),i=a(86341),o=a(67294);function r(){var e=window.encodeURI(JSON.stringify({title:"Feedback about "+window.location.pathname,description:"**!!! Required !!!**\n\nPlease modify the task description to let us know how the docs can be improved.\n\n**Please do not ask support questions via this form! Instead, ask in fburl.com/relay_support**",tag_ids:{add:[0xac96423e5b680,0x64079768ac750]}}));window.open("https://www.internalfb.com/tasks/?n="+e)}function l(e){var t=e.children;return o.createElement("div",{className:"docsRating",id:"docsRating"},o.createElement("hr",null),t)}var d=function(){var e=o.useState(!1),t=e[0],a=e[1],n=function(e){a(!0),function(e){window.ga&&window.ga("send",{hitType:"event",eventCategory:"button",eventAction:"feedback",eventValue:e})}(e)};return t?"Thank you for letting us know!":o.createElement(o.Fragment,null,"Is this page useful?",o.createElement("svg",{className:"i_thumbsup",alt:"Like",id:"docsRating-like",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return n(1)}},o.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})),o.createElement("svg",{className:"i_thumbsdown",alt:"Dislike",id:"docsRating-dislike",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return n(0)}},o.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})))},s=function(){return o.createElement("p",null,"Let us know how these docs can be improved by",o.createElement("a",{className:"button",role:"button",tabIndex:0,onClick:r},"Filing a task"))},m=function(){return o.createElement("p",null,"Help us make the site even better by"," ",o.createElement(n.default,{to:"https://www.surveymonkey.com/r/FYC9TCJ"},"answering a few quick questions"),".")},u=function(){return o.createElement(l,null,o.createElement(s,null),o.createElement(d,null),o.createElement(m,null))},p=function(){return o.createElement(l,null,o.createElement(d,null),o.createElement(m,null))};const c=function(){return(0,i.fbContent)({internal:o.createElement(u,null),external:o.createElement(p,null)})}},37719:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>m,default:()=>f,frontMatter:()=>s,metadata:()=>u,toc:()=>c});var n=a(83117),i=a(80102),o=(a(67294),a(3905)),r=a(68629),l=a(86341),d=["components"],s={id:"graphql-mutations",title:"GraphQL mutations",slug:"/guided-tour/updating-data/graphql-mutations/",description:"Relay guide to GraphQL mutations",keywords:["mutation"]},m=void 0,u={unversionedId:"guided-tour/updating-data/graphql-mutations",id:"version-v14.0.0/guided-tour/updating-data/graphql-mutations",title:"GraphQL mutations",description:"Relay guide to GraphQL mutations",source:"@site/versioned_docs/version-v14.0.0/guided-tour/updating-data/graphql-mutations.md",sourceDirName:"guided-tour/updating-data",slug:"/guided-tour/updating-data/graphql-mutations/",permalink:"/docs/v14.0.0/guided-tour/updating-data/graphql-mutations/",draft:!1,editUrl:"https://github.com/facebook/relay/tree/main/website/versioned_docs/version-v14.0.0/guided-tour/updating-data/graphql-mutations.md",tags:[],version:"v14.0.0",lastUpdatedBy:"Peng Sun (Oculus)",lastUpdatedAt:1701975372,formattedLastUpdatedAt:"Dec 7, 2023",frontMatter:{id:"graphql-mutations",title:"GraphQL mutations",slug:"/guided-tour/updating-data/graphql-mutations/",description:"Relay guide to GraphQL mutations",keywords:["mutation"]}},p={},c=[{value:"Writing Mutations",id:"writing-mutations",level:2},{value:"Using <code>useMutation</code> to execute a mutation",id:"using-usemutation-to-execute-a-mutation",level:2},{value:"Refreshing components in response to mutations",id:"refreshing-components-in-response-to-mutations",level:2},{value:"Executing a callback when the mutation completes or errors",id:"executing-a-callback-when-the-mutation-completes-or-errors",level:2},{value:"Declarative mutation directives",id:"declarative-mutation-directives",level:2},{value:"Manipulating connections in response to mutations",id:"manipulating-connections-in-response-to-mutations",level:3},{value:"Deleting items in response to mutations",id:"deleting-items-in-response-to-mutations",level:3},{value:"Imperatively modifying local data",id:"imperatively-modifying-local-data",level:2},{value:"Optimistic updates",id:"optimistic-updates",level:2},{value:"Optimistic response",id:"optimistic-response",level:3},{value:"Optimistic updaters",id:"optimistic-updaters",level:3},{value:"Order of execution of updater functions",id:"order-of-execution-of-updater-functions",level:2},{value:"Invalidating data during a mutation",id:"invalidating-data-during-a-mutation",level:2},{value:"Handling errors",id:"handling-errors",level:2},{value:"Surfacing mutation level errors",id:"surfacing-mutation-level-errors",level:3},{value:"Surfacing field level errors",id:"surfacing-field-level-errors",level:3}],h={toc:c};function f(e){var t=e.components,a=(0,i.Z)(e,d);return(0,o.mdx)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("p",null,"In GraphQL, data on the server is updated using ",(0,o.mdx)("a",{parentName:"p",href:"https://graphql.org/learn/queries/#mutations"},"GraphQL mutations"),". Mutations are read-write server operations, which both modify the data on the backend and allow you to query the modified data in the same request."),(0,o.mdx)("h2",{id:"writing-mutations"},"Writing Mutations"),(0,o.mdx)("p",null,"A GraphQL mutation looks very similar to a query, except that it uses the ",(0,o.mdx)("inlineCode",{parentName:"p"},"mutation")," keyword:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-graphql"},"mutation FeedbackLikeMutation($input: FeedbackLikeData!) {\n  feedback_like(data: $input) {\n    feedback {\n      id\n      viewer_does_like\n      like_count\n    }\n  }\n}\n")),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},'The mutation above modifies the server data to "like" the specified ',(0,o.mdx)("inlineCode",{parentName:"li"},"Feedback")," object."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"feedback_like")," is a ",(0,o.mdx)("em",{parentName:"li"},"mutation root field")," (or just ",(0,o.mdx)("em",{parentName:"li"},"mutation field"),") which updates data on the backend.")),(0,o.mdx)(l.FbInternalOnly,{mdxType:"FbInternalOnly"},(0,o.mdx)("admonition",{type:"info"},(0,o.mdx)("p",{parentName:"admonition"},'You can view mutation root fields in the GraphQL Schema Explorer by opening VSCode @ FB and executing the command "Relay: Open GraphQL Schema Explorer". Then, in the "Schema Explorer Tab", click on "Mutation".'),(0,o.mdx)("p",{parentName:"admonition"},"You can click on the various mutation fields to see their parameters, descriptions and exposed fields."))),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"A mutation is handled in two separate steps: first, the update is processed on the server, and then the query is executed. This ensures that you only see data that has already been updated as part of your mutation response.")),(0,o.mdx)("admonition",{type:"note"},(0,o.mdx)("p",{parentName:"admonition"},"Note that queries are processed in the same way. Outer selections are calculated before inner selections. It is simply a matter of convention that top-level mutation fields have side-effects, while other fields tend not to.")),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"The mutation field (in this case, ",(0,o.mdx)("inlineCode",{parentName:"li"},"feedback_like"),") returns a specific GraphQL type which exposes the data for which we can query in the mutation response.")),(0,o.mdx)(l.FbInternalOnly,{mdxType:"FbInternalOnly"},(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"https://fb.workplace.com/groups/644933736023601/?multi_permalinks=823422684841371"},"It is a best practice")," to include the ",(0,o.mdx)("inlineCode",{parentName:"li"},"viewer")," object and all updated Ents as part of the mutation response."))),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"In this case, we're querying for the ",(0,o.mdx)("em",{parentName:"li"},"updated")," feedback object, including the updated ",(0,o.mdx)("inlineCode",{parentName:"li"},"like_count")," and the updated value for ",(0,o.mdx)("inlineCode",{parentName:"li"},"viewer_does_like"),", indicating whether the current viewer likes the feedback object.")),(0,o.mdx)(l.FbInternalOnly,{mdxType:"FbInternalOnly"},(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"Check out the ",(0,o.mdx)("a",{parentName:"li",href:"https://www.internalfb.com/intern/wiki/Graphql-for-hack-developers/mutation-root-fields/"},"Hack documentation on writing mutations")," for information on how to add a mutation field to your backend code."))),(0,o.mdx)("p",null,"An example of a successful response for the above mutation could look like this:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "feedback_like": {\n    "feedback": {\n      "id": "feedback-id",\n      "viewer_does_like": true,\n      "like_count": 1,\n    }\n  }\n}\n')),(0,o.mdx)("p",null,"In Relay, we can declare GraphQL mutations using the ",(0,o.mdx)("inlineCode",{parentName:"p"},"graphql")," tag too:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-js"},"const {graphql} = require('react-relay');\n\nconst feedbackLikeMutation = graphql`\n  mutation FeedbackLikeMutation($input: FeedbackLikeData!) {\n    feedback_like(data: $input) {\n      feedback {\n        id\n        viewer_does_like\n        like_count\n      }\n    }\n  }\n`;\n")),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"Note that mutations can also reference GraphQL ",(0,o.mdx)("a",{parentName:"li",href:"../../rendering/variables/"},"variables")," in the same way queries or fragments do.")),(0,o.mdx)("h2",{id:"using-usemutation-to-execute-a-mutation"},"Using ",(0,o.mdx)("inlineCode",{parentName:"h2"},"useMutation")," to execute a mutation"),(0,o.mdx)("p",null,"In order to execute a mutation against the server in Relay, we can use the ",(0,o.mdx)("inlineCode",{parentName:"p"},"commitMutation")," and ",(0,o.mdx)("a",{parentName:"p",href:"../../../api-reference/use-mutation"},"useMutation")," APIs. Let's take a look at an example using the ",(0,o.mdx)("inlineCode",{parentName:"p"},"useMutation")," API:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-js"},"import type {FeedbackLikeData, LikeButtonMutation} from 'LikeButtonMutation.graphql';\n\nconst {useMutation, graphql} = require('react-relay');\n\nfunction LikeButton({\n  feedbackId: string,\n}) {\n  const [commitMutation, isMutationInFlight] = useMutation<LikeButtonMutation>(\n    graphql`\n      mutation LikeButtonMutation($input: FeedbackLikeData!) {\n        feedback_like(data: $input) {\n          feedback {\n            viewer_does_like\n            like_count\n          }\n        }\n      }\n    `\n  );\n\n  return <button\n    onClick={() => commitMutation({\n      variables: {\n        input: {id: feedbackId},\n      },\n    })}\n    disabled={isMutationInFlight}\n  >\n    Like\n  </button>\n}\n")),(0,o.mdx)("p",null,"Let's distill what's happening here."),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"useMutation")," takes a graphql literal containing a mutation as its only argument."),(0,o.mdx)("li",{parentName:"ul"},"It returns a tuple of items:",(0,o.mdx)("ul",{parentName:"li"},(0,o.mdx)("li",{parentName:"ul"},"a callback (which we call ",(0,o.mdx)("inlineCode",{parentName:"li"},"commitMutation"),") which accepts a ",(0,o.mdx)("inlineCode",{parentName:"li"},"UseMutationConfig"),", and"),(0,o.mdx)("li",{parentName:"ul"},"a boolean indicating whether a mutation is in flight."))),(0,o.mdx)("li",{parentName:"ul"},"In addition, ",(0,o.mdx)("inlineCode",{parentName:"li"},"useMutation")," accepts a Flow type parameter. As with queries, the Flow type of the mutation is exported from the file that the Relay compiler generates.",(0,o.mdx)("ul",{parentName:"li"},(0,o.mdx)("li",{parentName:"ul"},"If this type is provided, the ",(0,o.mdx)("inlineCode",{parentName:"li"},"UseMutationConfig")," becomes statically typed as well. ",(0,o.mdx)("strong",{parentName:"li"},"It is a best practice to always provide this type.")))),(0,o.mdx)("li",{parentName:"ul"},"Now, when ",(0,o.mdx)("inlineCode",{parentName:"li"},"commitMutation")," is called with the mutation variables, Relay will make a network request that executes the ",(0,o.mdx)("inlineCode",{parentName:"li"},"feedback_like")," field on the server. In this example, this would find the feedback specified by the variables, and record on the backend that the user liked that piece of feedback."),(0,o.mdx)("li",{parentName:"ul"},"Once that field is executed, the backend will select the updated Feedback object and select the ",(0,o.mdx)("inlineCode",{parentName:"li"},"viewer_does_like")," and ",(0,o.mdx)("inlineCode",{parentName:"li"},"like_count")," fields off of it.",(0,o.mdx)("ul",{parentName:"li"},(0,o.mdx)("li",{parentName:"ul"},"Since the ",(0,o.mdx)("inlineCode",{parentName:"li"},"Feedback")," type contains an ",(0,o.mdx)("inlineCode",{parentName:"li"},"id")," field, the Relay compiler will automatically add a selection for the ",(0,o.mdx)("inlineCode",{parentName:"li"},"id")," field."))),(0,o.mdx)("li",{parentName:"ul"},"When the mutation response is received, Relay will find a feedback object in the store with a matching ",(0,o.mdx)("inlineCode",{parentName:"li"},"id")," and update it with the newly received ",(0,o.mdx)("inlineCode",{parentName:"li"},"viewer_does_like")," and ",(0,o.mdx)("inlineCode",{parentName:"li"},"like_count")," values."),(0,o.mdx)("li",{parentName:"ul"},"If these values have changed as a result, any components which selected these fields off of the feedback object will be re-rendered. Or, to put it colloquially, any component which depends on the updated data will re-render.")),(0,o.mdx)("admonition",{type:"note"},(0,o.mdx)("p",{parentName:"admonition"},"The name of the type of the parameter ",(0,o.mdx)("inlineCode",{parentName:"p"},"FeedbackLikeData")," is derived from the name of the top-level mutation field, i.e. from ",(0,o.mdx)("inlineCode",{parentName:"p"},"feedback_like"),". This type is also exported from the generated ",(0,o.mdx)("inlineCode",{parentName:"p"},"graphql.js")," file.")),(0,o.mdx)("h2",{id:"refreshing-components-in-response-to-mutations"},"Refreshing components in response to mutations"),(0,o.mdx)("p",null,"In the previous example, we manually selected ",(0,o.mdx)("inlineCode",{parentName:"p"},"viewer_does_like")," and ",(0,o.mdx)("inlineCode",{parentName:"p"},"like_count"),". Components that select these fields will be re-rendered, should the value of those fields change."),(0,o.mdx)("p",null,"However, it is generally better to spread fragments that correspond to components that we want to refresh in response to the mutation. This is because the data selected by components can change."),(0,o.mdx)("p",null,"Requiring developers to know about all mutations that might affect their components' data (and keeping them up-to-date) is an example of the kind of global reasoning that Relay wants to avoid requiring."),(0,o.mdx)("p",null,"For example, we might rewrite the mutation as follows:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-graphql"},"mutation FeedbackLikeMutation($input: FeedbackLikeData!) {\n  feedback_like(data: $input) {\n    feedback {\n      ...FeedbackDisplay_feedback\n      ...FeedbackDetail_feedback\n    }\n  }\n}\n")),(0,o.mdx)("p",null,"If this mutation is executed, then whatever fields were selected by the ",(0,o.mdx)("inlineCode",{parentName:"p"},"FeedbackDisplay")," and ",(0,o.mdx)("inlineCode",{parentName:"p"},"FeedbackDetail")," components will be refetched, and those components will remain in a consistent state."),(0,o.mdx)("admonition",{type:"note"},(0,o.mdx)("p",{parentName:"admonition"},"Spreading fragments is generally preferable to refetching the data after a mutation has completed, since the updated data can be fetched in a single round trip.")),(0,o.mdx)("h2",{id:"executing-a-callback-when-the-mutation-completes-or-errors"},"Executing a callback when the mutation completes or errors"),(0,o.mdx)("p",null,"We may want to update some state in response to the mutation succeeding or failing. For example, we might want to alert the user if the mutation failed. The ",(0,o.mdx)("inlineCode",{parentName:"p"},"UseMutationConfig")," object can include the following fields to handle such cases:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"onCompleted"),", a callback that is executed when the mutation completes. It is passed the mutation response (stopping at fragment spread boundaries).",(0,o.mdx)("ul",{parentName:"li"},(0,o.mdx)("li",{parentName:"ul"},"The value passed to ",(0,o.mdx)("inlineCode",{parentName:"li"},"onCompleted")," is the the mutation fragment, as read out from the store, ",(0,o.mdx)("strong",{parentName:"li"},"after")," updaters and declarative mutation directives are applied. This means that data from within unmasked fragments will not be read, and records that were deleted (e.g. by ",(0,o.mdx)("inlineCode",{parentName:"li"},"@deleteRecord"),") may also be null."))),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"onError"),", a callback that is executed when the mutation errors. It is passed the error that occurred.")),(0,o.mdx)("h2",{id:"declarative-mutation-directives"},"Declarative mutation directives"),(0,o.mdx)("h3",{id:"manipulating-connections-in-response-to-mutations"},"Manipulating connections in response to mutations"),(0,o.mdx)("p",null,"Relay makes it easy to respond to mutations by adding items to or removing items from connections (i.e. lists). For example, you might want to append a newly created user to a given connection. For more, see ",(0,o.mdx)("a",{parentName:"p",href:"../../list-data/updating-connections/#using-declarative-directives"},"Using declarative directives"),"."),(0,o.mdx)("h3",{id:"deleting-items-in-response-to-mutations"},"Deleting items in response to mutations"),(0,o.mdx)("p",null,"In addition, you might want to delete an item from the store in response to a mutation. In order to do this, you would add the ",(0,o.mdx)("inlineCode",{parentName:"p"},"@deleteRecord")," directive to the deleted ID. For example:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-graphql"},"mutation DeletePostMutation($input: DeletePostData!) {\n  delete_post(data: $input) {\n    deleted_post {\n      id @deleteRecord\n    }\n  }\n}\n")),(0,o.mdx)("h2",{id:"imperatively-modifying-local-data"},"Imperatively modifying local data"),(0,o.mdx)("p",null,"At times, the updates you wish to perform are more complex than just updating the values of fields and cannot be handled by the declarative mutation directives. For such situations, the ",(0,o.mdx)("inlineCode",{parentName:"p"},"UseMutationConfig")," accepts an ",(0,o.mdx)("inlineCode",{parentName:"p"},"updater")," function which gives you full control over how to update the store."),(0,o.mdx)("p",null,"This is discussed in more detail in the section on ",(0,o.mdx)("a",{parentName:"p",href:"../imperatively-modifying-store-data/"},"Imperatively modifying store data"),"."),(0,o.mdx)("h2",{id:"optimistic-updates"},"Optimistic updates"),(0,o.mdx)("p",null,'Oftentimes, we don\'t want to wait for the server to respond before we respond to the user interaction. For example, if a user clicks the "Like" button, we would like to instantly show the affected comment, post, etc. has been liked by the user.'),(0,o.mdx)("p",null,"More generally, in these cases, we want to immediately update the data in our store optimistically, i.e. under the assumption that the mutation will complete successfully. If the mutation ends up not succeeding, we would like to roll back that optimistic update."),(0,o.mdx)("h3",{id:"optimistic-response"},"Optimistic response"),(0,o.mdx)("p",null,"In order to enable this, the ",(0,o.mdx)("inlineCode",{parentName:"p"},"UseMutationConfig")," can include an ",(0,o.mdx)("inlineCode",{parentName:"p"},"optimisticResponse")," field."),(0,o.mdx)("p",null,"For this field to be Flow-typed, the call to ",(0,o.mdx)("inlineCode",{parentName:"p"},"useMutation")," must be passed a Flow type parameter ",(0,o.mdx)("strong",{parentName:"p"},"and")," the mutation must be decorated with a ",(0,o.mdx)("inlineCode",{parentName:"p"},"@raw_response_type")," directive."),(0,o.mdx)("p",null,"In the previous example, we might provide the following optimistic response:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-js"},"{\n  feedback_like: {\n    feedback: {\n      // Even though the id field is not explicitly selected, the\n      // compiler selected it for us\n      id: feedbackId,\n      viewer_does_like: true,\n    },\n  },\n}\n")),(0,o.mdx)("p",null,"Now, when we call ",(0,o.mdx)("inlineCode",{parentName:"p"},"commitMutation"),", this data will be immediately written into the store. The item in the store with the matching id will be updated with a new value of ",(0,o.mdx)("inlineCode",{parentName:"p"},"viewer_does_like"),". Any components which have selected this field will be re-rendered."),(0,o.mdx)("p",null,"When the mutation succeeds or errors, the optimistic response will be rolled back."),(0,o.mdx)("p",null,"Updating the ",(0,o.mdx)("inlineCode",{parentName:"p"},"like_count")," field takes a bit more work. In order to update it, we should also read the ",(0,o.mdx)("strong",{parentName:"p"},"current like count")," in the component."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-js"},"import type {FeedbackLikeData, LikeButtonMutation} from 'LikeButtonMutation.graphql';\nimport type {LikeButton_feedback$fragmentType} from 'LikeButton_feedback.graphql';\n\nconst {useMutation, graphql} = require('react-relay');\n\nfunction LikeButton({\n  feedback: LikeButton_feedback$fragmentType,\n}) {\n  const data = useFragment(\n    graphql`\n      fragment LikeButton_feedback on Feedback {\n        __id\n        viewer_does_like @required(action: THROW)\n        like_count @required(action: THROW)\n      }\n    `,\n    feedback\n  );\n\n  const [commitMutation, isMutationInFlight] = useMutation<LikeButtonMutation>(\n    graphql`\n      mutation LikeButtonMutation($input: FeedbackLikeData!)\n      @raw_response_type {\n        feedback_like(data: $input) {\n          feedback {\n            viewer_does_like\n            like_count\n          }\n        }\n      }\n    `\n  );\n\n  const changeToLikeCount = data.viewer_does_like ? -1 : 1;\n  return <button\n    onClick={() => commitMutation({\n      variables: {\n        input: {id: data.__id},\n      },\n      optimisticResponse: {\n        feedback_like: {\n          feedback: {\n            id: data.__id,\n            viewer_does_like: !data.viewer_does_like,\n            like_count: data.like_count + changeToLikeCount,\n          },\n        },\n      },\n    })}\n    disabled={isMutationInFlight}\n  >\n    Like\n  </button>\n}\n")),(0,o.mdx)("admonition",{type:"caution"},(0,o.mdx)("p",{parentName:"admonition"},"You should be careful, and consider using ",(0,o.mdx)("a",{parentName:"p",href:"../imperatively-modifying-store-data/#example"},"optimistic updaters")," if the value of the optimistic response depends on the value of the store and if there can be multiple optimistic responses affecting that store value."),(0,o.mdx)("p",{parentName:"admonition"},"For example, if ",(0,o.mdx)("strong",{parentName:"p"},"two")," optimistic responses each increase the like count by one, and the ",(0,o.mdx)("strong",{parentName:"p"},"first")," optimistic updater is rolled back, the second optimistic update will still be applied, and the like count in the store will remain increased by two.")),(0,o.mdx)("admonition",{type:"caution"},(0,o.mdx)("p",{parentName:"admonition"},"Optimistic responses contain ",(0,o.mdx)("strong",{parentName:"p"},"many pitfalls!")),(0,o.mdx)("ul",{parentName:"admonition"},(0,o.mdx)("li",{parentName:"ul"},"An optimistic response can contain the data for the full query response, i.e. including the content of fragment spreads. This means that if a developer selects more fields in components whose fragments are spread in an optimistic response, these components may have inconsistent or partial data during an optimistic update."),(0,o.mdx)("li",{parentName:"ul"},"Because the type of the optimistic update includes the contents of all recursively nested fragments, it can be very large. Adding ",(0,o.mdx)("inlineCode",{parentName:"li"},"@raw_response_type")," to certain mutations can degrade the performance of the Relay compiler."))),(0,o.mdx)("h3",{id:"optimistic-updaters"},"Optimistic updaters"),(0,o.mdx)("p",null,"Optimistic responses aren't enough for every case. For example, we may want to optimistically update data that we aren't selecting in the mutation. Or, we may want to add or remove items from a connection (and the declarative mutation directives are insufficient for our use case.)"),(0,o.mdx)("p",null,"For situations like these, the ",(0,o.mdx)("inlineCode",{parentName:"p"},"UseMutationConfig")," can contain an ",(0,o.mdx)("inlineCode",{parentName:"p"},"optimisticUpdater")," field, which allows developers to imperatively and optimistically update the data in the store. This is discussed in more detail in the section on ",(0,o.mdx)("a",{parentName:"p",href:"../imperatively-modifying-store-data/"},"Imperatively updating store data"),"."),(0,o.mdx)("h2",{id:"order-of-execution-of-updater-functions"},"Order of execution of updater functions"),(0,o.mdx)("p",null,"In general, execution of the ",(0,o.mdx)("inlineCode",{parentName:"p"},"updater")," and optimistic updates will occur in the following order:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"If an ",(0,o.mdx)("inlineCode",{parentName:"li"},"optimisticResponse")," is provided, that data will be written into the store."),(0,o.mdx)("li",{parentName:"ul"},"If an ",(0,o.mdx)("inlineCode",{parentName:"li"},"optimisticUpdater")," is provided, Relay will execute it and update the store accordingly."),(0,o.mdx)("li",{parentName:"ul"},"If an ",(0,o.mdx)("inlineCode",{parentName:"li"},"optimisticResponse")," was provided, the declarative mutation directives present in the mutation will be processed on the optimistic response."),(0,o.mdx)("li",{parentName:"ul"},"If the mutation request succeeds:",(0,o.mdx)("ul",{parentName:"li"},(0,o.mdx)("li",{parentName:"ul"},"Any optimistic update that was applied will be rolled back."),(0,o.mdx)("li",{parentName:"ul"},"Relay will write the server response to the store."),(0,o.mdx)("li",{parentName:"ul"},"If an ",(0,o.mdx)("inlineCode",{parentName:"li"},"updater")," was provided, Relay will execute it and update the store accordingly. The server payload will be available to the ",(0,o.mdx)("inlineCode",{parentName:"li"},"updater")," as a root field in the store."),(0,o.mdx)("li",{parentName:"ul"},"Relay will process any declarative mutation directives using the server response."),(0,o.mdx)("li",{parentName:"ul"},"The ",(0,o.mdx)("inlineCode",{parentName:"li"},"onCompleted")," callback will be called."))),(0,o.mdx)("li",{parentName:"ul"},"If the mutation request fails:",(0,o.mdx)("ul",{parentName:"li"},(0,o.mdx)("li",{parentName:"ul"},"Any optimistic update was applied will be rolled back."),(0,o.mdx)("li",{parentName:"ul"},"The ",(0,o.mdx)("inlineCode",{parentName:"li"},"onError")," callback will be called.")))),(0,o.mdx)("h2",{id:"invalidating-data-during-a-mutation"},"Invalidating data during a mutation"),(0,o.mdx)("p",null,"The recommended approach when executing a mutation is to request ",(0,o.mdx)("em",{parentName:"p"},"all")," the relevant data that was affected by the mutation back from the server (as part of the mutation body), so that our local Relay store is consistent with the state of the server."),(0,o.mdx)("p",null,'However, often times it can be unfeasible to know and specify all the possible data the possible data that would be affected for mutations that have large rippling effects (e.g. imagine "blocking a user" or "leaving a group").'),(0,o.mdx)("p",null,"For these types of mutations, it's often more straightforward to explicitly mark some data as stale (or the whole store), so that Relay knows to refetch it the next time it is rendered. In order to do so, you can use the data invalidation APIs documented in our ",(0,o.mdx)("a",{parentName:"p",href:"../../reusing-cached-data/staleness-of-data/"},"Staleness of Data section"),"."),(0,o.mdx)(l.FbInternalOnly,{mdxType:"FbInternalOnly"},(0,o.mdx)("h2",{id:"handling-errors"},"Handling errors"),(0,o.mdx)("p",null,"GraphQL errors can largely be differentiated as:"),(0,o.mdx)("ol",null,(0,o.mdx)("li",{parentName:"ol"},"Operation (query/mutation/subscription) level errors, and"),(0,o.mdx)("li",{parentName:"ol"},"Field level errors")),(0,o.mdx)("h3",{id:"surfacing-mutation-level-errors"},"Surfacing mutation level errors"),(0,o.mdx)("p",null,"If you're surfacing an error in the mutation (eg the server rejects the entire mutation because it's invalid), as long as the error returned is considered a ",(0,o.mdx)("a",{parentName:"p",href:"https://www.internalfb.com/code/www/%5Bb5a08782893a%5D/flib/graphql/experimental/core/error/GraphQL2ErrorSeverity.php?lines=11"},(0,o.mdx)("inlineCode",{parentName:"a"},"CRITICAL"))," error, you can make use of the ",(0,o.mdx)("inlineCode",{parentName:"p"},"onError")," callback from ",(0,o.mdx)("inlineCode",{parentName:"p"},"useMutation")," to handle that error in whatever way you see fit for your use case."),(0,o.mdx)("p",null,"If you control the server resolver, the question you should ask is whether or not throwing a CRITICAL error is the correct behavior for the client. Note though that throwing a CRITICAL error means that Relay will no longer process the interaction, which may not always be what you want if you can still partially update your UI. For example, it's possible that the mutation errored, but still wrote some data to the database, in which case you might still want Relay to process the updated fields."),(0,o.mdx)("p",null,"In the non-CRITICAL case the mutation may have failed, but some data was successfully returned in the case of partial data and/or the error response if encoded in the schema. Relay will still process this data, update its store, as well as components relying on that data. That is not true for the case where you've returned a CRITICAL error."),(0,o.mdx)("h3",{id:"surfacing-field-level-errors"},"Surfacing field level errors"),(0,o.mdx)("p",null,"Field level errors from the server are generally recommended to be at the ",(0,o.mdx)("a",{parentName:"p",href:"https://www.internalfb.com/code/www/%5B9120ab8aa8a5%5D/flib/graphql/experimental/core/error/GraphQL2ErrorSeverity.php?lines=17"},(0,o.mdx)("inlineCode",{parentName:"a"},"ERROR"))," level, because your UI should still be able to process the other fields that were successfully returned. If you want to explicitly handle the field level error, then we still recommend ",(0,o.mdx)("a",{parentName:"p",href:"../../rendering/error-states/#accessing-errors-in-graphql-responses"},"modeling that")," in your schema.")),(0,o.mdx)(r.Z,{mdxType:"DocsRating"}))}f.isMDXComponent=!0}}]);