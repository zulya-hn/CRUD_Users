!function(e){function t(t){for(var r,i,o=t[0],l=t[1],u=t[2],d=0,f=[];d<o.length;d++)i=o[d],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&f.push(n[i][0]),n[i]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);for(c&&c(t);f.length;)f.shift()();return a.push.apply(a,u||[]),s()}function s(){for(var e,t=0;t<a.length;t++){for(var s=a[t],r=!0,o=1;o<s.length;o++){var l=s[o];0!==n[l]&&(r=!1)}r&&(a.splice(t--,1),e=i(i.s=s[0]))}return e}var r={},n={0:0},a=[];function i(t){if(r[t])return r[t].exports;var s=r[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,i),s.l=!0,s.exports}i.m=e,i.c=r,i.d=function(e,t,s){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(s,r,function(t){return e[t]}.bind(null,r));return s},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="./";var o=window.webpackJsonp=window.webpackJsonp||[],l=o.push.bind(o);o.push=t,o=o.slice();for(var u=0;u<o.length;u++)t(o[u]);var c=l;a.push([3,1]),s()}({15:function(e,t,s){"use strict";s.r(t);var r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"wrapper"},[s("add-new-user",{attrs:{newUser:e.newUser},on:{add:function(t){return e.onAdd()}}}),e._v(" "),s("search-users",{attrs:{filter:e.filter},on:{onReset:function(t){return e.onReset()}}}),e._v(" "),s("div",{staticClass:"card mt-5"},[s("div",{staticClass:"card-header"},[e._v("\n      User List\n    ")]),e._v(" "),s("div",{staticClass:"card-body"},[s("div",{staticClass:"user-container"},[e._m(0),e._v(" "),e._l(e.filteredUsers,(function(t,r){return s("tr",{staticClass:"row one-user"},[e.editId===t.id?[s("td",{staticClass:"col-xl-1"},[e._v(e._s(t.id))]),e._v(" "),s("td",{staticClass:"col-xl-2"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.editUser.fullName,expression:"editUser.fullName"}],staticClass:"form-control",attrs:{type:"text",required:""},domProps:{value:e.editUser.fullName},on:{input:function(t){t.target.composing||e.$set(e.editUser,"fullName",t.target.value)}}})]),e._v(" "),s("td",{staticClass:"col-xl-2"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.editUser.email,expression:"editUser.email"}],staticClass:"form-control",attrs:{type:"text",required:""},domProps:{value:e.editUser.email},on:{input:function(t){t.target.composing||e.$set(e.editUser,"email",t.target.value)}}})]),e._v(" "),s("td",{staticClass:"col-xl-2"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.editUser.phone,expression:"editUser.phone"}],staticClass:"form-control",attrs:{type:"text",required:""},domProps:{value:e.editUser.phone},on:{input:function(t){t.target.composing||e.$set(e.editUser,"phone",t.target.value)}}})]),e._v(" "),s("td",{staticClass:"col-xl-1"},[s("select",{directives:[{name:"model",rawName:"v-model",value:e.editUser.userStatus,expression:"editUser.userStatus"}],staticClass:"form-control",attrs:{name:"select",required:""},on:{change:function(t){var s=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.$set(e.editUser,"userStatus",t.target.multiple?s:s[0])}}},e._l(e.User.getStatuses(),(function(t){return s("option",{domProps:{value:t}},[e._v("\n                  "+e._s(t)+"\n                ")])})),0)]),e._v(" "),s("td",{staticClass:"col-xl-1"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.editUser.password,expression:"editUser.password"}],staticClass:"form-control",attrs:{type:"text",required:""},domProps:{value:e.editUser.password},on:{input:function(t){t.target.composing||e.$set(e.editUser,"password",t.target.value)}}})]),e._v(" "),s("td",{staticClass:"col-xl-1"}),e._v(" "),s("td",{staticClass:"col-xl-1"}),e._v(" "),s("td",{staticClass:"col-xl-1"},[s("span",{staticClass:"icon"},[s("i",{staticClass:"fa fa-check",on:{click:function(t){return e.onUpdate(r)}}})]),e._v(" "),s("span",{staticClass:"icon icon-margin"},[s("i",{staticClass:"fa fa-ban",on:{click:e.onCancel}})])])]:[s("td",{staticClass:"col-lg-3 col-xl-1"},[e._v("\n              "+e._s(t.id)+"\n            ")]),e._v(" "),s("td",{staticClass:"col-lg-3 col-xl-2"},[e._v("\n              "+e._s(t.fullName)+"\n            ")]),e._v(" "),s("td",{staticClass:"col-lg-3 col-xl-2"},[e._v("\n              "+e._s(t.email)+"\n            ")]),e._v(" "),s("td",{staticClass:"col-lg-3 col-xl-2"},[e._v("\n              "+e._s(t.phone)+"\n            ")]),e._v(" "),s("td",{staticClass:"col-lg-3 col-xl-1"},[e._v("\n              "+e._s(t.userStatus)+"\n            ")]),e._v(" "),s("td",{staticClass:"col-lg-3 col-xl-1"},[e._v("\n              "+e._s(t.password)+"\n            ")]),e._v(" "),s("td",{staticClass:"col-lg-3 col-xl-1"},[e._v("\n              "+e._s(t.getDateOfCreation())+"\n            ")]),e._v(" "),s("td",{staticClass:"col-lg-3 col-xl-1"},[e._v("\n              "+e._s(t.getDateOfChange())+"\n            ")]),e._v(" "),s("td",{staticClass:"col-xl-1"},[s("a",{staticClass:"icon",attrs:{href:"#"}},[s("i",{staticClass:"fa fa-pencil",on:{click:function(s){return e.onEdit(t.id,t)}}})]),e._v(" "),s("a",{staticClass:"icon icon-margin",attrs:{href:"#"}},[s("i",{staticClass:"fa fa-trash",on:{click:function(s){return e.onDelete(t.id,r)}}})])])]],2)}))],2)])])],1)};function n(e,t){for(var s=0;s<t.length;s++){var r=t[s];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}r._withStripped=!0;var a=function(){function e(t,s,r,n,a,i,o,l){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.id=t,this.fullName=s,this.email=r,this.password=n,this.phone=a,this.userStatus=i,this.dateOfCreation=o?new Date(o):new Date,this.dateOfChange=l?new Date(l):new Date}var t,s,r;return t=e,r=[{key:"getStatuses",value:function(){return["client","partner","admin"]}}],(s=[{key:"getDateOfCreation",value:function(){return String(this.dateOfCreation.getDate()).padStart(2,"0")+"/"+String(this.dateOfCreation.getMonth()+1).padStart(2,"0")+"/"+this.dateOfCreation.getFullYear()}},{key:"getDateOfChange",value:function(){return String(this.dateOfChange.getDate()).padStart(2,"0")+"/"+String(this.dateOfChange.getMonth()+1).padStart(2,"0")+"/"+this.dateOfChange.getFullYear()}}])&&n(t.prototype,s),r&&n(t,r),e}();function i(e,t){for(var s=0;s<t.length;s++){var r=t[s];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var o=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,s,r;return t=e,r=[{key:"addUser",value:function(e,t){var s=JSON.stringify(t);localStorage.setItem(e,s)}},{key:"removeUserById",value:function(e){localStorage.removeItem(e)}},{key:"getUsersIds",value:function(){return Object.keys(localStorage).map(Number)}},{key:"getUserById",value:function(e){var t=localStorage.getItem(e);try{return t=JSON.parse(t),new a(t.id,t.fullName,t.email,t.password,t.phone,t.userStatus,t.dateOfCreation,t.dateOfChange)}catch(e){return null}}}],(s=null)&&i(t.prototype,s),r&&i(t,r),e}(),l=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"card"},[s("div",{staticClass:"card-header"},[e._v("\n    Add a new user\n  ")]),e._v(" "),s("div",{staticClass:"card-body add-container"},[s("form",{staticClass:"form-inline",on:{submit:function(t){return t.preventDefault(),e.onAdd(t)}}},[s("div",{staticClass:"form-group"},[s("label",[e._v("Full Name")]),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.newUser.fullName,expression:"newUser.fullName"}],staticClass:"form-control ml-sm-2 mr-sm-2 my-2",attrs:{type:"text"},domProps:{value:e.newUser.fullName},on:{input:function(t){t.target.composing||e.$set(e.newUser,"fullName",t.target.value)}}})]),e._v(" "),s("div",{staticClass:"form-group"},[s("label",[e._v("Email")]),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.newUser.email,expression:"newUser.email"}],staticClass:"form-control ml-sm-2 mr-sm-2 my-2",attrs:{type:"text",required:""},domProps:{value:e.newUser.email},on:{input:function(t){t.target.composing||e.$set(e.newUser,"email",t.target.value)}}})]),e._v(" "),s("div",{staticClass:"form-group"},[s("label",[e._v("Phone")]),e._v(" "),s("label",[s("input",{directives:[{name:"model",rawName:"v-model",value:e.newUser.phone,expression:"newUser.phone"}],staticClass:"form-control ml-sm-2 mr-sm-1 my-2",attrs:{type:"text",required:""},domProps:{value:e.newUser.phone},on:{input:function(t){t.target.composing||e.$set(e.newUser,"phone",t.target.value)}}})])]),e._v(" "),s("div",{staticClass:"form-group"},[s("label",[e._v("Status")]),e._v(" "),s("select",{directives:[{name:"model",rawName:"v-model",value:e.newUser.userStatus,expression:"newUser.userStatus"}],staticClass:"form-control ml-sm-2 mr-sm-1 my-2",attrs:{name:"select",required:""},on:{change:function(t){var s=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.$set(e.newUser,"userStatus",t.target.multiple?s:s[0])}}},e._l(e.User.getStatuses(),(function(t){return s("option",{domProps:{value:t}},[e._v("\n            "+e._s(t)+"\n          ")])})),0)]),e._v(" "),s("div",{staticClass:"form-group"},[s("label",[e._v("Password")]),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.newUser.password,expression:"newUser.password"}],staticClass:"form-control ml-sm-2 mr-sm-2 my-2",attrs:{type:"text",required:""},domProps:{value:e.newUser.password},on:{input:function(t){t.target.composing||e.$set(e.newUser,"password",t.target.value)}}})]),e._v(" "),s("button",{staticClass:"btn btn-primary icon-margin",attrs:{type:"submit"}},[e._v("Add\n      ")])])])])};l._withStripped=!0;var u={props:["newUser"],data:function(){return{User:a}},methods:{onAdd:function(){this.$emit("add")}}},c=s(0),d=Object(c.a)(u,l,[],!1,null,null,null);d.options.__file="src/js/components/AddNewUser.vue";var f=d.exports,m=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"search-container"},[s("form",{staticClass:"form-inline",on:{submit:function(t){return t.preventDefault(),e.onReset()}}},[s("div",{staticClass:"form-group"},[s("label",[e._v("Email")]),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.filter.email,expression:"filter.email"}],staticClass:"form-control ml-sm-2 mr-sm-2 my-2",attrs:{type:"text"},domProps:{value:e.filter.email},on:{input:function(t){t.target.composing||e.$set(e.filter,"email",t.target.value)}}})]),e._v(" "),s("div",{staticClass:"form-group"},[s("label",[e._v("Phone")]),e._v(" "),s("label",[s("input",{directives:[{name:"model",rawName:"v-model",value:e.filter.phone,expression:"filter.phone"}],staticClass:"form-control ml-sm-2 mr-sm-2 my-2",attrs:{type:"text"},domProps:{value:e.filter.phone},on:{input:function(t){t.target.composing||e.$set(e.filter,"phone",t.target.value)}}})])]),e._v(" "),s("div",{staticClass:"form-group"},[s("label",[e._v("Status")]),e._v(" "),s("select",{directives:[{name:"model",rawName:"v-model",value:e.filter.status,expression:"filter.status"}],staticClass:"form-control ml-sm-2 mr-sm-2 my-2",attrs:{name:"select"},on:{change:function(t){var s=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.$set(e.filter,"status",t.target.multiple?s:s[0])}}},[s("option",{attrs:{value:""}},[e._v("All Statuses")]),e._v(" "),e._l(e.User.getStatuses(),(function(t){return s("option",{domProps:{value:t}},[e._v("\n          "+e._s(t)+"\n        ")])}))],2)]),e._v(" "),s("button",{staticClass:"btn btn-primary icon-margin",attrs:{type:"submit"}},[e._v("Reset\n    ")])])])};m._withStripped=!0;var p={props:["filter"],data:function(){return{User:a}},methods:{onReset:function(){this.$emit("onReset")}}},v=Object(c.a)(p,m,[],!1,null,null,null);function h(e,t){var s;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(s=function(e,t){if(!e)return;if("string"==typeof e)return g(e,t);var s=Object.prototype.toString.call(e).slice(8,-1);"Object"===s&&e.constructor&&(s=e.constructor.name);if("Map"===s||"Set"===s)return Array.from(e);if("Arguments"===s||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s))return g(e,t)}(e))||t&&e&&"number"==typeof e.length){s&&(e=s);var r=0,n=function(){};return{s:n,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,o=!1;return{s:function(){s=e[Symbol.iterator]()},n:function(){var e=s.next();return i=e.done,e},e:function(e){o=!0,a=e},f:function(){try{i||null==s.return||s.return()}finally{if(o)throw a}}}}function g(e,t){(null==t||t>e.length)&&(t=e.length);for(var s=0,r=new Array(t);s<t;s++)r[s]=e[s];return r}v.options.__file="src/js/components/SearchUsers.vue";var _={data:function(){return{users:[],newUser:{},lastId:0,editId:null,editUser:{},controls:[],User:a,filter:{email:"",phone:"",status:""}}},created:function(){this.getUsersFromStorage()},computed:{filteredUsers:function(){var e=this;return this.users.filter((function(t){return(""===e.filter.status||e.filter.status===t.userStatus)&&(""===e.filter.email||t.email.includes(e.filter.email))&&(""===e.filter.phone||t.phone.includes(e.filter.phone))}))}},methods:{onAdd:function(){var e=this.lastId+1,t=new a(e,this.newUser.fullName,this.newUser.email,this.newUser.password,this.newUser.phone,this.newUser.userStatus,null,null);this.users.push(t),o.addUser(e,t),this.lastId=e,this.newUser={}},onUpdate:function(e){o.addUser(this.editId,this.editUser),this.users[e].id=this.editUser.id,this.users[e].fullName=this.editUser.fullName,this.users[e].email=this.editUser.email,this.users[e].password=this.editUser.password,this.users[e].phone=this.editUser.phone,this.users[e].userStatus=this.editUser.userStatus,this.users[e].dateOfCreation=this.editUser.dateOfCreation,this.users[e].dateOfChange=new Date,this.editId=null},onCancel:function(){this.editId=null},getUsersFromStorage:function(){var e,t=0,s=h(o.getUsersIds());try{for(s.s();!(e=s.n()).done;){var r=e.value,n=o.getUserById(r.toString());null!==n&&(this.users.push(n),r>t&&(t=r))}}catch(e){s.e(e)}finally{s.f()}this.lastId=t},onEdit:function(e,t){this.editId=e,this.editUser.id=t.id,this.editUser.fullName=t.fullName,this.editUser.email=t.email,this.editUser.password=t.password,this.editUser.phone=t.phone,this.editUser.userStatus=t.userStatus,this.editUser.dateOfCreation=t.dateOfCreation,this.editUser.dateOfChange=t.dateOfChange},onDelete:function(e,t){confirm("Are you sure you want to delete the user?")&&(o.removeUserById(e),this.users.splice(t,1))},onReset:function(){this.filter.email="",this.filter.phone="",this.filter.status=""}},components:{SearchUsers:v.exports,AddNewUser:f}},w=Object(c.a)(_,r,[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("tr",{staticClass:"row one-user"},[s("th",{staticClass:"col-lg-3 col-xl-1"},[e._v("\n            ID\n          ")]),e._v(" "),s("th",{staticClass:"col-lg-3 col-xl-2"},[e._v("\n            Full Name\n          ")]),e._v(" "),s("th",{staticClass:"col-lg-3 col-xl-2"},[e._v("\n            Email\n          ")]),e._v(" "),s("th",{staticClass:"col-lg-3 col-xl-2"},[e._v("\n            Phone\n          ")]),e._v(" "),s("th",{staticClass:"col-lg-3 col-xl-1"},[e._v("\n            Status\n          ")]),e._v(" "),s("th",{staticClass:"col-lg-3 col-xl-1"},[e._v("\n            Password\n          ")]),e._v(" "),s("th",{staticClass:"col-lg-3 col-xl-1"},[e._v("\n            Date Of Creation\n          ")]),e._v(" "),s("th",{staticClass:"col-lg-3 col-xl-1"},[e._v("\n            Last Change\n          ")])])}],!1,null,null,null);w.options.__file="src/js/components/App.vue";t.default=w.exports},3:function(e,t,s){"use strict";s.r(t);s(4),s(5),s(7),s(9);window.Vue=s(11),Vue.component("app-component",s(15).default);new Vue({el:"#app"})},4:function(e,t){console.log("its work")},5:function(e,t,s){var r=s(1),n=s(6);"string"==typeof(n=n.__esModule?n.default:n)&&(n=[[e.i,n,""]]);var a={insert:"head",singleton:!1};r(n,a);e.exports=n.locals||{}},6:function(e,t,s){}});