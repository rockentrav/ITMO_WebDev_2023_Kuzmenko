import UnoCSS from 'unocss/vite';
import presetUno from '@unocss/preset-uno';
import { presetIcons} from 'unocss';
import presetWebFonts from '@unocss/preset-web-fonts';
export default {
  server: {
    port: 8088,
  },

  plugins: [
    UnoCSS({
      presets: [
        presetUno(),
        presetIcons({}),

        presetWebFonts({
          provider: 'google',
          fonts: {
            sans: 'Roboto',
            mono: ['Fira code', 'Fira Mono:400,700'],
            lobster: 'Lobster',
            lato: [
              {
                name: 'Lato',
                weights: ['400', '700'],
                italic: true,
              },
              {
                name: 'sans-serif',
                provider: 'none',
              },
            ],
          },
        }),
      ], // disable default preset
      rules: [
        // your custom rules
      ],
    }),
  ],
};
