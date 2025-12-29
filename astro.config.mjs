// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightImageZoom from "starlight-image-zoom";
import starlightVersions from "starlight-versions";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "KOVEXON Docs",
      // Set German as the default language for this site.
      defaultLocale: "de",
      locales: {
        // German docs in `src/content/docs/de/`
        de: {
          label: "Deutsch",
        },
        en: {
          label: "English",
        },
      },
      //   social: [
      //     {
      //       icon: "laptop",
      //       label: "kovexon.com",
      //       href: "https://kovexon.com",
      //     },
      //   ],
      plugins: [
        starlightImageZoom(),
        starlightVersions({
          versions: [
            {
              slug: "1.0",
              redirect: "same-page",
              label: "v1.0",
            },
          ],
          current: {
            label: "latest",
          },
        }),
      ],
      sidebar: [
        {
          label: "Overview",
          slug: "index",
          translations: {
            de: "Übersicht",
            en: "Overview",
          },
        },
        {
          label: "Start Here",
          autogenerate: {
            directory: "start-here",
          },
          translations: {
            de: "Hier Starten",
            en: "Start Here",
          },
        },
        {
          label: "Inhaltsblöcke",
          autogenerate: { directory: "content-blocks" },
          translations: {
            de: "Inhaltsblöcke",
            en: "Content Blocks",
          },
        },
      ],
    }),
  ],
});
