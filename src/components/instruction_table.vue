<template>
  <div class="instruction_table">
    <el-card shadow="hover" class="box-card">

      <el-table :data="instruction_table_data" stripe style="width: 100%" max-height="295px">
        <el-table-column prop="index" label="序号" align="center"></el-table-column>
        <el-table-column prop="instruction_id" label="指令" align="center"></el-table-column>
        <el-table-column prop="missing_page" label="缺页" align="center"></el-table-column>
        <el-table-column prop="swap_page" label="换出页" align="center"></el-table-column>
      </el-table>
    </el-card>
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
  methods:{
    addInstruction(id, inst_id, missing, swap){
      this.instruction_table_data.push({index: id, instruction_id: inst_id, missing_page: missing, swap_page: swap});
    }
  }
}
</script>

<style scoped>
.instruction_table{
  width:50%;
}

.box-card{
  background-color: rgba(255, 255, 255, 0.29);
}

.instruction_table {
  background-color: rgba(255, 255, 255, 0.29);
  border-width: 2px;
  border-radius: 4px;
  border-style: groove;
  border-color: rgb(170, 170, 177);
}
</style>