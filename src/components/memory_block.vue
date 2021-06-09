<template>
<!--用于显示4个内存块的状态-->
<div>
<!--  <span>内存块</span>-->
<!--  <h4 id="title" >内存块</h4>-->
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span>内存块信息</span>
<!--      <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>-->
    </div>
    <div v-for="index in 4" class="text item">
      <span>{{'内存块 ' + index }}</span>
      <div>执行指令号：{{}}</div>
    </div>
  </el-card>
</div>
</template>

<script>7
export default {
  name: "memory_block"
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
</style>