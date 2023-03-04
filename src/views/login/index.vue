<template>
  <div class="login-container">
    <el-form v-model="userform" class="login-form">
      <div class="title-container">
        <h3 class="title">用户登录</h3>
      </div>
      <!-- username -->
      <el-form-item>
        <span class="svg-container">
          <el-icon>
            <Avatar />
          </el-icon>
        </span>
        <el-input
          v-model="uername"
          placeholder="uername"
          name="username"
          type="text"
        ></el-input>
      </el-form-item>
      <!-- password -->
      <el-form-item>
        <span class="svg-container">
          <el-icon>
            <Lock />
          </el-icon>
        </span>
        <el-input
          v-model="password"
          placeholder="password"
          name="password"
          type="password"
        >
        </el-input>
        <span class="show-pwd">
          <el-icon>
            <Lock />
          </el-icon>
        </span>
      </el-form-item>
      <!-- 登录按钮 -->
      <el-button type="primary" style="width: 100%; margin-bottom: 30px">
        登录
      </el-button>
    </el-form>
  </div>
</template>

<script setup>
import {} from 'vue'
import { Avatar } from '@element-plus/icons-vue'
</script>

<style lang="scss" scoped></style>
