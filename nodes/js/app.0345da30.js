(function(t){function e(e){for(var n,s,a=e[0],c=e[1],l=e[2],u=0,p=[];u<a.length;u++)s=a[u],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&p.push(o[s][0]),o[s]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);d&&d(e);while(p.length)p.shift()();return r.push.apply(r,l||[]),i()}function i(){for(var t,e=0;e<r.length;e++){for(var i=r[e],n=!0,a=1;a<i.length;a++){var c=i[a];0!==o[c]&&(n=!1)}n&&(r.splice(e--,1),t=s(s.s=i[0]))}return t}var n={},o={app:0},r=[];function s(e){if(n[e])return n[e].exports;var i=n[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,s),i.l=!0,i.exports}s.m=t,s.c=n,s.d=function(t,e,i){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(s.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(i,n,function(e){return t[e]}.bind(null,n));return i},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/nodes/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],c=a.push.bind(a);a.push=e,a=a.slice();for(var l=0;l<a.length;l++)e(a[l]);var d=c;r.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"14cf":function(t,e,i){"use strict";var n=i("804a"),o=i.n(n);o.a},1935:function(t,e,i){"use strict";var n=i("e806"),o=i.n(n);o.a},"56d7":function(t,e,i){"use strict";i.r(e);i("e260"),i("e6cf"),i("cca6"),i("a79d");var n=i("2b0e"),o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"wrapper"},[i("div",{staticClass:"wrapper-content"},[i("section",[i("div",{staticClass:"container"},[i("div",{attrs:{id:"app"}},[t.message?i("message",{attrs:{message:t.message}}):t._e(),i("newNote",{attrs:{note:t.note},on:{addNote:t.addNote}}),i("div",{staticClass:"note-header"},[i("h1",[t._v(t._s(t.title))]),i("search",{attrs:{value:t.search,placeholder:"Поиск"},on:{search:function(e){t.search=e}}}),i("div",{staticClass:"icons"},[i("svg",{class:{active:t.grid},attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},on:{click:function(e){t.grid=!0}}},[i("rect",{attrs:{x:"3",y:"3",width:"7",height:"7"}}),i("rect",{attrs:{x:"14",y:"3",width:"7",height:"7"}}),i("rect",{attrs:{x:"14",y:"14",width:"7",height:"7"}}),i("rect",{attrs:{x:"3",y:"14",width:"7",height:"7"}})]),i("svg",{class:{active:!t.grid},attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},on:{click:function(e){t.grid=!1}}},[i("line",{attrs:{x1:"8",y1:"6",x2:"21",y2:"6"}}),i("line",{attrs:{x1:"8",y1:"12",x2:"21",y2:"12"}}),i("line",{attrs:{x1:"8",y1:"18",x2:"21",y2:"18"}}),i("line",{attrs:{x1:"3",y1:"6",x2:"3",y2:"6"}}),i("line",{attrs:{x1:"3",y1:"12",x2:"3",y2:"12"}}),i("line",{attrs:{x1:"3",y1:"18",x2:"3",y2:"18"}})])])],1),i("notes",{attrs:{notes:t.notesFilter,grid:t.grid,titleBeforeEdit:t.titleBeforeEdit},on:{remove:t.removeNote,editTodoItem:t.editTodoItem,finishEditTodoItem:t.finishEditTodoItem,cancelEditTodoItem:t.cancelEditTodoItem}})],1)])])])])},r=[],s=(i("4de4"),i("c975"),i("a434"),i("ac1f"),i("841c"),i("498a"),function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"message"},[i("p",[t._v(" "+t._s(t.message)+" ")])])}),a=[],c={props:{message:{type:String,required:!0}}},l=c,d=(i("14cf"),i("2877")),u=Object(d["a"])(l,s,a,!1,null,"19d5ba9a",null),p=u.exports,f=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"new-note"},[i("label",{attrs:{for:""}},[t._v("Заголовок")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.note.title,expression:"note.title"}],attrs:{type:"text"},domProps:{value:t.note.title},on:{input:function(e){e.target.composing||t.$set(t.note,"title",e.target.value)}}}),i("label",{attrs:{for:""}},[t._v("Приоритет")]),i("select",{directives:[{name:"model",rawName:"v-model",value:t.note.priority,expression:"note.priority"}],on:{change:function(e){var i=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.note,"priority",e.target.multiple?i:i[0])}}},[i("option",{attrs:{disabled:"",value:""}},[t._v("Выберите один из вариантов")]),i("option",{attrs:{value:"1"}},[t._v("Обычная")]),i("option",{attrs:{value:"2"}},[t._v("Важная")]),i("option",{attrs:{value:"3"}},[t._v("Критическая")])]),i("label",{attrs:{for:""}},[t._v("Описание")]),i("textarea",{directives:[{name:"model",rawName:"v-model",value:t.note.descr,expression:"note.descr"}],domProps:{value:t.note.descr},on:{input:function(e){e.target.composing||t.$set(t.note,"descr",e.target.value)}}}),i("button",{staticClass:"btn btnPrimary",on:{click:t.addNote}},[t._v("New note")])])},h=[],v={props:{note:{type:Object,required:!0}},methods:{addNote:function(){this.$emit("addNote",this.note)}}},m=v,g=(i("72c7"),Object(d["a"])(m,f,h,!1,null,null,null)),y=g.exports,w=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"notes"},t._l(t.notes,(function(e,n){return i("div",{key:n,staticClass:"note",class:{full:!t.grid,warning:2==e.priority,error:3==e.priority}},[i("div",{staticClass:"note-header",class:{full:!t.grid}},[i("div",{on:{click:function(e){return t.editTodoItem(n)}}},[e.editing?i("input",{directives:[{name:"model",rawName:"v-model",value:e.title,expression:"note.title"}],attrs:{type:"text"},domProps:{value:e.title},on:{blur:function(e){return t.finishEditTodoItem(n)},keyup:[function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.finishEditTodoItem(n)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"esc",27,e.key,["Esc","Escape"])?null:t.cancelEditTodoItem(n)}],input:function(i){i.target.composing||t.$set(e,"title",i.target.value)}}}):t._e(),e.editing?t._e():i("p",[t._v(t._s(e.title))])]),i("p",{staticStyle:{cursor:"pointer"},on:{click:function(e){return t.removeNote(n)}}},[t._v("x")])]),i("div",{staticClass:"note-body"},[i("p",[t._v(" "+t._s(e.descr)+" ")]),i("span",[t._v(t._s(e.date))])])])})),0)},x=[],_={props:{notes:{type:Array,required:!0},grid:{type:Boolean,required:!0},titleBeforeEdit:{type:String,required:!0}},methods:{removeNote:function(t){console.log("Note id - ".concat(t," removed")),this.$emit("remove",t)},editTodoItem:function(t){this.$emit("editTodoItem",t)},finishEditTodoItem:function(t){this.$emit("finishEditTodoItem",t)},cancelEditTodoItem:function(t){this.$emit("cancelEditTodoItem",t)}}},b=_,k=(i("1935"),Object(d["a"])(b,w,x,!1,null,null,null)),E=k.exports,C=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"wrapper__search"},[i("div",{staticClass:"search"},[i("div",{staticClass:"search-icon"},[i("svg",{staticClass:"feather feather-search",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}},[i("circle",{attrs:{cx:"11",cy:"11",r:"8"}}),i("line",{attrs:{x1:"21",y1:"21",x2:"16.65",y2:"16.65"}})])])]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],attrs:{type:"text",placeholder:t.placeholder},domProps:{value:t.search},on:{input:function(e){e.target.composing||(t.search=e.target.value)}}})])},N=[],T={props:{value:{type:String,required:!0},placeholder:{type:String,default:"Search"}},data:function(){return{search:this.value}},watch:{search:function(t){this.$emit("search",t)}}},O=T,I=(i("fa4a"),Object(d["a"])(O,C,N,!1,null,"86dd303c",null)),j=I.exports,S={components:{message:p,newNote:y,notes:E,search:j},data:function(){return{title:"Notes App",search:"",message:null,grid:!0,titleBeforeEdit:"",note:{title:"",descr:"",priority:"",editing:!1},notes:[{title:"First Note",descr:"Description for first note",date:new Date(Date.now()).toLocaleString(),priority:1,editing:!1},{title:"Second Note",descr:"Description for second note",date:new Date(Date.now()).toLocaleString(),priority:2,editing:!1},{title:"Third Note",descr:"Description for thrid note",date:new Date(Date.now()).toLocaleString(),priority:3,editing:!1}]}},computed:{notesFilter:function(){var t=this.notes,e=this.search;return e?(e=e.trim().toLowerCase(),t=t.filter((function(t){if(-1!==t.title.toLowerCase().indexOf(e))return t})),t):t}},methods:{addNote:function(){var t=this.note,e=t.title,i=t.descr,n=t.priority;if(console.log(n),""===e)return this.message="empty title!",!1;this.notes.push({title:e,descr:i,date:new Date(Date.now()).toLocaleString(),priority:n,editing:!1}),this.message=null,this.note.descr="",this.note.title="",this.note.priority=""},removeNote:function(t){this.notes.splice(t,1)},editTodoItem:function(t){this.titleBeforeEdit=this.notes[t].title,this.notes[t].editing=!0},finishEditTodoItem:function(t){""==this.notes[t].title&&(this.notes[t].title=this.titleBeforeEdit),this.notes[t].editing=!1},cancelEditTodoItem:function(t){this.notes[t].title=this.titleBeforeEdit,this.notes[t].editing=!1}}},$=S,P=Object(d["a"])($,o,r,!1,null,null,null),B=P.exports;i("c1c3");n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(B)}}).$mount("#app")},"72c7":function(t,e,i){"use strict";var n=i("e5f2"),o=i.n(n);o.a},"804a":function(t,e,i){},be24:function(t,e,i){},c1c3:function(t,e,i){},e5f2:function(t,e,i){},e806:function(t,e,i){},fa4a:function(t,e,i){"use strict";var n=i("be24"),o=i.n(n);o.a}});