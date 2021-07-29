(this.webpackJsonpreactapp=this.webpackJsonpreactapp||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(1),c=a(8),l=a.n(c),s=(a(14),a(5)),i=a(2),r=(a(15),a(16),a(17),a(0));var u=function(e){var t=e.date.toLocaleString("en-US",{month:"long"}),a=e.date.toLocaleString("en-US",{day:"2-digit"}),n=e.date.getFullYear();return Object(r.jsxs)("div",{className:"expense-date",children:[Object(r.jsx)("div",{className:"expense-date__month",children:t}),Object(r.jsx)("div",{className:"expense-date__year",children:n}),Object(r.jsx)("div",{className:"expense-date__day",children:a})]})};a(19);var j=function(e){var t="card "+e.className;return Object(r.jsxs)("div",{className:t,children:[" ",e.children," "]})};var o=function(e){return Object(r.jsxs)(j,{className:"expense-item",children:[Object(r.jsx)(u,{date:e.date}),Object(r.jsxs)("div",{className:"expense-item__description",children:[Object(r.jsx)("h2",{children:e.title}),Object(r.jsxs)("div",{className:"expense-item__price",children:["$",e.amount]})]})]})},d=(a(20),function(e){return Object(r.jsx)("div",{className:"expenses-filter",children:Object(r.jsxs)("div",{className:"expenses-filter__control",children:[Object(r.jsx)("label",{children:"Filter by year"}),Object(r.jsxs)("select",{value:e.selected,onChange:function(t){e.onChangeFilter(t.target.value)},children:[Object(r.jsx)("option",{value:"2022",children:"2022"}),Object(r.jsx)("option",{value:"2021",children:"2021"}),Object(r.jsx)("option",{value:"2020",children:"2020"}),Object(r.jsx)("option",{value:"2019",children:"2019"})]})]})})}),b=a(9),x=(a(21),function(e){var t="0%";return e.maxValue>0&&(t=Math.round(e.value/e.maxValue*100)+"%"),Object(r.jsxs)("div",{className:"chart-bar",children:[Object(r.jsx)("div",{className:"chart-bar__inner",children:Object(r.jsx)("div",{className:"chart-bar__fill",style:{height:t}})}),Object(r.jsxs)("div",{className:"chart-bar__label",children:[" ",e.label]})]})}),v=(a(22),function(e){var t=e.dataPoints.map((function(e){return e.value})),a=Math.max.apply(Math,Object(s.a)(t));return Object(r.jsx)("div",{className:"chart",children:e.dataPoints.map((function(e){return Object(r.jsx)(x,{value:e.value,maxValue:a,label:e.label},e.label)}))})}),O=function(e){var t,a=[{label:"Jan",value:0},{label:"Feb",value:0},{label:"Mar",value:0},{label:"Apr",value:0},{label:"May",value:0},{label:"Jun",value:0},{label:"Jul",value:0},{label:"Aug",value:0},{label:"Sep",value:0},{label:"Oct",value:0},{label:"Nov",value:0},{label:"Dec",value:0}],n=Object(b.a)(e.expenses);try{for(n.s();!(t=n.n()).done;){var c=t.value;a[c.date.getMonth()].value+=c.amount}}catch(l){n.e(l)}finally{n.f()}return Object(r.jsx)(v,{dataPoints:a})};var h=function(e){var t=Object(n.useState)("2019"),a=Object(i.a)(t,2),c=a[0],l=a[1],s=e.items.filter((function(e){return e.date.getFullYear().toString()===c}));return Object(r.jsxs)(j,{className:"expenses",children:[Object(r.jsx)(d,{selected:c,onChangeFilter:function(e){l(e)}}),Object(r.jsx)(O,{expenses:s}),0===s.length?Object(r.jsx)("h1",{children:"No Expense Found"}):s.map((function(e){return Object(r.jsx)(o,{title:e.title,amount:e.amount,date:e.date},e.id)}))]})},m=a(7),p=(a(23),function(e){var t=Object(n.useState)(""),a=Object(i.a)(t,2),c=a[0],l=a[1],s=Object(n.useState)(""),u=Object(i.a)(s,2),j=u[0],o=u[1],d=Object(n.useState)(""),b=Object(i.a)(d,2),x=b[0],v=b[1];return Object(r.jsxs)("form",{onSubmit:function(t){t.preventDefault();var a={title:c,amount:+j,date:new Date(x)};e.onSaveExpenseData(a),l(""),o(""),v("")},children:[Object(r.jsxs)("div",{className:"new-expense__controls",children:[Object(r.jsxs)("div",{className:"new-expense__control",children:[Object(r.jsx)("label",{children:"Title"}),Object(r.jsx)("input",{type:"text",value:c,onChange:function(e){l(e.target.value)}})]}),Object(r.jsxs)("div",{className:"new-expense__control",children:[Object(r.jsx)("label",{children:"Amount"}),Object(r.jsx)("input",{type:"number",min:"0.01",step:"0.01",value:j,onChange:function(e){o(e.target.value)}})]}),Object(r.jsxs)("div",{className:"new-expense__control",children:[Object(r.jsx)("label",{children:"Date"}),Object(r.jsx)("input",{type:"date",min:"2019-0-01",max:"2022-12-31",value:x,onChange:function(e){v(e.target.value)}})]})]}),Object(r.jsx)("div",{className:"new-expense__actions",children:Object(r.jsx)("button",{type:"submit",children:"Add Expense"})})]})}),f=(a(24),function(e){return Object(r.jsx)("div",{className:"new-expense",children:Object(r.jsx)(p,{onSaveExpenseData:function(t){var a=Object(m.a)(Object(m.a)({},t),{},{id:Math.random().toString()});console.log(a),e.onAddExpense(a)}})})}),_=[{id:"e1",title:"Car Insurance",amount:294.67,date:new Date(2020,2,28)},{id:"e2",title:"Paper",amount:554.67,date:new Date(2019,9,28)},{id:"e3",title:"Room Rent",amount:854.67,date:new Date(2021,5,28)},{id:"  e4",title:"Vhicle",amount:214.67,date:new Date(2021,8,28)}];var g=function(){var e=Object(n.useState)(_),t=Object(i.a)(e,2),a=t[0],c=t[1];return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(f,{onAddExpense:function(e){c((function(t){return[e].concat(Object(s.a)(t))}))}}),Object(r.jsx)(h,{items:a})]})};l.a.render(Object(r.jsx)(g,{}),document.getElementById("root"))}],[[25,1,2]]]);
//# sourceMappingURL=main.db6b50cd.chunk.js.map