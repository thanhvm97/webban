webpackJsonp([21],{117:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default={data:function(t){function s(){return t.apply(this,arguments)}return s.toString=function(){return t.toString()},s}(function(){return{baseURL:data.getBaseURL(),loading:{isLoading:!1,value:"Submit"}}}),methods:{submit:function(){if(!this.isPasswordMatch())return util.notify("Password not match","error");if(!this.loading.isLoading){this.startLoading();var t=this,s=this.baseURL+"api/v1/admin",a=$("#adminForm").serialize();axios.post(s,a).then(function(s){t.stopLoading(),util.showResult(s)&&t.back()}).catch(function(s){t.stopLoading(),util.showResult(s)})}},back:function(){this.$router.push("/admin")},isPasswordMatch:function(){return $('[name="admin_pass1"]').val()==$('[name="admin_pass"]').val()},startLoading:function(){util.notify("Adding admin","loading"),this.loading={isLoading:!0,value:'<i class="fa fa-refresh fa-spin"></i> Submit'}},stopLoading:function(){$.notifyClose(),this.loading={isLoading:!1,value:"Submit"}}}}},118:function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"panel panel-default col-md-8 col-md-offset-2"},[a("div",{staticClass:"panel panel-body"},[a("form",{staticClass:"row",attrs:{method:"POST",action:t.baseURL+"api/v1/admin",enctype:"multipart/form-data",id:"adminForm"},on:{submit:function(s){return s.preventDefault(),t.submit(s)}}},[a("div",{staticClass:"col-md-4"},[a("uploader",{attrs:{"file-name":"admin_image"}})],1),t._v(" "),a("div",{staticClass:"col-md-8"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),a("div",{staticClass:"form-group pull-right"},[a("button",{staticClass:"btn btn-info",class:{disabled:t.loading.isLoading},attrs:{type:"submit"},domProps:{innerHTML:t._s(t.loading.value)}},[t._v("\n\t\t\t\t\t\t"+t._s(t.loading.value)+"\n\t\t\t\t\t")]),t._v(" "),a("button",{staticClass:"btn btn-default",attrs:{type:"button"},on:{click:t.back}},[t._v("Cancel")])])])])])])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"admin_name"}},[this._v("Name")]),this._v(" "),s("input",{staticClass:"form-control",attrs:{type:"text",name:"admin_name",required:""}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"admin_user"}},[this._v("Username")]),this._v(" "),s("input",{staticClass:"form-control",attrs:{type:"text",name:"admin_user",required:""}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"admin_type"}},[this._v("Type")]),this._v(" "),s("select",{staticClass:"form-control",attrs:{name:"admin_type",required:""}},[s("option",{attrs:{value:"0",selected:""}},[this._v("Co-admin")]),this._v(" "),s("option",{attrs:{value:"1"}},[this._v("Admin")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"admin_pass"}},[this._v("Password")]),this._v(" "),s("input",{staticClass:"form-control",attrs:{type:"password",name:"admin_pass",required:""}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"admin_pass1"}},[this._v("Confirm Password")]),this._v(" "),s("input",{staticClass:"form-control",attrs:{type:"password",name:"admin_pass1",required:""}})])}]}},65:function(t,s,a){var i=a(0)(a(117),a(118),!1,null,null,null);t.exports=i.exports}});