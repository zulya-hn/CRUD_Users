!function(t){function e(e){for(var r,i,o=e[0],l=e[1],u=e[2],d=0,m=[];d<o.length;d++)i=o[d],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&m.push(n[i][0]),n[i]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);for(c&&c(e);m.length;)m.shift()();return a.push.apply(a,u||[]),s()}function s(){for(var t,e=0;e<a.length;e++){for(var s=a[e],r=!0,o=1;o<s.length;o++){var l=s[o];0!==n[l]&&(r=!1)}r&&(a.splice(e--,1),t=i(i.s=s[0]))}return t}var r={},n={0:0},a=[];function i(e){if(r[e])return r[e].exports;var s=r[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,i),s.l=!0,s.exports}i.m=t,i.c=r,i.d=function(t,e,s){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(s,r,function(e){return t[e]}.bind(null,r));return s},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="./";var o=window.webpackJsonp=window.webpackJsonp||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var u=0;u<o.length;u++)e(o[u]);var c=l;a.push([3,1]),s()}({15:function(t,e,s){"use strict";s.r(e);var r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"wrapper"},[s("add-new-user",{attrs:{newUser:t.newUser},on:{add:function(e){return t.onAdd()}}}),t._v(" "),s("div",{staticClass:"search-container"},[s("form",{staticClass:"form-inline",on:{submit:function(e){return e.preventDefault(),t.onReset()}}},[s("div",{staticClass:"form-group"},[s("label",[t._v("Email")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.emailFilter,expression:"emailFilter"}],staticClass:"form-control ml-sm-2 mr-sm-2 my-2",attrs:{type:"text"},domProps:{value:t.emailFilter},on:{input:function(e){e.target.composing||(t.emailFilter=e.target.value)}}})]),t._v(" "),s("div",{staticClass:"form-group"},[s("label",[t._v("Phone")]),t._v(" "),s("label",[s("input",{directives:[{name:"model",rawName:"v-model",value:t.phoneFilter,expression:"phoneFilter"}],staticClass:"form-control ml-sm-2 mr-sm-2 my-2",attrs:{type:"text"},domProps:{value:t.phoneFilter},on:{input:function(e){e.target.composing||(t.phoneFilter=e.target.value)}}})])]),t._v(" "),s("div",{staticClass:"form-group"},[s("label",[t._v("Status")]),t._v(" "),s("select",{directives:[{name:"model",rawName:"v-model",value:t.statusFilter,expression:"statusFilter"}],staticClass:"form-control ml-sm-2 mr-sm-2 my-2",attrs:{name:"select"},on:{change:function(e){var s=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.statusFilter=e.target.multiple?s:s[0]}}},[s("option",{attrs:{value:""}},[t._v("All Statuses")]),t._v(" "),t._l(t.User.getStatuses(),(function(e){return s("option",{domProps:{value:e}},[t._v("\n            "+t._s(e)+"\n          ")])}))],2)]),t._v(" "),s("button",{staticClass:"btn btn-primary icon-margin",attrs:{type:"submit"}},[t._v("Reset\n      ")])])]),t._v(" "),s("div",{staticClass:"card mt-5"},[s("div",{staticClass:"card-header"},[t._v("\n      User List\n    ")]),t._v(" "),s("div",{staticClass:"card-body"},[s("div",{staticClass:"user-container"},[t._m(0),t._v(" "),t._l(t.filteredUsers,(function(e,r){return s("tr",{staticClass:"row one-user"},[t.editId===e.id?[s("td",{staticClass:"col-xl-1"},[t._v(t._s(e.id))]),t._v(" "),s("td",{staticClass:"col-xl-2"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.editUser.fullName,expression:"editUser.fullName"}],staticClass:"form-control",attrs:{type:"text",required:""},domProps:{value:t.editUser.fullName},on:{input:function(e){e.target.composing||t.$set(t.editUser,"fullName",e.target.value)}}})]),t._v(" "),s("td",{staticClass:"col-xl-2"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.editUser.email,expression:"editUser.email"}],staticClass:"form-control",attrs:{type:"text",required:""},domProps:{value:t.editUser.email},on:{input:function(e){e.target.composing||t.$set(t.editUser,"email",e.target.value)}}})]),t._v(" "),s("td",{staticClass:"col-xl-2"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.editUser.phone,expression:"editUser.phone"}],staticClass:"form-control",attrs:{type:"text",required:""},domProps:{value:t.editUser.phone},on:{input:function(e){e.target.composing||t.$set(t.editUser,"phone",e.target.value)}}})]),t._v(" "),s("td",{staticClass:"col-xl-1"},[s("select",{directives:[{name:"model",rawName:"v-model",value:t.editUser.userStatus,expression:"editUser.userStatus"}],staticClass:"form-control",attrs:{name:"select",required:""},on:{change:function(e){var s=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.editUser,"userStatus",e.target.multiple?s:s[0])}}},t._l(t.User.getStatuses(),(function(e){return s("option",{domProps:{value:e}},[t._v("\n                  "+t._s(e)+"\n                ")])})),0)]),t._v(" "),s("td",{staticClass:"col-xl-1"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.editUser.password,expression:"editUser.password"}],staticClass:"form-control",attrs:{type:"text",required:""},domProps:{value:t.editUser.password},on:{input:function(e){e.target.composing||t.$set(t.editUser,"password",e.target.value)}}})]),t._v(" "),s("td",{staticClass:"col-xl-1"}),t._v(" "),s("td",{staticClass:"col-xl-1"}),t._v(" "),s("td",{staticClass:"col-xl-1"},[s("span",{staticClass:"icon"},[s("i",{staticClass:"fa fa-check",on:{click:function(e){return t.onUpdate(r)}}})]),t._v(" "),s("span",{staticClass:"icon icon-margin"},[s("i",{staticClass:"fa fa-ban",on:{click:t.onCancel}})])])]:[s("td",{staticClass:"col-lg-3 col-xl-1"},[t._v("\n              "+t._s(e.id)+"\n            ")]),t._v(" "),s("td",{staticClass:"col-lg-3 col-xl-2"},[t._v("\n              "+t._s(e.fullName)+"\n            ")]),t._v(" "),s("td",{staticClass:"col-lg-3 col-xl-2"},[t._v("\n              "+t._s(e.email)+"\n            ")]),t._v(" "),s("td",{staticClass:"col-lg-3 col-xl-2"},[t._v("\n              "+t._s(e.phone)+"\n            ")]),t._v(" "),s("td",{staticClass:"col-lg-3 col-xl-1"},[t._v("\n              "+t._s(e.userStatus)+"\n            ")]),t._v(" "),s("td",{staticClass:"col-lg-3 col-xl-1"},[t._v("\n              "+t._s(e.password)+"\n            ")]),t._v(" "),s("td",{staticClass:"col-lg-3 col-xl-1"},[t._v("\n              "+t._s(e.getDateOfCreation())+"\n            ")]),t._v(" "),s("td",{staticClass:"col-lg-3 col-xl-1"},[t._v("\n              "+t._s(e.getDateOfChange())+"\n            ")]),t._v(" "),s("td",{staticClass:"col-xl-1"},[s("a",{staticClass:"icon",attrs:{href:"#"}},[s("i",{staticClass:"fa fa-pencil",on:{click:function(s){return t.onEdit(e.id,e)}}})]),t._v(" "),s("a",{staticClass:"icon icon-margin",attrs:{href:"#"}},[s("i",{staticClass:"fa fa-trash",on:{click:function(s){return t.onDelete(e.id,r)}}})])])]],2)}))],2)])])],1)};function n(t,e){for(var s=0;s<e.length;s++){var r=e[s];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}r._withStripped=!0;var a=function(){function t(e,s,r,n,a,i,o,l){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.id=e,this.fullName=s,this.email=r,this.password=n,this.phone=a,this.userStatus=i,this.dateOfCreation=o?new Date(o):new Date,this.dateOfChange=l?new Date(l):new Date}var e,s,r;return e=t,r=[{key:"getStatuses",value:function(){return["client","partner","admin"]}}],(s=[{key:"getDateOfCreation",value:function(){return String(this.dateOfCreation.getDate()).padStart(2,"0")+"/"+String(this.dateOfCreation.getMonth()+1).padStart(2,"0")+"/"+this.dateOfCreation.getFullYear()}},{key:"getDateOfChange",value:function(){return String(this.dateOfChange.getDate()).padStart(2,"0")+"/"+String(this.dateOfChange.getMonth()+1).padStart(2,"0")+"/"+this.dateOfChange.getFullYear()}}])&&n(e.prototype,s),r&&n(e,r),t}();function i(t,e){for(var s=0;s<e.length;s++){var r=e[s];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var o=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}var e,s,r;return e=t,r=[{key:"addUser",value:function(t,e){var s=JSON.stringify(e);localStorage.setItem(t,s)}},{key:"removeUserById",value:function(t){localStorage.removeItem(t)}},{key:"getUsersIds",value:function(){return Object.keys(localStorage).map(Number)}},{key:"getUserById",value:function(t){var e=localStorage.getItem(t);try{return e=JSON.parse(e),new a(e.id,e.fullName,e.email,e.password,e.phone,e.userStatus,e.dateOfCreation,e.dateOfChange)}catch(t){return null}}}],(s=null)&&i(e.prototype,s),r&&i(e,r),t}(),l=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"card"},[s("div",{staticClass:"card-header"},[t._v("\n    Add a new user\n  ")]),t._v(" "),s("div",{staticClass:"card-body add-container"},[s("form",{staticClass:"form-inline",on:{submit:function(e){return e.preventDefault(),t.onAdd(e)}}},[s("div",{staticClass:"form-group"},[s("label",[t._v("Full Name")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.newUser.fullName,expression:"newUser.fullName"}],staticClass:"form-control ml-sm-2 mr-sm-2 my-2",attrs:{type:"text"},domProps:{value:t.newUser.fullName},on:{input:function(e){e.target.composing||t.$set(t.newUser,"fullName",e.target.value)}}})]),t._v(" "),s("div",{staticClass:"form-group"},[s("label",[t._v("Email")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.newUser.email,expression:"newUser.email"}],staticClass:"form-control ml-sm-2 mr-sm-2 my-2",attrs:{type:"text",required:""},domProps:{value:t.newUser.email},on:{input:function(e){e.target.composing||t.$set(t.newUser,"email",e.target.value)}}})]),t._v(" "),s("div",{staticClass:"form-group"},[s("label",[t._v("Phone")]),t._v(" "),s("label",[s("input",{directives:[{name:"model",rawName:"v-model",value:t.newUser.phone,expression:"newUser.phone"}],staticClass:"form-control ml-sm-2 mr-sm-1 my-2",attrs:{type:"text",required:""},domProps:{value:t.newUser.phone},on:{input:function(e){e.target.composing||t.$set(t.newUser,"phone",e.target.value)}}})])]),t._v(" "),s("div",{staticClass:"form-group"},[s("label",[t._v("Status")]),t._v(" "),s("select",{directives:[{name:"model",rawName:"v-model",value:t.newUser.userStatus,expression:"newUser.userStatus"}],staticClass:"form-control ml-sm-2 mr-sm-1 my-2",attrs:{name:"select",required:""},on:{change:function(e){var s=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.newUser,"userStatus",e.target.multiple?s:s[0])}}},t._l(t.User.getStatuses(),(function(e){return s("option",{domProps:{value:e}},[t._v("\n            "+t._s(e)+"\n          ")])})),0)]),t._v(" "),s("div",{staticClass:"form-group"},[s("label",[t._v("Password")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.newUser.password,expression:"newUser.password"}],staticClass:"form-control ml-sm-2 mr-sm-2 my-2",attrs:{type:"text",required:""},domProps:{value:t.newUser.password},on:{input:function(e){e.target.composing||t.$set(t.newUser,"password",e.target.value)}}})]),t._v(" "),s("button",{staticClass:"btn btn-primary icon-margin",attrs:{type:"submit"}},[t._v("Add\n      ")])])])])};l._withStripped=!0;var u={props:["newUser"],data:function(){return{User:a}},methods:{onAdd:function(){this.$emit("add")}}},c=s(0),d=Object(c.a)(u,l,[],!1,null,null,null);function m(t,e){var s;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(s=function(t,e){if(!t)return;if("string"==typeof t)return v(t,e);var s=Object.prototype.toString.call(t).slice(8,-1);"Object"===s&&t.constructor&&(s=t.constructor.name);if("Map"===s||"Set"===s)return Array.from(t);if("Arguments"===s||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s))return v(t,e)}(t))||e&&t&&"number"==typeof t.length){s&&(t=s);var r=0,n=function(){};return{s:n,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,o=!1;return{s:function(){s=t[Symbol.iterator]()},n:function(){var t=s.next();return i=t.done,t},e:function(t){o=!0,a=t},f:function(){try{i||null==s.return||s.return()}finally{if(o)throw a}}}}function v(t,e){(null==e||e>t.length)&&(e=t.length);for(var s=0,r=new Array(e);s<e;s++)r[s]=t[s];return r}d.options.__file="src/js/components/addNewUser.vue";var f={data:function(){return{users:[],newUser:{},lastId:0,editId:null,editUser:{},controls:[],User:a,emailFilter:"",phoneFilter:"",statusFilter:""}},created:function(){this.getUsersFromStorage()},computed:{filteredUsers:function(){var t=this;return this.users.filter((function(e){return(""===t.statusFilter||t.statusFilter===e.userStatus)&&(""===t.emailFilter||e.email.includes(t.emailFilter))&&(""===t.phoneFilter||e.phone.includes(t.phoneFilter))}))}},methods:{onAdd:function(){var t=this.lastId+1,e=new a(t,this.newUser.fullName,this.newUser.email,this.newUser.password,this.newUser.phone,this.newUser.userStatus,null,null);this.users.push(e),o.addUser(t,e),this.lastId=t,this.newUser={}},onUpdate:function(t){o.addUser(this.editId,this.editUser),this.users[t].id=this.editUser.id,this.users[t].fullName=this.editUser.fullName,this.users[t].email=this.editUser.email,this.users[t].password=this.editUser.password,this.users[t].phone=this.editUser.phone,this.users[t].userStatus=this.editUser.userStatus,this.users[t].dateOfCreation=this.editUser.dateOfCreation,this.users[t].dateOfChange=new Date,this.editId=null},onCancel:function(){this.editId=null},getUsersFromStorage:function(){var t,e=0,s=m(o.getUsersIds());try{for(s.s();!(t=s.n()).done;){var r=t.value,n=o.getUserById(r.toString());null!==n&&(this.users.push(n),r>e&&(e=r))}}catch(t){s.e(t)}finally{s.f()}this.lastId=e},onEdit:function(t,e){this.editId=t,this.editUser.id=e.id,this.editUser.fullName=e.fullName,this.editUser.email=e.email,this.editUser.password=e.password,this.editUser.phone=e.phone,this.editUser.userStatus=e.userStatus,this.editUser.dateOfCreation=e.dateOfCreation,this.editUser.dateOfChange=e.dateOfChange},onDelete:function(t,e){confirm("Are you sure you want to delete the user?")&&(o.removeUserById(t),this.users.splice(e,1))},onReset:function(){this.emailFilter="",this.phoneFilter="",this.statusFilter=""}},components:{AddNewUser:d.exports}},p=Object(c.a)(f,r,[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("tr",{staticClass:"row one-user"},[s("th",{staticClass:"col-lg-3 col-xl-1"},[t._v("\n            ID\n          ")]),t._v(" "),s("th",{staticClass:"col-lg-3 col-xl-2"},[t._v("\n            Full Name\n          ")]),t._v(" "),s("th",{staticClass:"col-lg-3 col-xl-2"},[t._v("\n            Email\n          ")]),t._v(" "),s("th",{staticClass:"col-lg-3 col-xl-2"},[t._v("\n            Phone\n          ")]),t._v(" "),s("th",{staticClass:"col-lg-3 col-xl-1"},[t._v("\n            Status\n          ")]),t._v(" "),s("th",{staticClass:"col-lg-3 col-xl-1"},[t._v("\n            Password\n          ")]),t._v(" "),s("th",{staticClass:"col-lg-3 col-xl-1"},[t._v("\n            Date Of Creation\n          ")]),t._v(" "),s("th",{staticClass:"col-lg-3 col-xl-1"},[t._v("\n            Last Change\n          ")])])}],!1,null,null,null);p.options.__file="src/js/components/App.vue";e.default=p.exports},3:function(t,e,s){"use strict";s.r(e);s(4),s(5),s(7),s(9);window.Vue=s(11),Vue.component("app-component",s(15).default);new Vue({el:"#app"})},4:function(t,e){console.log("its work")},5:function(t,e,s){var r=s(1),n=s(6);"string"==typeof(n=n.__esModule?n.default:n)&&(n=[[t.i,n,""]]);var a={insert:"head",singleton:!1};r(n,a);t.exports=n.locals||{}},6:function(t,e,s){}});