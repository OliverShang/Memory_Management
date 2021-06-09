<template>
  <div id="app">
    <el-container>
      <el-header >
        <el-space alignment="flex-start">
        <a href="https://github.com/olivershang">
          <el-image src="https://z3.ax1x.com/2021/06/08/2BHRPI.png"
          style="width: 60px; height: 60px; float: left;"
          target="_blank"></el-image>
        </a>
        <div style="float: right; margin-top: 25px">
          内存管理-请求分页分配方式
          <el-link type="info" href="https://github.com/olivershang">说明文档</el-link>
        </div>

        </el-space>
      </el-header>
      <el-container>
        <el-aside width="200px"><control_block ref="control_block"></control_block></el-aside>
        <el-main>
          <el-space alignment="flex-start">
            <memory_block  ref="memory_block"></memory_block>

          </el-space>
        </el-main>
      </el-container>


    </el-container>

  </div >
</template>

<script>
import memory_block from './components/memory_block.vue'
import control_component from "@/components/control_component";

export default {
  name: 'App',
  components: {
    memory_block,
    control_component,
  },
  data(){

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
</style>
