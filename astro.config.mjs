// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  site: 'https://iwantsome314.github.io',
  base: '/MyWebpage',
  vite: {
    plugins: [tailwindcss()]
  },

integrations: [
    icon({
      include: {
        'logos': ['*'],
        'skill-icons': ['*'],
        'devicon': ['*'],
        'mdi': ['*'],
        'vscode-icons': ['*']
      }
    })
  ]
}); // Closes defineConfig