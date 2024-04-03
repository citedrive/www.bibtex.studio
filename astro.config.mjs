import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import sitemap from "@astrojs/sitemap";
const site = 'https://bibtex.eu/';


// https://astro.build/config
export default defineConfig({
  site,
  integrations: [starlight({
    title: 'BibTeX Studio',
    logo: {
      light: './src/assets/images/logo.svg',
      dark: './src/assets/images/logo_dark.svg',
      replacesTitle: true
    },
    social: {
      github: 'https://github.com/citedrive/bibtex.studio',
      twitter: 'https://twitter.com/bibtex_eu '
    },
    defaultLocale: 'root',
    editLink: {
      baseUrl: 'https://github.com/citedrive/bibtex.eu/edit/main/'
    },
    locales: {
      root: {
        label: 'English',
        lang: 'en' // lang is required for root locales
      },
      de: {
        label: 'Deutsch',
        lang: 'de-DE'
      },
      cs: {
        label: 'Čeština',
        lang: 'cs-CZ'
      },
      es: {
        label: 'Español',
        lang: 'es-ES'
      },
      pt: {
        label: 'Português',
        lang: 'pt-PT'
      },
      fr: {
        label: 'Français',
        lang: 'fr-FR'
      },
      sv: {
        label: 'Svenska',
        lang: 'sv-SE'
      },
      tr: {
        label: 'Türkçe',
        lang: 'tr-TR'
      },
      "zh-cn": {
        label: '简体中文',
        lang: 'zh-CN'
      },
      da: {
        label: 'Dansk',
        lang: 'da-DK'
      },
      it: {
        label: 'Italiano',
        lang: 'it-IT'
      },
      ja: {
        label: '日本語',
        lang: 'ja-JP'
      },
      ko: {
        label: '한국어',
        lang: 'ko-KR'
      },
      no: {
        label: 'Norsk',
        lang: 'no-NO'
      },
      ru: {
        label: 'Русский',
        lang: 'ru-RU'
      }
    },
    sidebar: []
  }), sitemap()]
});