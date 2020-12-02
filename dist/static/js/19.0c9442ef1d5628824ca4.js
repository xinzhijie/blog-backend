webpackJsonp([19],{i2i2:function(t,e){},pyKs:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-form",{attrs:{inline:!0}},[a("el-form-item",[a("el-input",{attrs:{placeholder:"标题",clearable:""},model:{value:t.dataForm.title,callback:function(e){t.$set(t.dataForm,"title",e)},expression:"dataForm.title"}})],1),t._v(" "),a("el-form-item",[a("el-button",{on:{click:function(e){return t.getDataList()}}},[t._v("查询")]),t._v(" "),a("el-button",{attrs:{type:"danger",disabled:t.dataListSelections.length<=0},on:{click:function(e){return t.deleteHandle()}}},[t._v("批量删除")]),t._v(" "),a("el-button",{attrs:{type:"warning"},on:{click:function(e){return t.refreshCache()}}},[t._v("刷新缓存")])],1)],1),t._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.dataListLoading,expression:"dataListLoading"}],staticStyle:{width:"100%"},attrs:{data:t.dataList,border:""},on:{"selection-change":t.selectionChangeHandle}},[a("el-table-column",{attrs:{type:"selection","header-align":"center",align:"center",width:"50"}}),t._v(" "),a("el-table-column",{attrs:{prop:"id","header-align":"center",align:"center",width:"50",label:"编号"}}),t._v(" "),a("el-table-column",{attrs:{prop:"title","header-align":"center",align:"center",label:"博文标题",width:"300"}}),t._v(" "),a("el-table-column",{attrs:{prop:"categoryListStr","header-align":"center",align:"center",label:"分类",width:"250"}}),t._v(" "),a("el-table-column",{attrs:{prop:"tagList","header-align":"center",align:"center",label:"标签",width:"300"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-row",t._l(e.row.tagList,function(e){return a("el-button",{key:e.id,attrs:{size:"mini"}},[t._v(t._s(e.name))])}),1)]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"readNum","header-align":"center",align:"center",width:"80",label:"浏览"}}),t._v(" "),a("el-table-column",{attrs:{prop:"likeNum","header-align":"center",align:"center",width:"80",label:"喜欢"}}),t._v(" "),a("el-table-column",{attrs:{prop:"recommend","header-align":"center",align:"center",label:"推荐"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-switch",{attrs:{"active-color":"#13ce66"},on:{change:function(a){return t.updateRecommend(e.row.id,e.row.recommend)}},model:{value:e.row.recommend,callback:function(a){t.$set(e.row,"recommend",a)},expression:"scope.row.recommend"}})]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"recommend","header-align":"center",align:"center",label:"置顶"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-switch",{attrs:{"active-color":"#13ce66"},on:{change:function(a){return t.updateTop(e.row.id,e.row.top)}},model:{value:e.row.top,callback:function(a){t.$set(e.row,"top",a)},expression:"scope.row.top"}})]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"recommend","header-align":"center",align:"center",label:"状态"},scopedSlots:t._u([{key:"default",fn:function(e){return[e.row.publish?t._e():a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"点击发布",placement:"top"}},[a("el-button",{attrs:{type:"info",size:"mini"},on:{click:function(a){return t.updatePublish(e.row.id,!0)}}},[t._v("未发布")])],1),t._v(" "),e.row.publish?a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"点击下架",placement:"top"}},[!0===e.row.publish?a("el-button",{attrs:{type:"success",size:"mini"},on:{click:function(a){return t.updatePublish(e.row.id,!1)}}},[t._v("已发布")]):t._e()],1):t._e()]}}])}),t._v(" "),a("el-table-column",{attrs:{fixed:"right","header-align":"center",align:"center",width:"150",label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){return t.addOrUpdateHandle(e.row.id)}}},[t._v("修改")]),t._v(" "),a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){return t.deleteHandle(e.row.id)}}},[t._v("删除")])]}}])})],1),t._v(" "),a("el-pagination",{attrs:{"current-page":t.pageIndex,"page-sizes":[10,20,50,100],"page-size":t.pageSize,total:t.totalPage,layout:"total, sizes, prev, pager, next, jumper"},on:{"size-change":t.sizeChangeHandle,"current-change":t.currentChangeHandle}})],1)},staticRenderFns:[]};var i=a("VU/8")({data:function(){return{dataForm:{title:""},dataList:[],pageIndex:1,pageSize:10,totalPage:0,dataListLoading:!1,dataListSelections:[]}},activated:function(){this.getDataList()},methods:{getDataList:function(){var t=this;this.dataListLoading=!0,this.$http({url:this.$http.adornUrl("/admin/article/list"),method:"get",params:this.$http.adornParams({page:this.pageIndex,limit:this.pageSize,title:this.dataForm.title})}).then(function(e){var a=e.data;a&&200===a.code?(t.dataList=a.page.list,t.totalPage=a.page.totalCount):(t.dataList=[],t.totalPage=0),t.dataListLoading=!1})},sizeChangeHandle:function(t){this.pageSize=t,this.pageIndex=1,this.getDataList()},currentChangeHandle:function(t){this.pageIndex=t,this.getDataList()},selectionChangeHandle:function(t){this.dataListSelections=t},addOrUpdateHandle:function(t){this.$router.push({path:"article/article/update/"+t})},deleteHandle:function(t){var e=this,a=t?[t]:this.dataListSelections.map(function(t){return t.id});this.$confirm("确定对[id="+a.join(",")+"]进行["+(t?"删除":"批量删除")+"]操作?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){e.$http({url:e.$http.adornUrl("/admin/article/delete"),method:"delete",data:e.$http.adornData(a,!1)}).then(function(t){var a=t.data;a&&200===a.code?e.$message({message:"操作成功",type:"success",duration:1500,onClose:function(){e.getDataList()}}):e.$message.error(a.msg)})}).catch(function(){})},updateRecommend:function(t,e){var a={id:t,recommend:e};this.updateStatus(a)},updateTop:function(t,e){var a={id:t,top:e};this.updateStatus(a)},updatePublish:function(t,e){var a={id:t,publish:e};this.updateStatus(a)},updateStatus:function(t){var e=this;this.$http({url:this.$http.adornUrl("/admin/article/update/status"),method:"put",data:this.$http.adornData(t)}).then(function(t){var a=t.data;a&&200===a.code?(e.$message.success("更新成功"),e.getDataList()):e.$message.error(a.msg)})},refreshCache:function(){var t=this;this.$http({url:this.$http.adornUrl("/admin/article/cache/refresh"),method:"delete"}).then(function(e){var a=e.data;a&&200===a.code?t.$message.success("刷新成功"):t.$message.error(a.msg)})}}},n,!1,function(t){a("i2i2")},"data-v-684563c3",null);e.default=i.exports}});