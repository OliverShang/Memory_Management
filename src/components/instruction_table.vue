<template>
  <div class="instruction_table">
    <el-table :data="instruction_table_data" stripe style="width: 50%">
      <el-table-column prop="instruction_id" label="指令" align="center"></el-table-column>
      <el-table-column prop="instruction_address" label="地址" align="center"></el-table-column>
      <el-table-column prop="missing_page" label="缺页" align="center"></el-table-column>
      <el-table-column prop="swap_page" label="换出页" align="center"></el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "instruction_table",
  data(){
    return{
      instruction_table_data: []
    }
  },
}
</script>

<style scoped>

</style>