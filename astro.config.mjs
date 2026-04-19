// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightImageZoom from "starlight-image-zoom";
import starlightVersions from "starlight-versions";

// https://astro.build/config
export default defineConfig({
  site: 'https://docs.kovexon.com',
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
          label: "Getting Started",
          autogenerate: {
            directory: "start-here",
          },
          translations: {
            de: "Hier Starten",
            en: "Getting Started",
          },
        },
        {
          label: "Komponenten",
          autogenerate: { directory: "components" },
          translations: {
            de: "Komponenten",
            en: "Components",
          },
        },
        {
          label: "Website Settings",
          slug: "website-settings",
          translations: {
            de: "Website-Einstellungen",
            en: "Website Settings",
          },
        },
        {
          label: "Holiday Notice",
          slug: "holiday-notice",
          translations: {
            de: "Urlaubsbenachrichtigung",
            en: "Holiday Notice",
          },
        },
        {
          label: "Promo Banner",
          slug: "promo-banner",
          translations: {
            de: "Promo Banner",
            en: "Promo Banner",
          },
        },
      ],
    }),
  ],
});
