import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'
import { presetDaisy } from "unocss-preset-daisy";
import { presetGrid } from 'unocss-preset-grid';
import { presetOnu } from 'onu-ui';

export default defineConfig({
  shortcuts: [
    ['btn', 'px-4 py-1 rounded inline-block bg-teal-600 text-white cursor-pointer hover:bg-teal-700 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50'],
    ['icon-btn', 'text-[0.9em] inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 hover:text-teal-600 !outline-none'],
    ['menu-item','w-10 hover:bg-white/10 color-white rd-9 my-0.8'],
    ['menu-item-active','w-10 bg-white/10 color-white rd-9 my-0.8']
  ],
  presets: [
    presetUno(),
    presetGrid(),
    presetAttributify(),
    presetOnu(),
    presetIcons({
      scale: 1.2,
      warn: true,
    }),
    presetWebFonts({
      provider: 'google', // 默认提供者
      fonts: {
        // 这些将扩展默认主题
        sans: 'Roboto',
        mono: ['Fira Code', 'Fira Mono:400,700'],
        // 自定义的
        lobster: 'Lobster',
        lato: [
          {
            name: 'Lato',
            weights: ['400', '700'],
            italic: true
          },
          {
            name: 'sans-serif',
            provider: 'none'
          }
        ]
      }
    }),
    presetDaisy({
      themes: true,
    }),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
  safelist: 'prose m-auto text-left'?.split(' '),
})
