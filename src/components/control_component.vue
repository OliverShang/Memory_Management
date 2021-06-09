<template>
  <div>
    <el-divider><i class="el-icon-s-data"></i></el-divider>
    <div class="delineated">
      <div class="item_name">
        <div>作业指令总数:{{total_instruction_num}}</div>
        <el-divider></el-divider>
        <div>已执行指令数:{{executed_instruction_num}}</div>
<!--        <div>正在执行的指令:{{current_instruction}}</div>-->
      </div>
    </div>
    <el-divider><i class="el-icon-s-data"></i></el-divider>
    <div class="delineated">
      <div class="item_name">
        <div>缺页数:{{pages_missing}}</div>
        <el-divider></el-divider>
        <div>缺页率:{{missing_page_percentage}}%</div>
      </div>
    </div>
    <el-divider><i class="el-icon-cpu"></i></el-divider>

    <div class="delineated">
      <div class="item_name">置换算法</div>
      <el-select v-model="choice_algorithm" placeholder="请选择置换算法">
        <el-option
            v-for="algo in algorithms"
            :key="algo.algorithm_id"
            :label="algo.algorithm_name"
            :value="algo.algorithm_name">
        </el-option>
      </el-select>
      <br/>
      <el-divider></el-divider>
      <div>
      <el-button type="primary" size="small" class="buttons" round>单步执行</el-button>

      <el-button type="primary" size="small" class="buttons" round>连续执行</el-button>
      </div>
      <div>
        <br>
        <el-button type="warning" size="midium" class="buttons" round>重置</el-button>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "control_component",
  data(){
    return{
      total_instruction_num: 320,
      current_instruction: 0,
      executed_instruction_num: 0,
      algorithms: [
        {
          algorithm_id: 0,
          algorithm_name: "FIFO"
        },
        {
         algorithm_id: 1,
         algorithm_name: "LRU",
        },
      ],
      choice_algorithm: "LRU",
      pages_missing: 0,
      missing_page_percentage: 0,//百分数
    }
  }
}
</script>

<style scoped>
.item_name{

}
.my-icon-run{
  background: url("https://z3.ax1x.com/2021/06/09/26KbQJ.png") center no-repeat;
}

.buttons{

}
</style>