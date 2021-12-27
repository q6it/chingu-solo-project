(this["webpackJsonpchingu-solo-project"]=this["webpackJsonpchingu-solo-project"]||[]).push([[0],{21:function(e,t,n){"use strict";(function(e){var r=n(0),a=n.n(r),s=n(1),c=a.a.forwardRef((function(e,t){var n=e.title,r=e.type,a=e.name,c=e.id,i=e.value,o=e.placeholder,l=e.autoComplete,u=e.className,d=e.onChange;return Object(s.jsxs)("div",{children:[Object(s.jsx)("label",{htmlFor:a,className:"block text-sm font-medium text-gray-700",children:n}),Object(s.jsx)("div",{className:u,children:Object(s.jsx)("input",{type:r,name:a,id:c,className:"shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md",placeholder:o,value:i,onChange:d,autoComplete:l,ref:t})})]})}));c.propTypes={title:e.string,type:e.string,name:e.string,id:e.string,placeholder:e.string,autoComplete:e.string,className:e.string,value:e.oneOfType([e.string,e.number]),onChange:e.func.isRequired},c.defaultProps={title:"",type:"text",name:"",id:"",placeholder:"",value:void 0,autoComplete:"off",className:""},t.a=c}).call(this,n(30))},91:function(e,t,n){},92:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),s=n(38),c=n.n(s),i=n(27),o=n(22),l=n(5),u=n(15),d=n(2),m=n.n(d),b=n(31),j=n.n(b),f="https://chingu-be.herokuapp.com",x=function(){var e=Object(l.a)(m.a.mark((function e(t){var n,r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.a.get("".concat(f,"/v1/items/all"),{headers:{Authorization:"Bearer ".concat(t)}});case 2:return n=e.sent,r=n.data.items,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=Object(l.a)(m.a.mark((function e(t,n){var r,a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.a.post("".concat(f,"/v1/auth/login"),{email:t,password:n});case 2:return r=e.sent,a=r.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),p=function(){var e=Object(l.a)(m.a.mark((function e(t){var n,r,a,s,c;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.email,r=t.password,a=t.name,e.next=3,j.a.post("".concat(f,"/v1/auth/register"),{email:n,password:r,name:a});case 3:return s=e.sent,c=s.data,e.abrupt("return",c.message);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),O=function(){var e=Object(l.a)(m.a.mark((function e(t,n){var r,a,s,c,i,o;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.title,a=t.body,s=t.id,c=t.userId,e.next=3,j.a.post("".concat(f,"/v1/items/save"),{title:r,body:a,id:s,userId:c},{headers:{Authorization:"Bearer ".concat(n)}});case 3:return i=e.sent,o=i.data,e.abrupt("return",o.message);case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),g=function(){var e=Object(l.a)(m.a.mark((function e(t,n){var r,a,s,c,i,o;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.title,a=t.body,s=t.id,c=t.userId,e.next=3,j.a.put("".concat(f,"/v1/items/update"),{title:r,body:a,id:s,userId:c},{headers:{Authorization:"Bearer ".concat(n)}});case 3:return i=e.sent,o=i.data,e.abrupt("return",o.message);case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),v=function(){var e=Object(l.a)(m.a.mark((function e(t,n){var r,a,s,c;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.id,a=t.userId,e.next=3,j.a.delete("".concat(f,"/v1/items/delete"),{headers:{Authorization:"Bearer ".concat(n)},data:{id:r,userId:a}});case 3:return s=e.sent,c=s.data,e.abrupt("return",c.message);case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),y=n(28),w=Object(y.b)("authentication/login"),N=Object(y.b)("authentication/logout"),k={name:null,token:null,email:null},C=Object(y.c)({name:"authenticate",initialState:k,extraReducers:function(e){e.addCase(w,(function(e,t){var n=t.payload;n.name&&(e.name=n.name,e.email=n.email),n.token&&(e.token=n.token)})).addCase(N,(function(){return k}))}}).reducer,S=n(1),I=Object(r.createContext)();function P(e){var t=e.children,n=function(){var e=Object(o.b)(),t=Object(r.useState)(null),n=Object(u.a)(t,2),a=n[0],s=n[1],c=function(){var t=Object(l.a)(m.a.mark((function t(n,r){var a,c,i,o;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h(n,r);case 2:return a=t.sent,c=a.email,i=a.name,o=a.refreshToken,e(w({email:c,name:i,token:o})),s(a),t.abrupt("return",a);case 7:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}();return Object(r.useEffect)((function(){}),[]),{signIn:c,signOut:function(){s(null)},user:a}}();return Object(S.jsx)(I.Provider,{value:n,children:t})}var B=function(){return Object(r.useContext)(I)},E=n(10),F=n(4),T=n(29),A=n(24),q=n.n(A),R=n(21),z=function(){var e=Object(E.g)(),t=B(),n=Object(T.a)(),r=n.register,a=n.handleSubmit,s=function(){var n=Object(l.a)(m.a.mark((function n(r){var a,s,c;return m.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a=r.email,s=r.password,n.prev=1,n.next=4,t.signIn(a,s);case 4:(c=n.sent).refreshToken&&(q.a.set("token",c.refreshToken),e.push("/")),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(1),console.error(n.t0);case 11:case"end":return n.stop()}}),n,null,[[1,8]])})));return function(e){return n.apply(this,arguments)}}();return Object(S.jsx)("div",{className:"h-screen w-screen",children:Object(S.jsxs)("div",{className:"flex justify-center items-center flex-col pt-20 m-auto",children:[Object(S.jsx)("h1",{children:"Login"}),Object(S.jsxs)("form",{onSubmit:a(s),className:"p-8 flex justify-center items-center flex-col",children:[Object(S.jsx)("div",{children:Object(S.jsx)(R.a,Object(F.a)({id:"email",title:"Email",type:"email",className:"mt-2",placeholder:"example@site.com",required:!0},r("email")))}),Object(S.jsx)("div",{className:"mt-4",children:Object(S.jsx)(R.a,Object(F.a)(Object(F.a)({id:"password",title:"Password",type:"password",className:"mt-2",placeholder:"type password here"},r("password")),{},{required:!0}))}),Object(S.jsx)("button",{type:"submit",className:"mt-8 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",children:"Login"})]}),Object(S.jsxs)("p",{className:"text-sm italic text-right text-purple-600",children:["Not a member yet?"," ",Object(S.jsx)(i.b,{to:"/register",className:"text-primary-500 underline hover:text-blue-400",children:"Register!"})]})]})})},L=function(){var e=Object(T.a)(),t=e.handleSubmit,n=e.register,r=Object(E.g)(),a=function(){var e=Object(l.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p(t);case 3:r.push("/login"),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.error(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}();return Object(S.jsx)("div",{className:"h-screen w-screen",children:Object(S.jsxs)("div",{className:"flex justify-center items-center flex-col pt-20 m-auto",children:[Object(S.jsx)("h1",{children:"Account registration"}),Object(S.jsxs)("form",{onSubmit:t(a),className:"p-8 flex justify-center items-center flex-col",autoComplete:"off",children:[Object(S.jsx)(R.a,Object(F.a)({id:"name",title:"Name",type:"text",className:"mt-2",placeholder:"Your name",required:!0},n("name"))),Object(S.jsx)("div",{className:"mt-4",children:Object(S.jsx)(R.a,Object(F.a)({id:"email",title:"Email",type:"email",className:"mt-2",placeholder:"example@site.com",required:!0},n("email")))}),Object(S.jsx)("div",{className:"mt-4",children:Object(S.jsx)(R.a,Object(F.a)(Object(F.a)({id:"password",title:"Password",type:"password",className:"mt-2",placeholder:"type password here",autoComplete:"off"},n("password")),{},{required:!0}))}),Object(S.jsx)("button",{type:"submit",className:"mt-8 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",children:"Register"})]})]})})},D=n(57),J=["children"],W=function(e){var t=e.children,n=Object(D.a)(e,J),r=q.a.get("token")||null;return Object(S.jsx)(E.b,Object(F.a)(Object(F.a)({},n),{},{render:function(){return r?t:Object(S.jsx)(E.a,{to:{pathname:"/login"}})}}))},M=n(9),U=n(94),V=n(95),Y=n(96),G=n(46),H=n(39),K=Object(H.a)((function(e){return e.authentication}),(function(e){return e})),Q=function(e){var t=e.post,n=e.posts,a=e.setPosts,s=e.setPostEdit,c=Object(T.a)(),i=c.register,d=c.handleSubmit,b=Object(o.c)(K),j=b.token,f=b.email,x=Object(r.useState)(t),h=Object(u.a)(x,2),p=h[0],O=h[1],v=function(){var e=Object(l.a)(m.a.mark((function e(r){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g(Object(F.a)(Object(F.a)({},r),{},{id:t.id,userId:f}),j);case 3:a([].concat(Object(M.a)(n),[p])),s(!1),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error("\ud83d\ude80 ~ file: EditForm.jsx ~ line 25 ~ onSubmit ~ error",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}();return Object(S.jsxs)("form",{onSubmit:d(v),children:[Object(S.jsx)(R.a,Object(F.a)(Object(F.a)({id:"title",title:"Title",type:"text",className:"mt-1"},i("title")),{},{value:p.title,onChange:function(e){return function(e){O(Object(F.a)(Object(F.a)({},p),{},{title:e.target.value}))}(e)}})),Object(S.jsxs)("div",{className:"mt-3",children:[Object(S.jsx)("label",{htmlFor:"body",className:"block text-sm font-medium text-gray-700",children:"Body"}),Object(S.jsx)("textarea",Object(F.a)(Object(F.a)({rows:4,name:"body",id:"body",className:"shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"},i("body")),{},{value:p.body,onChange:function(e){return function(e){O(Object(F.a)(Object(F.a)({},p),{},{body:e.target.value}))}(e)}}))]}),Object(S.jsx)("div",{className:"mt-3",children:Object(S.jsx)("button",{type:"submit",className:"px-3 py-1 border border-gray-300 shadow-sm font-medium rounded text-gray-700 bg-green-400 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",children:"Done"})})]})},X=function(e){var t=e.posts,n=e.setPosts,a=Object(r.useState)({id:null,edit:!1}),s=Object(u.a)(a,2),c=s[0],i=s[1],d=Object(o.c)(K).email,b=q.a.get("token"),j=function(){var e=Object(l.a)(m.a.mark((function e(r){var a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=r.id,e.next=3,v({id:a,userId:d},b);case 3:n(Object(M.a)(t.filter((function(e){return e.id!==a}))));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=Object(l.a)(m.a.mark((function e(t){var n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.id,e.next=3,i({id:n,edit:!c.edit});case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(S.jsx)("div",{children:Object(S.jsx)("div",{className:"mt-3 divide-y-2 divide-gray-800",children:Object(S.jsx)("ul",{children:t.map((function(e){return Object(S.jsxs)("li",{className:"py-5",children:[c.id===e.id&&c.edit?Object(S.jsx)(Q,{post:e,posts:t,setPosts:n,setPostEdit:i}):Object(S.jsxs)("div",{className:"relative focus-within:ring-2 focus-within:ring-indigo-500",children:[Object(S.jsx)("h3",{className:"text-sm font-semibold text-gray-800",children:Object(S.jsxs)("button",{type:"button",className:"hover:underline focus:outline-none",children:[Object(S.jsx)("span",{className:"absolute inset-0","aria-hidden":"true"}),e.title]})}),Object(S.jsx)("p",{className:"mt-1 text-sm text-gray-600 line-clamp-2",children:e.body})]}),c.edit||Object(S.jsxs)("div",{className:"flex mt-2",children:[Object(S.jsx)("div",{children:Object(S.jsx)("button",{type:"button",className:"px-3 border border-transparent font-medium rounded shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-5000",onClick:function(){return f(e)},children:"Edit"})}),Object(S.jsx)("div",{className:"ml-8",children:Object(S.jsx)("button",{type:"button",className:"px-3 border border-transparent font-medium rounded shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-5000",onClick:function(){return j(e)},children:"Delete"})})]})]},e.id)}))})})})};function Z(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter(Boolean).join(" ")}function $(){var e=Object(r.useState)(10),t=Object(u.a)(e,2),n=t[0],a=t[1],s=Object(r.useState)([]),c=Object(u.a)(s,2),i=c[0],d=c[1],b=B(),j=Object(T.a)(),f=j.register,h=j.handleSubmit,p=Object(E.g)(),g=Object(o.c)(K),v=q.a.get("token");Object(r.useEffect)((function(){Object(l.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x(v);case 2:t=e.sent,d(t);case 4:case"end":return e.stop()}}),e)})))()}),[]),Object(r.useEffect)((function(){g.name||p.push("/login")}),[]);var y=function(){var e=Object(l.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a(n+1),e.prev=1,e.next=4,O(Object(F.a)(Object(F.a)({},t),{},{id:n,userId:g.email}),v);case 4:d([].concat(Object(M.a)(i),[Object(F.a)(Object(F.a)({},t),{},{id:n,userId:g.email})])),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t){return e.apply(this,arguments)}}();return Object(S.jsx)(S.Fragment,{children:g&&Object(S.jsxs)("div",{className:"min-h-full",children:[Object(S.jsx)(U.a,{as:"nav",className:"bg-white border-b border-gray-200 p-1",children:function(e){var t=e.open;return Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:Object(S.jsxs)("div",{className:"flex justify-between h-16",children:[Object(S.jsx)("div",{className:"flex",children:Object(S.jsxs)("div",{className:"flex-shrink-0 flex items-center",children:[Object(S.jsx)("img",{className:"block lg:hidden h-12 w-auto",src:"https://cdn.cdnlogo.com/logos/e/39/ethereum.svg",alt:"Workflow"}),Object(S.jsx)("img",{className:"hidden lg:block h-16 w-auto",src:"https://cdn.cdnlogo.com/logos/e/39/ethereum.svg",alt:"Workflow"})]})}),Object(S.jsx)("div",{className:"hidden sm:ml-6 sm:flex sm:items-center",children:Object(S.jsxs)(V.a,{as:"div",className:"ml-3 relative",children:[Object(S.jsx)("div",{children:Object(S.jsxs)(V.a.Button,{className:"max-w-xs bg-white flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",children:[Object(S.jsx)("span",{className:"sr-only",children:"Open user menu"}),g.name]})}),Object(S.jsx)(Y.a,{as:r.Fragment,enter:"transition ease-out duration-200",enterFrom:"transform opacity-0 scale-95",enterTo:"transform opacity-100 scale-100",leave:"transition ease-in duration-75",leaveFrom:"transform opacity-100 scale-100",leaveTo:"transform opacity-0 scale-95",children:Object(S.jsx)(V.a.Items,{className:"origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none",children:Object(S.jsx)(V.a.Item,{children:function(e){var t=e.active;return Object(S.jsx)("button",{type:"button",className:Z(t?"bg-gray-100":"","block px-4 py-2 text-sm text-gray-700 w-full"),onClick:function(){b.signOut(),q.a.remove("token"),p.push("/login")},children:"Log out"})}})})})]})}),Object(S.jsx)("div",{className:"-mr-2 flex items-center sm:hidden",children:Object(S.jsxs)(U.a.Button,{className:"bg-white inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",children:[Object(S.jsx)("span",{className:"sr-only",children:"Open main menu"}),t?Object(S.jsx)(G.b,{className:"block h-6 w-6","aria-hidden":"true"}):Object(S.jsx)(G.a,{className:"block h-6 w-6","aria-hidden":"true"})]})})]})}),Object(S.jsx)(U.a.Panel,{className:"sm:hidden",children:Object(S.jsxs)("div",{className:"pt-4 pb-3 border-t border-gray-200",children:[Object(S.jsxs)("div",{className:"flex items-center px-4",children:[Object(S.jsx)("div",{className:"flex-shrink-0",children:Object(S.jsx)("img",{className:"h-10 w-10 rounded-full",src:g.imageUrl,alt:""})}),Object(S.jsxs)("div",{className:"ml-3",children:[Object(S.jsx)("div",{className:"text-base font-medium text-gray-800",children:g.name}),Object(S.jsx)("div",{className:"text-sm font-medium text-gray-500",children:g.email})]})]}),Object(S.jsx)("div",{className:"mt-3 space-y-1",children:Object(S.jsx)(U.a.Button,{children:function(e){var t=e.active;return Object(S.jsx)("button",{type:"button",className:Z(t?"bg-gray-100":"","block px-4 py-2 text-sm text-gray-700 w-full"),onClick:function(){},children:"Log out"})}})})]})})]})}}),Object(S.jsxs)("div",{className:"flex flex-col m-auto justify-center py-10",children:[Object(S.jsx)("header",{children:Object(S.jsx)("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:Object(S.jsx)("h1",{className:"text-3xl font-bold leading-tight text-gray-900",children:"Postboard"})})}),Object(S.jsx)("main",{children:Object(S.jsx)("div",{className:"container m-auto ",children:Object(S.jsx)("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8",children:Object(S.jsx)("div",{className:"px-4 py-8 sm:px-0",children:Object(S.jsxs)("div",{className:"border-4 border-collapse border-gray-200 rounded-lg h-auto p-5",children:[Object(S.jsxs)("form",{onSubmit:h(y),children:[Object(S.jsx)(R.a,Object(F.a)({id:"title",title:"Title",type:"text",className:"mt-1"},f("title"))),Object(S.jsxs)("div",{className:"mt-3",children:[Object(S.jsx)("label",{htmlFor:"body",className:"block text-sm font-medium text-gray-700",children:"Body"}),Object(S.jsx)("textarea",Object(F.a)({rows:4,name:"body",id:"body",className:"shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md",defaultValue:""},f("body")))]}),Object(S.jsx)("div",{className:"mt-6 flex justify-center items-center ",children:Object(S.jsx)("button",{type:"submit",className:"inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",children:"Add post"})})]}),Object(S.jsx)(X,{posts:i,setPosts:d})]})})})})})]})]})})}var _=function(){return Object(S.jsxs)(E.d,{children:[Object(S.jsx)(E.b,{path:"/login",component:z}),Object(S.jsx)(E.b,{path:"/register",component:L}),Object(S.jsx)(W,{exact:!0,path:"/",children:Object(S.jsx)($,{})})]})},ee=n(20),te=Object(ee.b)({authentication:C}),ne=Object(y.a)({reducer:te}),re=function(){return Object(S.jsx)(o.a,{store:ne,children:Object(S.jsx)(P,{children:Object(S.jsx)(i.a,{children:Object(S.jsx)(_,{})})})})};n(91);c.a.render(Object(S.jsx)(a.a.StrictMode,{children:Object(S.jsx)(re,{})}),document.getElementById("root"))}},[[92,1,2]]]);
//# sourceMappingURL=main.76d81709.chunk.js.map