import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from 'path'
import Pages from 'vite-plugin-pages'
import Layouts from 'vite-plugin-vue-layouts'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import VueI18nPlugin from '@intlify/unplugin-vue-i18n/vite'
import { VitePluginFonts } from 'vite-plugin-fonts'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Pages({
      exclude: ['**/components/*.vue', '**/features/*.vue']
    }),
    Layouts({
      layoutsDirs: 'src/layouts'
    }),
    Components({
      dts: 'src/auto-components.d.ts'
    }),
    AutoImport({
      imports: ['vue-i18n', 'vue', 'vue-router', '@vueuse/core'],
      dts: 'src/auto-imports.d.ts'
    }),
    VueI18nPlugin({
      include: path.resolve(__dirname, './src/locales/**')
    }),
    VitePluginFonts({
      google: {
        families: ['Prompt']
      }
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  }
})
