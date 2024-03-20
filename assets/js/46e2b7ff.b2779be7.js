"use strict";(self.webpackChunkrelay_website=self.webpackChunkrelay_website||[]).push([[63011],{3905:(e,n,t)=>{t.r(n),t.d(n,{MDXContext:()=>l,MDXProvider:()=>h,mdx:()=>g,useMDXComponents:()=>p,withMDXComponents:()=>m});var a=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(){return r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},r.apply(this,arguments)}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=a.createContext({}),m=function(e){return function(n){var t=p(n.components);return a.createElement(e,r({},n,{components:t}))}},p=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},h=function(e){var n=p(e.components);return a.createElement(l.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,l=d(e,["components","mdxType","originalType","parentName"]),m=p(t),h=o,u=m["".concat(i,".").concat(h)]||m[h]||c[h]||r;return t?a.createElement(u,s(s({ref:n},l),{},{components:t})):a.createElement(u,s({ref:n},l))}));function g(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=u;var s={};for(var d in n)hasOwnProperty.call(n,d)&&(s[d]=n[d]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<r;l++)i[l]=t[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},49121:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>m,contentTitle:()=>d,default:()=>c,frontMatter:()=>s,metadata:()=>l,toc:()=>p});var a=t(83117),o=t(80102),r=(t(67294),t(3905)),i=["components"],s={},d="Connections & Pagination",l={unversionedId:"tutorial/connections-pagination",id:"tutorial/connections-pagination",title:"Connections & Pagination",description:"In this section, we\u2019ll see how to handle collections of many items, including paginated lists and infinite scrolling. In Relay, paginated and infinite-scrolled lists are handled using an abstraction known as a Connection.",source:"@site/docs/tutorial/connections-pagination.md",sourceDirName:"tutorial",slug:"/tutorial/connections-pagination",permalink:"/docs/next/tutorial/connections-pagination",draft:!1,editUrl:"https://github.com/facebook/relay/tree/main/website/docs/tutorial/connections-pagination.md",tags:[],version:"current",lastUpdatedBy:"Evan Yeung",lastUpdatedAt:1710959400,formattedLastUpdatedAt:"Mar 20, 2024",frontMatter:{},sidebar:"docs",previous:{title:"Refetchable Fragments",permalink:"/docs/next/tutorial/refetchable-fragments"},next:{title:"Mutations & Updates",permalink:"/docs/next/tutorial/mutations-updates"}},m={},p=[{value:"Implementing \u201cLoad More Comments\u201d",id:"implementing-load-more-comments",level:2},{value:"Augmenting the Fragment",id:"augmenting-the-fragment",level:3},{value:"The usePaginationFragment hook",id:"the-usepaginationfragment-hook",level:3},{value:"Improving the Loading Experience with useTransition",id:"improving-the-loading-experience-with-usetransition",level:3},{value:"Infinite Scrolling Newsfeed Stories",id:"infinite-scrolling-newsfeed-stories",level:2},{value:"Step 1 \u2014 Select the Connection Field in the Query",id:"step-1--select-the-connection-field-in-the-query",level:3},{value:"Step 2 \u2014 Map over the Edges of the Connection",id:"step-2--map-over-the-edges-of-the-connection",level:3},{value:"Step 3 \u2014 Lower Newsfeed into a Fragment",id:"step-3--lower-newsfeed-into-a-fragment",level:3},{value:"Step 4 \u2014 Augment the Fragment for Pagination",id:"step-4--augment-the-fragment-for-pagination",level:3},{value:"Step 5 \u2014 Call usePaginationFragment",id:"step-5--call-usepaginationfragment",level:3},{value:"Step 6 \u2014 Paginate with a Scroll Trigger",id:"step-6--paginate-with-a-scroll-trigger",level:3},{value:"Summary",id:"summary",level:2}],h={toc:p};function c(e){var n=e.components,s=(0,o.Z)(e,i);return(0,r.mdx)("wrapper",(0,a.Z)({},h,s,{components:n,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"connections--pagination"},"Connections & Pagination"),(0,r.mdx)("p",null,"In this section, we\u2019ll see how to handle collections of many items, including paginated lists and infinite scrolling. In Relay, paginated and infinite-scrolled lists are handled using an abstraction known as a ",(0,r.mdx)("em",{parentName:"p"},"Connection"),"."),(0,r.mdx)("hr",null),(0,r.mdx)("p",null,"Relay does a lot of the work for you when handling paginated collections of items. But to do that, it relies on a specific convention for how those collections are modeled in your schema. This convention is powerful and flexible, and comes out of experience building many products with collections of items. Let\u2019s step through the design process for this schema convention so that we can understand why it works this way."),(0,r.mdx)("p",null,"There are three important points to understand:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Edges themselves have properties \u2014 for example, in a list of your friends, the date when you friended that person is a property of the edge between you, rather than of the other person per se. We handle this by creating ",(0,r.mdx)("em",{parentName:"li"},"nodes that represent the edges"),"."),(0,r.mdx)("li",{parentName:"ul"},"The list itself has properties, such as whether or not there is a next page available. We handle this with a node that represent the list itself as well as one for the current page."),(0,r.mdx)("li",{parentName:"ul"},"Pagination is done by ",(0,r.mdx)("em",{parentName:"li"},"cursors")," \u2014 opaque symbols that point to the next page of results \u2014 rather than offsets.")),(0,r.mdx)("p",null,"Imagine we want to show a list of the user\u2019s friends. At a high level, we imagine a graph where the viewer and their friends are each nodes. From the viewer to each friend node is an edge, and the edge itself has properties."),(0,r.mdx)("p",null,(0,r.mdx)("img",{alt:"Conceptual graph with properties on its edges",src:t(74551).Z,width:"1570",height:"894"})),(0,r.mdx)("p",null,"Now let\u2019s try to model this situation using GraphQL."),(0,r.mdx)("p",null,"In GraphQL, only nodes can have properties, not edges. So the first thing we\u2019ll do is represent the conceptual edge from you to your friend with its very own node."),(0,r.mdx)("p",null,(0,r.mdx)("img",{alt:"Edge properties modeled using nodes that represent the edges",src:t(88073).Z,width:"1466",height:"1076"})),(0,r.mdx)("p",null,"Now the properties of the edge are represented by a new type of node called a \u201c",(0,r.mdx)("inlineCode",{parentName:"p"},"FriendsEdge"),"\u201d."),(0,r.mdx)("p",null,"The GraphQL to query this would like this:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre"},"// XXX example only, not final code\nfragment FriendsFragment1 on Viewer {\n  friends {\n    since // a property of the edge\n    node {\n      name // a property of the friend itself\n    }\n  }\n}\n")),(0,r.mdx)("p",null,"Now we have a good place in the GraphQL schema to put edge-specific information such as the date when the edge was created (that is, the date you friended that person)."),(0,r.mdx)("hr",null),(0,r.mdx)("p",null,"Now consider what we would need to model in our schema in order to support pagination and infinite scrolling."),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"The client must be able to specify how large of a page it wants."),(0,r.mdx)("li",{parentName:"ul"},"The client must be informed as to whether any more pages are available, so that it can enable or disable the \u2018next page\u2019 button (or, for infinite scrolling, can stop making further requests)."),(0,r.mdx)("li",{parentName:"ul"},"The client must be able to ask for the next page after the one it already has.")),(0,r.mdx)("p",null,"How can we use the features of GraphQL to do these things? Specifying the page size is done with field arguments. In other words, instead of just ",(0,r.mdx)("inlineCode",{parentName:"p"},"friends")," the query will say ",(0,r.mdx)("inlineCode",{parentName:"p"},"friends(first: 3)"),", passing the page size an argument to the ",(0,r.mdx)("inlineCode",{parentName:"p"},"friends")," field."),(0,r.mdx)("p",null,"For the server to say whether there is a next page or not, we need to introduce a node in the graph that has information about the ",(0,r.mdx)("em",{parentName:"p"},"list of friends itself,")," just like we are introducing a node for each edge to store information about the edge itself. This new node is called a ",(0,r.mdx)("em",{parentName:"p"},"Connection"),"."),(0,r.mdx)("p",null,"The Connection node represents the connection itself between you and your friends. Metadata about the connection is stored there \u2014 for example, it could have a ",(0,r.mdx)("inlineCode",{parentName:"p"},"totalCount")," field that says how many friends you have. In addition, it always has two fields which represent the ",(0,r.mdx)("em",{parentName:"p"},"current")," page: a ",(0,r.mdx)("inlineCode",{parentName:"p"},"pageInfo")," field with metadata about the current page, such as whether there is another page available \u2014 and an ",(0,r.mdx)("inlineCode",{parentName:"p"},"edges")," field that points to the edges we saw before:"),(0,r.mdx)("p",null,(0,r.mdx)("img",{alt:"The full connection model with page info and edges",src:t(49701).Z,width:"1924",height:"1334"})),(0,r.mdx)("p",null,"Finally, we need a way to request the next page of results. You\u2019ll notice in the above diagram that the ",(0,r.mdx)("inlineCode",{parentName:"p"},"PageInfo")," node has a field called ",(0,r.mdx)("inlineCode",{parentName:"p"},"lastCursor"),".  This is an opaque token provided by the server that represents the position in the list of the last edge that we were given (the friend \u201cCharmaine\u201d). We can then pass this cursor back to the server in order to retrieve the next page."),(0,r.mdx)("p",null,"By passing the ",(0,r.mdx)("inlineCode",{parentName:"p"},"lastCursor")," value back to the server as an argument to the ",(0,r.mdx)("inlineCode",{parentName:"p"},"friends")," field, we can ask the server for friends that are ",(0,r.mdx)("em",{parentName:"p"},"after")," the ones we\u2019ve already retrieved:"),(0,r.mdx)("p",null,(0,r.mdx)("img",{alt:"After fetching the next page of results",src:t(51913).Z,width:"1926",height:"1336"})),(0,r.mdx)("p",null,"This overall scheme for modeling paginated lists is specified in detail in the ",(0,r.mdx)("a",{parentName:"p",href:"https://relay.dev/graphql/connections.htm"},"GraphQL Cursor Connections Spec"),". It is flexible for many different applications, and although Relay relies on this convention to handle pagination automatically, designing your schema this way is a good idea whether or not you use Relay."),(0,r.mdx)("p",null,"Now that we've stepped through the underlying model for Connections, let\u2019s turn our attention to actually using it to implement Comments for our Newsfeed stories."),(0,r.mdx)("hr",null),(0,r.mdx)("h2",{id:"implementing-load-more-comments"},"Implementing \u201cLoad More Comments\u201d"),(0,r.mdx)("p",null,"Take a look once more at the ",(0,r.mdx)("inlineCode",{parentName:"p"},"Story")," component. There\u2019s a ",(0,r.mdx)("inlineCode",{parentName:"p"},"StoryCommentsSection")," component that you can import and add to the bottom of ",(0,r.mdx)("inlineCode",{parentName:"p"},"Story"),":"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre"},"// change-line\nimport StoryCommentsSection from './StoryCommentsSection';\n\nfunction Story({story}) {\n  const data = useFragment(StoryFragment, story);\n  return (\n    <Card>\n      <Heading>{data.title}</Heading>\n      <PosterByline person={data.poster} />\n      <Timestamp time={data.posted_at} />\n      <Image image={data.image} />\n      <StorySummary summary={data.summary} />\n      // change-line\n      <StoryCommentsSection story={data} />\n    </Card>\n  );\n}\n")),(0,r.mdx)("p",null,"And add ",(0,r.mdx)("inlineCode",{parentName:"p"},"StoryCommentsSection"),"\u2019s fragment to ",(0,r.mdx)("inlineCode",{parentName:"p"},"Story"),"\u2019s fragment:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre"},"const StoryFragment = graphql`\n  fragment StoryFragment on Story {\n    // ... as before\n    // change-line\n    ...StoryCommentsSectionFragment\n  }\n`;\n")),(0,r.mdx)("p",null,'At this point, you should see up to three comments on each story. Some stories have more than three comments, and these will show a "Load more" button, although it isn\'t hooked up yet:'),(0,r.mdx)("p",null,(0,r.mdx)("img",{alt:"Screenshot of a story with the first three comments and a Load More button",src:t(34753).Z,width:"1182",height:"2016"})),(0,r.mdx)("p",null,"Now go to ",(0,r.mdx)("inlineCode",{parentName:"p"},"StoryCommentsSection")," and take a look:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre"},"const StoryCommentsSectionFragment = graphql`\n fragment StoryCommentsSectionFragment on Story {\n  // color1\n  comments(first: 3) {\n    edges {\n      node {\n        ...CommentFragment\n      }\n    }\n    pageInfo {\n      hasNextPage\n    }\n  }\n }\n`;\n\nfunction StoryCommentsSection({story}) {\n  const data = useFragment(StoryCommentsSectionFragment, story);\n  const onLoadMore = () => {/* TODO */};\n  return (\n    <>\n      {data.comments.edges.map(commentEdge =>\n        <Comment comment={commentEdge.node} />\n      )}\n      {data.comments.pageInfo.hasNextPage && (\n        <LoadMoreCommentsButton onClick={onLoadMore} />\n      )}\n    </>\n  );\n}\n")),(0,r.mdx)("p",null,"Here we see that ",(0,r.mdx)("inlineCode",{parentName:"p"},"StoryCommentsSection")," is selecting the ",(0,r.mdx)("span",{className:"color1"},"first three comments")," for each story using the Connection schema convention: the ",(0,r.mdx)("inlineCode",{parentName:"p"},"comments")," field accepts the page size as an argument, and for each comment there is an ",(0,r.mdx)("inlineCode",{parentName:"p"},"edge")," and within that a ",(0,r.mdx)("inlineCode",{parentName:"p"},"node")," containing the actual comment data \u2014 we\u2019re spreading in ",(0,r.mdx)("inlineCode",{parentName:"p"},"CommentFragment")," here to retrieve the data needed to show an individual comment with the ",(0,r.mdx)("inlineCode",{parentName:"p"},"Comment")," component. It also uses the ",(0,r.mdx)("inlineCode",{parentName:"p"},"pageInfo")," field of the connection to decide whether to show a \u201cLoad More\u201d button."),(0,r.mdx)("p",null,"Our task then is to make the \u201cLoad More\u201d button actually load an additional page of comments. Relay handles the gritty details for us, but we do have to supply a few steps to set it up."),(0,r.mdx)("h3",{id:"augmenting-the-fragment"},"Augmenting the Fragment"),(0,r.mdx)("p",null,"Before we modify our component, the fragment itself needs three extra pieces of information. First, we need the fragment to accept the page size and cursor as fragment arguments rather than being hard-coded:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre"},'const StoryCommentsSectionFragment = graphql`\n  fragment StoryCommentsSectionFragment on Story\n    // change\n    @argumentDefinitions(\n      cursor: { type: "String" }\n      count: { type: "Int", defaultValue: 3 }\n    )\n    // end-change\n  {\n    // change-line\n    comments(after: $cursor, first: $count) {\n      edges {\n        node {\n          ...CommentFragment\n        }\n      }\n      pageInfo {\n        hasNextPage\n      }\n    }\n  }\n`;\n')),(0,r.mdx)("p",null,"Next, we need to make the fragment ",(0,r.mdx)("a",{parentName:"p",href:"../refetchable-fragments"},"refetchable"),", so that Relay will be able to fetch it again with new values for the arguments \u2014 namely, a new cursor for the ",(0,r.mdx)("inlineCode",{parentName:"p"},"$cursor")," argument:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre"},'const StoryCommentsSectionFragment = graphql`\n  fragment StoryCommentsSectionFragment on Story\n    // change-line\n    @refetchable(queryName: "StoryCommentsSectionPaginationQuery")\n    @argumentDefinitions(\n    ... as before\n`;\n')),(0,r.mdx)("p",null,"Now there\u2019s just one more change we need to make to the fragment. Relay needs to know ",(0,r.mdx)("em",{parentName:"p"},"which field")," within the fragment represents the Connection that we\u2019re going to paginate over. To do that, we mark it with a ",(0,r.mdx)("inlineCode",{parentName:"p"},"@connection")," directive:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre"},'const StoryCommentsSectionFragment = graphql`\n  fragment StoryCommentsSectionFragment on Story\n    @refetchable(queryName: "StoryCommentsSectionPaginationQuery")\n    @argumentDefinitions(\n      cursor: { type: "String" }\n      count: { type: "Int", defaultValue: 3 }\n    )\n  {\n    comments(after: $cursor, first: $count)\n      // change-line\n      @connection(key: "StoryCommentsSectionFragment_comments")\n    {\n      edges {\n        node {\n          ...CommentFragment\n        }\n      }\n      pageInfo {\n        hasNextPage\n      }\n    }\n  }\n`;\n')),(0,r.mdx)("p",null,"The ",(0,r.mdx)("inlineCode",{parentName:"p"},"@connection")," directive requires a ",(0,r.mdx)("inlineCode",{parentName:"p"},"key")," argument which must be a unique string \u2014 here formed from the fragment name and field name. This key is used when editing the connection\u2019s contents during mutations, as we\u2019ll see in the next chapter."),(0,r.mdx)("h3",{id:"the-usepaginationfragment-hook"},"The usePaginationFragment hook"),(0,r.mdx)("p",null,"Now that we\u2019ve got the fragment all souped up, we can modify our component to implement the Load More button."),(0,r.mdx)("p",null,"Take these two lines at the top of the ",(0,r.mdx)("inlineCode",{parentName:"p"},"StoryCommentsSection")," component:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre"},"const data = useFragment(StoryCommentsSectionFragment, story);\nconst onLoadMore = () => {/* TODO */};\n")),(0,r.mdx)("p",null,"and replace them with:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre"},"const {data, loadNext} = usePaginationFragment(StoryCommentsSectionFragment, story);\nconst onLoadMore = () => loadNext(3);\n")),(0,r.mdx)("p",null,"Now the Load More button should cause another three comments to be loaded."),(0,r.mdx)("h3",{id:"improving-the-loading-experience-with-usetransition"},"Improving the Loading Experience with useTransition"),(0,r.mdx)("p",null,"As it stands, there\u2019s no user feedback when you click the \u201cLoad More\u201d button until the new comments have finished loading and then appear. Every user action should result in immediate feedback, so let\u2019s show a spinner while the new data is loading \u2014 but without hiding the existing UI."),(0,r.mdx)("p",null,"To do that, we need to wrap our call to ",(0,r.mdx)("inlineCode",{parentName:"p"},"loadNext")," inside a React transition. Here\u2019s the change\u2019s we need to make:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre"},"function StoryCommentsSection({story}) {\n  // change-line\n  const [isPending, startTransition] = useTransition();\n  const {data, loadNext} = usePaginationFragment(StoryCommentsSectionFragment, story);\n  // change\n  const onLoadMore = () => startTransition(() => {\n    loadNext(3);\n  });\n  // end-change\n  return (\n    <>\n      {data.comments.edges.map(commentEdge =>\n        <Comment comment={commentEdge.node} />\n      )}\n      {data.comments.pageInfo.hasNextPage && (\n        <LoadMoreCommentsButton\n          onClick={onLoadMore}\n            // change-line\n          disabled={isPending}\n        />\n      )}\n      // change-line\n      {isPending && <CommentsLoadingSpinner />}\n    </>\n  );\n}\n")),(0,r.mdx)("p",null,"Every user action with results that aren\u2019t immediate should be wrapped in a React transition. This allows React to prioritize different updates: for example, if when the data becomes available and React is rendering the new comments, the user clicks on another tab to navigate to a different page, React can interrupt rendering the comments in order to render the new page that the user wanted."),(0,r.mdx)("hr",null),(0,r.mdx)("h2",{id:"infinite-scrolling-newsfeed-stories"},"Infinite Scrolling Newsfeed Stories"),(0,r.mdx)("p",null,"Let\u2019s use what we\u2019ve learned about pagination to create an infinite scrolling newsfeed.  The Newsfeed will be pretty much the same as loading more comments, except that ",(0,r.mdx)("inlineCode",{parentName:"p"},"loadNext")," will be triggered automatically when the user scrolls to the bottom of the page, instead of by pressing a button."),(0,r.mdx)("h3",{id:"step-1--select-the-connection-field-in-the-query"},"Step 1 \u2014 Select the Connection Field in the Query"),(0,r.mdx)("p",null,"Right now our app uses the ",(0,r.mdx)("inlineCode",{parentName:"p"},"topStories")," root field to fetch a simple array of the top 3 stories. The schema also provides a ",(0,r.mdx)("inlineCode",{parentName:"p"},"newsfeedStories")," field on ",(0,r.mdx)("inlineCode",{parentName:"p"},"Viewer")," which is a Connection. Let\u2019s modify the ",(0,r.mdx)("inlineCode",{parentName:"p"},"Newsfeed")," component to use this new field. Take a look once more at ",(0,r.mdx)("inlineCode",{parentName:"p"},"Newsfeed.tsx")," \u2014 the GraphQL query at the top should look like this:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre"},"const NewsfeedQuery = graphql`\n  query NewsfeedQuery {\n    topStories {\n      id\n      ...StoryFragment\n    }\n  }\n`;\n")),(0,r.mdx)("p",null,"Go ahead and replace it with this:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre"},"const NewsfeedQuery = graphql`\n  query NewsfeedQuery {\n    viewer {\n      newsfeedStories(first: 3) {\n        edges {\n          node {\n            id\n            ...StoryFragment\n          }\n        }\n      }\n    }\n  }\n`;\n")),(0,r.mdx)("p",null,"Here we\u2019ve replaced ",(0,r.mdx)("inlineCode",{parentName:"p"},"topStories")," with ",(0,r.mdx)("inlineCode",{parentName:"p"},"viewer"),"\u2019s ",(0,r.mdx)("inlineCode",{parentName:"p"},"newsfeedStories"),", adding a ",(0,r.mdx)("inlineCode",{parentName:"p"},"first")," argument so that we fetch the first 3 stories initially. Within that we\u2019ve selected the ",(0,r.mdx)("inlineCode",{parentName:"p"},"edge")," and then the ",(0,r.mdx)("inlineCode",{parentName:"p"},"node"),", which is a ",(0,r.mdx)("inlineCode",{parentName:"p"},"Story")," node so we can spread the same ",(0,r.mdx)("inlineCode",{parentName:"p"},"StoryFragment")," from before. We also select ",(0,r.mdx)("inlineCode",{parentName:"p"},"id")," so that we can use it as a React ",(0,r.mdx)("inlineCode",{parentName:"p"},"key")," attribute."),(0,r.mdx)("admonition",{type:"tip"},(0,r.mdx)("p",{parentName:"admonition"},"Although we put the ",(0,r.mdx)("inlineCode",{parentName:"p"},"topStory")," and ",(0,r.mdx)("inlineCode",{parentName:"p"},"topStories")," fields at the top level of ",(0,r.mdx)("inlineCode",{parentName:"p"},"Query")," for simplicity, it\u2019s conventional to put fields related to the person who\u2019s looking at the page or app under a field called ",(0,r.mdx)("inlineCode",{parentName:"p"},"viewer"),". We\u2019ll switch to that convention now that we\u2019re using the field as it would be in a real app.")),(0,r.mdx)("h3",{id:"step-2--map-over-the-edges-of-the-connection"},"Step 2 \u2014 Map over the Edges of the Connection"),(0,r.mdx)("p",null,"We need to modify the Newsfeed component to map over the edges and render each node:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre"},"function Newsfeed() {\n  const data = useLazyLoadQuery(NewsfeedQuery, {});\n  // change-line\n  const storyEdges = data.viewer.newsfeedStories.edges;\n  return (\n    <>\n      {storyEdges.map(storyEdge =>\n        <Story key={storyEdge.node.id} story={storyEdge.node} />\n      )}\n    </>\n  );\n}\n")),(0,r.mdx)("h3",{id:"step-3--lower-newsfeed-into-a-fragment"},"Step 3 \u2014 Lower Newsfeed into a Fragment"),(0,r.mdx)("p",null,"Relay\u2019s pagination features only work with fragments, not entire queries. This is because, although we\u2019re directly issuing a query in this component in this simple example app, in real applications the query is generally issued at some high-level routing component, which would rarely be the same component that\u2019s showing a paginated list."),(0,r.mdx)("p",null,"To get this to work, we just need to separate out the contents ",(0,r.mdx)("inlineCode",{parentName:"p"},"NewsfeedQuery")," into a fragment, which we\u2019ll call ",(0,r.mdx)("inlineCode",{parentName:"p"},"NewsfeedContentsFragment"),":"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre"},"const NewsfeedQuery = graphql`\n  query NewsfeedQuery {\n    ...NewsfeedContentsFragment\n  }\n`;\n\nconst NewsfeedContentsFragment = graphql`\n  fragment NewsfeedContentsFragment on Query {\n    viewer {\n      newsfeedStories {\n        edges {\n          node {\n            id\n            ...StoryFragment\n          }\n        }\n      }\n    }\n  }\n`;\n")),(0,r.mdx)("p",null,"This is a good time to mention that every GraphQL schema contains a type called ",(0,r.mdx)("inlineCode",{parentName:"p"},"Query")," that represents the top-level fields available to queries. By defining a fragment ",(0,r.mdx)("inlineCode",{parentName:"p"},"on Query"),", we can spread it directly into the top level."),(0,r.mdx)("p",null,"Within ",(0,r.mdx)("inlineCode",{parentName:"p"},"Newsfeed"),", we can call both ",(0,r.mdx)("inlineCode",{parentName:"p"},"useLazyLoadQuery")," and ",(0,r.mdx)("inlineCode",{parentName:"p"},"useFragment"),", though in real life these would generally be in different components:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre"},"export default function Newsfeed() {\n  // change-line\n  const queryData = useLazyLoadQuery(NewsfeedQuery, {});\n  // change-line\n  const data = useFragment(NewsfeedContentsFragment, queryData);\n  const storyEdges = data.newsfeedStories.edges;\n  ...\n}\n")),(0,r.mdx)("h3",{id:"step-4--augment-the-fragment-for-pagination"},"Step 4 \u2014 Augment the Fragment for Pagination"),(0,r.mdx)("p",null,"Now that we\u2019re using a Connection field for the stories and have ourselves a fragment, we can make the changes to the fragment that we need in order to support pagination. These are the same as in the last example. We need to:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Add fragment arguments for the page size and cursor (",(0,r.mdx)("inlineCode",{parentName:"li"},"first")," and ",(0,r.mdx)("inlineCode",{parentName:"li"},"after"),")."),(0,r.mdx)("li",{parentName:"ul"},"Pass those arguments in to the ",(0,r.mdx)("inlineCode",{parentName:"li"},"newsfeedStories")," field as field arguments."),(0,r.mdx)("li",{parentName:"ul"},"Mark the fragment as ",(0,r.mdx)("inlineCode",{parentName:"li"},"@refetchable"),"."),(0,r.mdx)("li",{parentName:"ul"},"Mark the ",(0,r.mdx)("inlineCode",{parentName:"li"},"newsfeedStories")," field with ",(0,r.mdx)("inlineCode",{parentName:"li"},"@connection"),".")),(0,r.mdx)("p",null,"You should end up with something like this:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre"},'const NewsfeedContentsFragment = graphql`\n  fragment NewsfeedContentsFragment on Query\n    @argumentDefinitions (\n      cursor: { type: "String" }\n      count: { type: "Int", defaultValue: 3 }\n    )\n    @refetchable(queryName: "NewsfeedContentsRefetchQuery")\n  {\n    viewer {\n      newsfeedStories(after: $cursor, first: $count)\n        @connection(key: "NewsfeedContentsFragment_newsfeedStories")\n      {\n        edges {\n          node {\n            id\n            ...StoryFragment\n          }\n        }\n      }\n    }\n  }\n`;\n')),(0,r.mdx)("h3",{id:"step-5--call-usepaginationfragment"},"Step 5 \u2014 Call usePaginationFragment"),(0,r.mdx)("p",null,"Now we need to modify the ",(0,r.mdx)("inlineCode",{parentName:"p"},"NewsfeedContents")," component to call ",(0,r.mdx)("inlineCode",{parentName:"p"},"usePaginationFragment:")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre"},"function NewsfeedContents({viewer}) {\n  // change-line\n  const {data, loadNext} = usePaginationFragment(NewsfeedFragment, viewer);\n  const storyEdges = data.newsfeedStories.edges;\n  return (\n    <>\n      {storyEdges.map(storyEdge =>\n        <Story key={storyEdge.node.id} story={storyEdge.node} />\n      )}\n    </>\n  );\n}\n")),(0,r.mdx)("h3",{id:"step-6--paginate-with-a-scroll-trigger"},"Step 6 \u2014 Paginate with a Scroll Trigger"),(0,r.mdx)("p",null,"We\u2019ve prepared a component called ",(0,r.mdx)("inlineCode",{parentName:"p"},"InfiniteScrollTrigger")," that detects when the bottom of the page is reached \u2014 we can use this to call ",(0,r.mdx)("inlineCode",{parentName:"p"},"loadNext")," at the appropriate time. It needs to know whether more pages exist and whether we\u2019re currently loading the next page \u2014 we can retrieve these from the return value of ",(0,r.mdx)("inlineCode",{parentName:"p"},"usePaginationFragment"),":"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre"},"function NewsfeedContents({query}) {\n  const {\n    data,\n    loadNext,\n    // change-line\n    hasNext,\n    // change-line\n    isLoadingNext,\n  } = usePaginationFragment(NewsfeedContentsFragment, query);\n  // change\n  function onEndReached() {\n    loadNext(3);\n  }\n  // end-change\n  const storyEdges = data.viewer.newsfeedStories.edges;\n  return (\n    <>\n      {storyEdges.map(storyEdge =>\n        <Story key={storyEdge.node.id} story={storyEdge.node} />\n      )}\n      // change\n      <InfiniteScrollTrigger\n        onEndReached={onEndReached}\n        hasNext={hasNext}\n        isLoadingNext={isLoadingNext}\n      />\n      // end-change\n    </>\n  );\n}\n")),(0,r.mdx)("p",null,"We should now be able to scroll to the bottom of the page and see more stories loading. Feels like a real newsfeed app!"),(0,r.mdx)("hr",null),(0,r.mdx)("h2",{id:"summary"},"Summary"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Connections are a schema convention that Relay relies on to model the behavior of paginatable lists."),(0,r.mdx)("li",{parentName:"ul"},"It's generally a good idea to use Connections in your schema rather than simple lists. This gives you the flexibility to paginate if you need to.")),(0,r.mdx)("p",null,"Next, we'll finally look at how to update data on the server. Connections will play a role in that as well, as we'll see how to append a newly-created node to an existing Connection."))}c.isMDXComponent=!0},34753:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/connections-comments-initial-screenshot-14ed0e7a93720ef62d79f7528a0f5ea8.png"},74551:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/connections-conceptual-graph-a88c591f79c81af5d67b28122e17c581.png"},88073:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/connections-edge-nodes-63a89a1f08749046137894e4b24774cc.png"},51913:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/connections-full-model-next-page-88f27142830f48b2f0184ebcd0e9ad8d.png"},49701:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/connections-full-model-13e2ea59a6271992070d77ae4ae5e9b6.png"}}]);