// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "SINER ETs",
      social: {
        github: "https://github.com/c-arena",
      },
      sidebar: [
        {
          label: "SSGE",
          autogenerate: { directory: "ssge" },
        },
      ],
    }),
  ],
});
