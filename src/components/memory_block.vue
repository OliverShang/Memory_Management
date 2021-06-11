<template>
<!--用于显示4个内存块的状态-->
<div class="memory-block">
<!--  <span>内存块</span>-->
<!--  <h4 id="title" >内存块</h4>-->
  <el-card class="box-card" shadow="hover" style="background-color: rgba(255, 255, 255, 0.29)">
    <div slot="header" class="clearfix">
      <span>内存块信息</span>
    </div>
      <el-table :data="blocks" style="width: 100%" stripe>
        <el-table-column prop="id" label="内存块" width="110" align="center"></el-table-column>
        <el-table-column prop="state" label="内存块状态" width="110" align="center"></el-table-column>
        <el-table-column prop="current_instruction" label="执行指令号" width="110" align="center"></el-table-column>
        <el-table-column prop="current_page" label="执行页数" width="110" align="center"></el-table-column>
      </el-table>
  </el-card>
</div>
</template>

<script>
export default {
  name: "memory_block",
  data(){
    return{
      total_blocks: 4,
      blocks: [
        {id: 1, state: "空闲", current_page: -1, current_instruction: -1},
        {id: 2, state: "空闲", current_page: -1, current_instruction: -1},
        {id: 3, state: "空闲", current_page: -1, current_instruction: -1},
        {id: 4, state: "空闲", current_page: -1, current_instruction: -1},
      ],
      total_pages: 32,
      page_instruction_num: 10,
    }

  },
}
</script>

<style scoped>

#title{
  text-align: left;
  vertical-align: top;
}
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both
}

.box-card {
  width: 480px;
  /*height: 200px;*/
}

.memory-block{
  border-width: 2px;
  border-radius: 4px;
  border-style: groove;
  border-color: rgb(170, 170, 177);
}
</style>