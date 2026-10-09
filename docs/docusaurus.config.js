// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Simula Brasil',
  tagline: 'Simulações da ONU ao alcance de toda escola pública',
  favicon: 'img/logo.png',

  url: 'https://igor-rodriguess.github.io',
  baseUrl: '/Simula_Brasil/',
  organizationName: 'igor-rodriguess',
  projectName: 'Simula_Brasil',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  i18n: {
    defaultLocale: 'pt-BR',
    locales: ['pt-BR'],
  },

  // Imagens do WAD ficam em /assets na raiz do repositório e são servidas
  // sem cópia: assets/negocios/x.jpeg -> /negocios/x.jpeg
  staticDirectories: ['static', '../assets'],

  // Guia de estilos: Open Sans como família única (Regular e Bold)
  stylesheets: [
    {
      href: 'https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap',
      type: 'text/css',
    },
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: 'wad',
          routeBasePath: 'wad',
          sidebarPath: './sidebars.js',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // O guia define apenas a versão clara (fundo branco como base)
      colorMode: {
        defaultMode: 'light',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      navbar: {
        title: 'SIMULA BRASIL',
        // Sobre azul, usar a versão branca do símbolo
        logo: {
          alt: 'Símbolo do Simula Brasil',
          src: 'img/logo-branco.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'wadSidebar',
            position: 'left',
            label: 'Documentação',
          },
          {
            to: '/wad/projeto/guia-de-estilos',
            label: 'Guia de estilos',
            position: 'left',
          },
          {
            href: 'https://github.com/igor-rodriguess/Simula_Brasil',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Documentação',
            items: [
              {label: 'Introdução', to: '/wad'},
              {label: 'Visão geral', to: '/wad/visao-geral/escopo'},
              {label: 'Projeto', to: '/wad/projeto/requisitos'},
            ],
          },
          {
            title: 'Equipe',
            items: [
              {label: 'Ademir Júnior', href: 'https://www.linkedin.com/in/ademir-junior-9ba005357/'},
              {label: 'Igor Rodrigues', href: 'https://www.linkedin.com/in/igor-dasilva-rodrigues/'},
              {label: 'Júlia Araujo', href: 'https://www.linkedin.com/in/julia-amanda-gregate-de-araujo/'},
              {label: 'Julia Bezerra', href: 'https://www.linkedin.com/in/julia-jesus-bezerra-a872b5321/'},
            ],
          },
          {
            title: 'Projeto',
            items: [
              {label: 'Repositório', href: 'https://github.com/igor-rodriguess/Simula_Brasil'},
            ],
          },
        ],
        copyright: `Simula Brasil · ${new Date().getFullYear()}`,
      },
      prism: {
        theme: prismThemes.github,
        additionalLanguages: ['sql', 'json'],
      },
    }),
};

export default config;
