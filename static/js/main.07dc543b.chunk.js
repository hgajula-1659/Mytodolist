(this["webpackJsonptodo-app"]=this["webpackJsonptodo-app"]||[]).push([[0],{45:function(t,e,c){},46:function(t,e,c){},57:function(t,e,c){"use strict";c.r(e);var n=c(0),o=c.n(n),a=c(13),i=c.n(a),r=(c(45),c(9)),s=c(37),d=c(27),j=c.p+"static/media/logo.6ce24c58.svg",l=(c(46),c(77)),u=c(3);var b=function(t){var e=t.addTodo,c=Object(n.useState)({id:"",task:"",date:"",completed:!1}),o=Object(d.a)(c,2),a=o[0],i=o[1];return Object(u.jsxs)("form",{onSubmit:function(t){t.preventDefault(),a.task.trim()&&(e(Object(r.a)(Object(r.a)({},a),{},{id:Object(l.a)()})),i(Object(r.a)(Object(r.a)({},a),{},{task:""})))},children:[Object(u.jsx)("input",{name:"task",type:"text",value:a.task,onChange:function(t){i(Object(r.a)(Object(r.a)({},a),{},{task:t.target.value}))}}),Object(u.jsx)("input",{name:"date",type:"datetime-local",onChange:function(t){i(Object(r.a)(Object(r.a)({},a),{},{date:t.target.value}))}}),Object(u.jsx)("button",{type:"submit",children:"Submit"})]})},O=c(78),p=c(76),f=c(75),m=c(74),g=c(36),h=c.n(g);var v=function(t){var e=t.todo,c=t.toggleComplete,n=t.removeTodo;return Object(u.jsxs)(O.a,{style:{display:"flex"},children:[Object(u.jsx)(p.a,{checked:e.completed,onClick:function(){c(e.id)}}),Object(u.jsx)(f.a,{variant:"body1",style:{textDecoration:e.completed?"line-through":null},children:e.task+"on"+e.date}),Object(u.jsx)(m.a,{onClick:function(){n(e.id)},children:Object(u.jsx)(h.a,{})})]})};var x=function(t){var e=t.todos,c=t.removeTodo,n=t.toggleComplete;return Object(u.jsx)("ul",{children:e.map((function(t){return Object(u.jsx)(v,{todo:t,removeTodo:c,toggleComplete:n},t.id)}))})},k="todo-list";var C=function(){var t=Object(n.useState)([]),e=Object(d.a)(t,2),c=e[0],o=e[1];return Object(n.useEffect)((function(){var t=JSON.parse(localStorage.getItem(k));t&&o(t)}),[]),Object(n.useEffect)((function(){localStorage.setItem(k,JSON.stringify(c))}),[c]),Object(u.jsx)("div",{className:"App",children:Object(u.jsxs)("header",{className:"App-header",children:[Object(u.jsx)("img",{src:j,className:"App-logo",alt:"logo"}),Object(u.jsx)("p",{children:"TO-DO LIST "}),Object(u.jsx)(b,{addTodo:function(t){o([t].concat(Object(s.a)(c)))}}),Object(u.jsx)(x,{todos:c,removeTodo:function(t){o(c.filter((function(e){return e.id!==t})))},toggleComplete:function(t){o(c.map((function(e){return e.id===t?Object(r.a)(Object(r.a)({},e),{},{completed:!e.completed}):e})))}})]})})},S=function(t){t&&t instanceof Function&&c.e(3).then(c.bind(null,79)).then((function(e){var c=e.getCLS,n=e.getFID,o=e.getFCP,a=e.getLCP,i=e.getTTFB;c(t),n(t),o(t),a(t),i(t)}))};i.a.render(Object(u.jsx)(o.a.StrictMode,{children:Object(u.jsx)(C,{})}),document.getElementById("root")),S()}},[[57,1,2]]]);
//# sourceMappingURL=main.07dc543b.chunk.js.map