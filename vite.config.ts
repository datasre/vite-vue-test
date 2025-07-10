/*
 * @Description  : 
 * @Version      : 1.0
 * @Author       : he_jian
 * @Date         : 2025-07-09 15:20:33
 * @LastEditors  : he_jian
 * @LastEditTime : 2025-07-10 14:57:31
 * @FilePath     : \\vite-vue-test\\vite.config.ts
 * Copyright (c) 2025 by he_jian, All Rights Reserved. 
 */
/// <reference types="vitest" />
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  base: '/vite-vue-test/',
  plugins: [vue()],
  test:{
    environment: 'jsdom',
    coverage:{
      reporter: ['text', 'json', 'html'],
      // 设置覆盖文件夹
      reportsDirectory: './coverage',
      // 设置代码覆盖率阈值
      thresholds: {
        lines: 75,
        functions: 75,
        branches: 75,
        statements: 75,
        perFile: true,
      }
    }
  }
})
