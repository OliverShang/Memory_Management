<template>
  <div class="instruction_table">
    <el-table :data="table_data" stripe style="width: 50%">
      <el-table-column prop></el-table-column>
    </el-table>

  </div>
</template>

<script>
export default {
  name: "instruction_table",
  data(){
    return{
      table_data: []
    }
  },
  methods:{
    addInstruction:function () {
      
    }
  }
}
</script>

<style scoped>

</style>