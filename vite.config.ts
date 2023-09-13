/*
 * @Author: Yaowen Liu
 * @Date: 2022-03-11 16:26:27
 * @LastEditors: didiplus 
 * @LastEditTime: 2023-09-13 21:50:40
 */
import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const target = process.env.TARGET

let buildConfig: Record<string, unknown> = {
  outDir: 'netlify-page',
}

if (target === 'npm') {
  buildConfig = {
    lib: {
      entry: path.resolve(__dirname, 'lib/index.ts'),
      name: 'MyLib',
      fileName: (format: any) => `my-lib.${format}.js`,
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
  }
}

export default defineConfig({
  build: { ...buildConfig },
  envDir: path.resolve(__dirname,'./env'),
  plugins: [vue()],
  server: {
    open: true,
  },
})
