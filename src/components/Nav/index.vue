<template>
  <div id="my_menu">
    <el-radio-group v-model="isCollapse" style="margin-bottom: 20px">
      <el-radio-button :label="false">expand</el-radio-button>
      <el-radio-button :label="true">collapse</el-radio-button>
    </el-radio-group>
    <el-menu default-active="2" class="el-menu-vertical-demo" :collapse="isCollapse" @open="handleOpen"
      @close="handleClose">
      <el-menu-item index="1">
        <router-link to="/content">
          <el-icon>
            <location />
          </el-icon>
        </router-link>
        <template #title>
          Navigator One
        </template>
      </el-menu-item>
      <el-menu-item index="2">
        <el-icon :size="50">
          <icon-menu />
        </el-icon>
        <template #title>Navigator Two</template>
      </el-menu-item>
      <el-menu-item index="3" disabled>
        <el-icon>
          <document />
        </el-icon>
        <template #title>Navigator Three</template>
      </el-menu-item>
      <el-menu-item index="4">
        <el-icon :size="200">
          <setting />
        </el-icon>
        <template #title>Navigator Four</template>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script setup>
  import {
    ref
  } from 'vue'
  import {
    Document,
    Menu as IconMenu,
    Location,
    Setting,
  } from '@element-plus/icons-vue'

  name: 'Nav'
  const isCollapse = ref(true)
  const handleOpen = (key, keyPath) => {
    console.log(key, keyPath)
  }
  const handleClose = (key, keyPath) => {
    console.log(key, keyPath)
  }
</script>

<style scoped lang='scss'>
  #my_menu {
    height: 100vh;

    .el-menu-vertical-demo:not(.el-menu--collapse) {
      width: 200px;
      min-height: 400px;
    }
  }
</style>