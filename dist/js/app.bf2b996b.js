(function(t){function e(e){for(var n,o,c=e[0],a=e[1],l=e[2],_=0,h=[];_<c.length;_++)o=c[_],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&h.push(r[o][0]),r[o]=0;for(n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n]);u&&u(e);while(h.length)h.shift()();return s.push.apply(s,l||[]),i()}function i(){for(var t,e=0;e<s.length;e++){for(var i=s[e],n=!0,c=1;c<i.length;c++){var a=i[c];0!==r[a]&&(n=!1)}n&&(s.splice(e--,1),t=o(o.s=i[0]))}return t}var n={},r={app:0},s=[];function o(e){if(n[e])return n[e].exports;var i=n[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.m=t,o.c=n,o.d=function(t,e,i){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(o.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(i,n,function(e){return t[e]}.bind(null,n));return i},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],a=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var u=a;s.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"034f":function(t,e,i){"use strict";i("85ec")},"2c0a":function(t,e,i){"use strict";i("c4b2")},"31ae":function(t,e,i){},"527e":function(t,e,i){},"56d7":function(t,e,i){"use strict";i.r(e);i("e260"),i("e6cf"),i("cca6"),i("a79d");var n=i("2b0e"),r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("el-container",[i("el-header",[i("a",{attrs:{href:"https://github.com/olivershang"}},[i("el-image",{staticStyle:{width:"60px",height:"60px",float:"left"},attrs:{src:"https://z3.ax1x.com/2021/06/08/2BHRPI.png",target:"_blank"}})],1),i("div",{staticStyle:{float:"right","margin-top":"25px"}},[t._v(" 内存管理-请求分页分配方式 "),i("el-link",{attrs:{type:"info",href:"https://github.com/olivershang"}},[t._v("说明文档")])],1)]),i("el-container",[i("el-aside",{attrs:{width:"200px"}},[i("control_component",{ref:"control_component",attrs:{c_executed_percentage:t.executed_percentage,c_missing_pages:t.missing_pages,c_missing_page_percentage:t.missing_page_percentage,c_executing:t.executing,c_finished:t.finished},on:{"single-step":t.executeOneInstruction,"multiple-steps":t.executeAllInstructions,"compare-algorithms":t.compareAlgorithms}})],1),i("el-main",{attrs:{direction:"horizontal"}},[i("div",{staticClass:"div-style"},[i("memory_block",{ref:"memory_block"}),i("instruction_table",{ref:"instruction_table"})],1),i("div",{staticClass:"charts"},[i("ve-line",{attrs:{data:t.chartData,settings:t.chartSettings}})],1)])],1)],1)],1)},s=[],o=i("b85c"),c=(i("a434"),function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("el-card",{staticClass:"box-card",attrs:{shadow:"hover"}},[i("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[i("span",[t._v("内存块信息")])]),i("el-table",{staticStyle:{width:"100%"},attrs:{data:t.blocks,stripe:""}},[i("el-table-column",{attrs:{prop:"id",label:"内存块",width:"110",align:"center"}}),i("el-table-column",{attrs:{prop:"state",label:"内存块状态",width:"110",align:"center"}}),i("el-table-column",{attrs:{prop:"current_instruction",label:"执行指令号",width:"110",align:"center"}}),i("el-table-column",{attrs:{prop:"current_page",label:"执行页数",width:"110",align:"center"}})],1)],1)],1)}),a=[],l={name:"memory_block",data:function(){return{total_blocks:4,blocks:[{id:1,state:"空闲",current_page:-1,current_instruction:-1},{id:2,state:"空闲",current_page:-1,current_instruction:-1},{id:3,state:"空闲",current_page:-1,current_instruction:-1},{id:4,state:"空闲",current_page:-1,current_instruction:-1}],total_pages:32,page_instruction_num:10}}},u=l,_=(i("9610"),i("2877")),h=Object(_["a"])(u,c,a,!1,null,"0f1a0542",null),p=h.exports,m=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticStyle:{width:"180px"}},[i("el-divider",[i("i",{staticClass:"el-icon-s-data"})]),i("div",{staticClass:"delineated"},[i("div",{staticClass:"item_name"},[i("div",[t._v("作业指令总数:"+t._s(t.total_instruction_num))]),i("el-divider"),i("div",[t._v("执行进度")]),i("div",[i("el-progress",{attrs:{percentage:t.c_executed_percentage,color:t.colorScheme}})],1)],1)]),i("el-divider",[i("i",{staticClass:"el-icon-s-data"})]),i("div",{staticClass:"delineated"},[i("div",{staticClass:"item_name"},[i("div",[t._v("缺页数:"+t._s(t.c_missing_pages))]),i("el-divider"),i("div",[t._v("缺页率:"+t._s(t.c_missing_page_percentage)+"%")])],1)]),i("el-divider",[i("i",{staticClass:"el-icon-cpu"})]),i("div",{staticClass:"delineated"},[i("div",{staticClass:"item_name"},[t._v("置换算法")]),i("el-select",{attrs:{placeholder:"请选择置换算法",disabled:t.c_executing},model:{value:t.choice_algorithm,callback:function(e){t.choice_algorithm=e},expression:"choice_algorithm"}},t._l(t.algorithms,(function(t){return i("el-option",{key:t.algorithm_id,attrs:{label:t.algorithm_name,value:t.algorithm_name}})})),1),i("br"),i("el-divider"),i("div",[i("el-button",{staticClass:"buttons",attrs:{type:"primary",size:"small",round:"",disabled:t.c_finished},on:{click:t.singleStep}},[t._v("单步执行")]),i("el-button",{staticClass:"buttons",attrs:{type:"primary",size:"small",round:"",disabled:t.c_finished},on:{click:t.multipleSteps}},[t._v("连续执行")])],1),i("div",[i("br"),i("el-button",{staticClass:"buttons",attrs:{type:"warning",size:"medium",round:""},on:{click:t.reset}},[t._v("重置")])],1)],1)],1)},d=[],g={name:"control_component",props:["c_executed_percentage","c_missing_pages","c_missing_page_percentage","c_finished","c_executing"],data:function(){return{total_instruction_num:320,algorithms:[{algorithm_id:0,algorithm_name:"FIFO"},{algorithm_id:1,algorithm_name:"LRU"}],choice_algorithm:"FIFO"}},methods:{colorScheme:function(t){return t<30?"#909399":t<70?"#e6a23c":"#67c23a"},reset:function(){location.reload()},singleStep:function(){this.$emit("single-step")},multipleSteps:function(){this.$emit("multiple-steps")},compareTwoAlgorithms:function(){this.$emit("compare-algorithms")}}},f=g,b=(i("2c0a"),Object(_["a"])(f,m,d,!1,null,"f20cec1e",null)),v=b.exports,x=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"instruction_table"},[i("el-card",{attrs:{shadow:"hover"}},[i("el-table",{staticStyle:{width:"100%"},attrs:{data:t.instruction_table_data,stripe:"","max-height":"295px"}},[i("el-table-column",{attrs:{prop:"index",label:"序号",align:"center"}}),i("el-table-column",{attrs:{prop:"instruction_id",label:"指令",align:"center"}}),i("el-table-column",{attrs:{prop:"missing_page",label:"缺页",align:"center"}}),i("el-table-column",{attrs:{prop:"swap_page",label:"换出页",align:"center"}})],1)],1)],1)},y=[],k={name:"instruction_table",data:function(){return{instruction_table_data:[]}},methods:{addInstruction:function(t,e,i,n){this.instruction_table_data.push({index:t,instruction_id:e,missing_page:i,swap_page:n})}}},O=k,I=(i("87a5"),Object(_["a"])(O,x,y,!1,null,"4501e2a8",null)),w=I.exports,F={name:"App",components:{memory_block:p,control_component:v,instruction_table:w},data:function(){return this.chartSettings={xAxisType:["value"],xAxisName:["指令条数"],yAxisType:["percent"],yAxisName:["缺页率"]},{instruction_execution_list:[],LRU_memory_allocation:[],current_pointer:0,FIFO_pointer:0,executed_percentage:0,missing_pages:0,missing_page_percentage:0,finished:!1,executing:!1,total_instruction_num:320,timer:"",record_interval:0,FIFO_ended:!1,chartData:{columns:["指令条数"],rows:[]}}},methods:{randIntBetween:function(t,e){var i=Math.random();while(1===i)i=Math.random();return t+Math.floor(i*(e-t))},createTimer:function(t){this.timer=setInterval(this.executeOneInstruction,t)},generateInstructionOrder:function(){var t=this.randIntBetween(Math.floor(320/3),Math.floor(640/3)),e=1;this.instruction_execution_list.push(t),e+=1,e<=320&&(this.instruction_execution_list.push(t+1),e+=1);while(e<320){var i=this.randIntBetween(0,t-1);if(this.instruction_execution_list.push(i),e+=1,e>320)break;if(this.instruction_execution_list.push(i+1),e+=1,e>320)break;if(i=this.randIntBetween(t+1,318),this.instruction_execution_list.push(i),e+=1,e>320)break;if(this.instruction_execution_list.push(i+1),e+=1,e>320)break}},executeOneInstruction:function(){var t=Math.floor(this.instruction_execution_list[this.current_pointer]/this.$refs.memory_block.page_instruction_num);console.log("第"+this.instruction_execution_list[this.current_pointer]+"条指令的所在页面为"+t);var e,i=!1,n=Object(o["a"])(this.$refs.memory_block.blocks);try{for(n.s();!(e=n.n()).done;){var r=e.value;t===r.current_page&&(i=!0,console.log("第"+t+"页已在内存中！"))}}catch(p){n.e(p)}finally{n.f()}if(!1===i&&(this.missingPageIncrement(),this.computeMissingPagePercentage()),!0===i&&"FIFO"===this.$refs.control_component.choice_algorithm&&this.$refs.instruction_table.addInstruction(this.current_pointer,this.instruction_execution_list[this.current_pointer],"False",-1),!1===i&&"FIFO"===this.$refs.control_component.choice_algorithm&&(this.$refs.instruction_table.addInstruction(this.current_pointer,this.instruction_execution_list[this.current_pointer],"True",this.$refs.memory_block.blocks[this.FIFO_pointer].current_page),this.$refs.memory_block.blocks[this.FIFO_pointer].state="占用",this.$refs.memory_block.blocks[this.FIFO_pointer].current_page=t,this.$refs.memory_block.blocks[this.FIFO_pointer].current_instruction=this.instruction_execution_list[this.current_pointer],this.FIFO_pointer++,this.FIFO_pointer=this.FIFO_pointer%4),!0===i&&"LRU"===this.$refs.control_component.choice_algorithm){var s=this.LRU_memory_allocation.indexOf(t);this.LRU_memory_allocation.splice(s,1),this.LRU_memory_allocation.push(t),this.$refs.instruction_table.addInstruction(this.current_pointer,this.instruction_execution_list[this.current_pointer],"False",-1)}if(!1===i&&"LRU"===this.$refs.control_component.choice_algorithm){var c=4===this.LRU_memory_allocation.length?this.LRU_memory_allocation[0]:-1;if(this.$refs.instruction_table.addInstruction(this.current_pointer,this.instruction_execution_list[this.current_pointer],"True",c),4===this.LRU_memory_allocation.length){var a=this.LRU_memory_allocation.indexOf(c);this.LRU_memory_allocation.splice(a,1),this.LRU_memory_allocation.push(t)}else this.LRU_memory_allocation.push(t);var l=-1;for(var u in this.$refs.memory_block.blocks)if(c===this.$refs.memory_block.blocks[u].current_page){l=u;break}this.$refs.memory_block.blocks[l].state="占用",this.$refs.memory_block.blocks[l].current_page=t,this.$refs.memory_block.blocks[l].current_instruction=this.instruction_execution_list[this.current_pointer]}if(this.current_pointer++,this.computeExecutedPercentage(),!this.record_interval){var _=this.$refs.control_component.choice_algorithm;1===this.chartData.columns.length&&this.chartData.columns.push(_);var h={"指令条数":this.current_pointer};h[_]=this.missing_page_percentage/100,this.chartData.rows.push(h)}if(this.record_interval++,this.record_interval%=10,this.checkEnd())return this.$notify({title:"成功",message:"指令已执行完成",type:"success"}),this.executing=!1,this.finished=!0,"FIFO"===this.$refs.control_component.choice_algorithm&&(this.FIFO_ended=!0),void clearInterval(this.timer)},executeAllInstructions:function(){this.executing=!0,this.checkEnd()||this.createTimer(50)},checkEnd:function(){return!(this.current_pointer<this.$refs.control_component.total_instruction_num)&&(console.log("全部指令执行完成！"),this.finished=!0,!0)},missingPageIncrement:function(){this.missing_pages++},computeExecutedPercentage:function(){this.executed_percentage=Math.floor(100*this.current_pointer/this.total_instruction_num)},computeMissingPagePercentage:function(){0===this.current_pointer?this.missing_page_percentage=0:this.missing_page_percentage=Math.floor(100*this.missing_pages/this.current_pointer)}},mounted:function(){this.generateInstructionOrder()}},$=F,S=(i("034f"),Object(_["a"])($,r,s,!1,null,null,null)),C=S.exports,P=(i("ed2c"),i("5c96")),R=i.n(P),j=(i("0fae"),i("2819")),L=i.n(j);n["default"].use(L.a),n["default"].use(R.a),n["default"].config.productionTip=!1,new n["default"]({render:function(t){return t(C)}}).$mount("#app")},"85ec":function(t,e,i){},"87a5":function(t,e,i){"use strict";i("31ae")},9610:function(t,e,i){"use strict";i("527e")},c4b2:function(t,e,i){},ed2c:function(t,e,i){}});
//# sourceMappingURL=app.bf2b996b.js.map