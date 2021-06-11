<template>
  <div style="width: 180px">
    <el-divider><i class="el-icon-s-data"></i></el-divider>
    <div class="delineated">
<!--      TODO: 加入style-->
      <div >
        <div class="item_name1"> <span class="text">作业指令总数:{{total_instruction_num}}</span></div>
        <el-divider></el-divider>
        <div class="item_name2"> <span class="text">执行进度</span></div>
        <div class="item_name2">
          <el-progress :percentage="c_executed_percentage" :color="colorScheme"></el-progress>
        </div>
      </div>
    </div>
    <el-divider><i class="el-icon-s-data"></i></el-divider>
    <div class="delineated">
      <div>
        <div class="item_name1"><span class="text">缺页数:{{c_missing_pages}}</span></div>
        <el-divider></el-divider>
        <div class="item_name2"> <span class="text">缺页率:{{c_missing_page_percentage}}%</span></div>
      </div>
    </div>
    <el-divider><i class="el-icon-cpu"></i></el-divider>

    <div class="delineated">
      <div class="item_name1" > <span class="text">置换算法</span></div>
      <el-select v-model="choice_algorithm" placeholder="请选择置换算法" :disabled="c_executing">
        <el-option
            v-for="algo in algorithms"
            :key="algo.algorithm_id"
            :label="algo.algorithm_name"
            :value="algo.algorithm_name">
        </el-option>
      </el-select>
      <br/>
      <el-divider><i class="el-icon-cpu"></i></el-divider>
      <div>
      <el-button type="primary" @click="singleStep" size="small" class="buttons" round :disabled="c_finished">单步执行</el-button>
        <el-button type="primary" @click="multipleSteps" size="small" class="buttons" round :disabled="c_finished">连续执行</el-button>
      </div>
<!--      <div>-->
<!--        <br>-->
<!--        <el-button type="success" @click="compareTwoAlgorithms" size="small" class="buttons" round :disabled="c_finished">比较FIFO和LRU</el-button>-->
<!--      </div>-->
      <div class="item_name2">
        <br>
        <el-button type="warning" @click="reset" size="medium" class="buttons" round>重置</el-button>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "control_component",
  props: ['c_executed_percentage', 'c_missing_pages', 'c_missing_page_percentage', 'c_finished', 'c_executing'],
  data(){
    return{
      total_instruction_num: 320,
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
      choice_algorithm: "FIFO",
    }
  },
  methods: {
    colorScheme(percentage) {
      if (percentage < 30){
        return '#909399'
      } else if (percentage < 70){
        return '#e6a23c'
      } else{
        return '#67c23a'
      }
    },
    reset() {
      location.reload();
    },
    singleStep() {
      this.$emit('single-step');
    },
    multipleSteps(){
      this.$emit('multiple-steps')
    },
    compareTwoAlgorithms() {
      this.$emit('compare-algorithms')
    }
  },
};
</script>

<style scoped>
.item_name{

}
.my-icon-run{
  background: url("https://z3.ax1x.com/2021/06/09/26KbQJ.png") center no-repeat;
}

.buttons{

}

.delineated{
  border-width: 2px;
  border-radius: 4px;
  border-style: groove;
  border-color: rgb(170, 170, 177);
}

.item_name1{
  margin-top: 10px;
  margin-bottom: 10px;
}

.item_name2{
  margin-bottom: 10px;
}

.text{
  font-size: medium;
  font-family: "PingFang SC";
  font-weight: bold;
}
</style>