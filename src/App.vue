<template>
  <div id="app">
    <el-container>
      <el-header >
        <a href="https://github.com/olivershang">
          <el-image src="https://z3.ax1x.com/2021/06/08/2BHRPI.png"
          style="width: 60px; height: 60px; float: left;"
          target="_blank"></el-image>
        </a>
        <div style="float: right; margin-top: 25px">
          内存管理-请求分页分配方式
          <el-link type="info" href="https://github.com/olivershang">说明文档</el-link>
        </div>
      </el-header>
      <el-container direction="horizontal">
        <el-aside width="200px">
          <control_component ref="control_component" @single-step="executeOneInstruction">

          </control_component>
        </el-aside>
        <el-main direction="horizontal">
          <div class="div-style">
            <memory_block  ref="memory_block"></memory_block>
            <instruction_table ref="instruction_table"></instruction_table>
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div >
</template>

<script>
import memory_block from './components/memory_block.vue';
import control_component from "@/components/control_component";
import instruction_table from "@/components/instruction_table";

export default {
  name: 'App',
  components: {
    memory_block,
    control_component,
    instruction_table,
  },
  data(){
    return{
      instruction_execution_list:[],
      page_history:[],
      current_pointer: 0,
      FIFO_pointer: 0,
    }
  },
  created() {

  },
  methods:{
    //  产生[min,max)间的随机数
    randIntBetween(min,max) {
      //  Math.random() 为0~1的随机数
      let x = Math.random();
      // 保持左闭右开
      while(x===1){
        x = Math.random();
      }
      return min+Math.floor(x * (max - min));
    },
    createTimer: ()=>{
      this.timer = setInterval(this.executeOneInstruction, 120);//  时间单位毫秒
    },
    generateInstructionOrder() {
         // 生成指令序列
        let start_point = this.randIntBetween(Math.floor(320 / 3), Math.floor(320 * 2 / 3));
        let pointer = 1;
        this.instruction_execution_list.push(start_point);
        pointer += 1;
        if(pointer <= 320){
            this.instruction_execution_list.push(start_point + 1);
            pointer += 1;
          }
        while(pointer < 320) {
          let tmp = this.randIntBetween(0, start_point - 1);
          // while ((tmp in this.instruction_execution_list)) {
          //   tmp = this.randIntBetween(0, start_point - 1);
          // }
          this.instruction_execution_list.push(tmp);
          pointer += 1;
          if (pointer > 320) {
            break;
          }

          this.instruction_execution_list.push(tmp + 1);
          pointer += 1;
          if (pointer > 320) {
            break;
          }

          tmp = this.randIntBetween(start_point + 1, 320 - 2);
          // while (tmp in this.instruction_execution_list) {
          //   tmp = this.randIntBetween(start_point + 1, 320 - 2);
          // }
          this.instruction_execution_list.push(tmp);
          pointer += 1;
          if (pointer > 320) {
            break;
          }

          this.instruction_execution_list.push(tmp + 1);
          pointer += 1;
          if (pointer > 320) {
            break;
          }
      }
    },
    executeOneInstruction() {
      let logical_page = Math.floor(this.instruction_execution_list[this.current_pointer] / this.$refs.memory_block.page_instruction_num); //  指令所在的逻辑页号
      console.log("第"+this.instruction_execution_list[this.current_pointer]+"条指令的所在页面为"+logical_page);
      let allocated = false;
      // 检测需要的页是否在内存中
      for (let physical_page of this.$refs.memory_block.blocks){
        // console.log(physical_page);
        if(logical_page === physical_page.current_page){
          allocated = true;
          console.log("第"+logical_page+"页已在内存中！");
        }
      }
      // FIFO正常执行
      if(allocated === true && this.$refs.control_component.choice_algorithm==="FIFO"){
        this.$refs.instruction_table.addInstruction(this.current_pointer, this.instruction_execution_list[this.current_pointer], "False",this.$refs.memory_block.blocks[this.FIFO_pointer].current_page);
      }
      // FIFO调页
      if(allocated === false && this.$refs.control_component.choice_algorithm==="FIFO"){
        this.$refs.instruction_table.addInstruction(this.current_pointer, this.instruction_execution_list[this.current_pointer], "True", this.$refs.memory_block.blocks[this.FIFO_pointer].current_page);
        this.$refs.memory_block.blocks[this.FIFO_pointer].state = "占用";
        this.$refs.memory_block.blocks[this.FIFO_pointer].current_page = logical_page;
        this.$refs.memory_block.blocks[this.FIFO_pointer].current_instruction = this.instruction_execution_list[this.current_pointer];
        this.FIFO_pointer++;
      }
      // LRU调页

      this.current_pointer++;
      if(this.checkEnd()){
        this.$notify({title: '成功', message:"指令已执行完成", type: "success"});
      }
    },
    checkEnd() {
      if(this.current_pointer < this.$refs.control_component.total_instruction_num){
        return false;
      }
      console.log("全部指令执行完成！");
      return true;
    }
  },
  mounted() {
    this.generateInstructionOrder();
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 15px;
}
.el-header, .el-footer {
  background-color: #d2d2dc;
  color: #333;
  text-align: center;
  line-height: 10px;
}

.el-container{
  margin-top: 15px;
}
.el-main {
  background-color: #efefef;
  color: #333;
  text-align: center;
  /*line-height: 800px;*/
  min-height: 800px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
.div-style{
  display: flex;
  justify-content: space-around;
  align-items: center;
}
</style>
