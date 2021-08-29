const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'IBまなぶ',
  tagline: 'IB生徒の為のリソースサイト',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: '501A', // Usually your GitHub org/user name.
  projectName: 'ib-manabu', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'IBまなぶ',
      logo: {
        alt: 'Site Logo',
        src: 'img/Ib-manabu-favicon.png',
      },
      items: [
        { to: '/about', label: 'IBまなぶについて', position: 'left' },
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'リソース',
        },
        { to: '/gakushyu-skill', label: '学習スキル', position: 'left' },        
        { to: '/contributors', label: '協力者', position: 'right' },
        { to: '/blog', label: 'アップデート', position: 'right' },
        {
          href: 'https://github.com/facebook/docusaurus',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'light',
      links: [
        {
          title: 'IBまなぶ関連',
          items: [
            {
              label: 'IBまなぶについて',
              to: '/about',
            },
            {
              label: 'ブログ・アップデート',
              to: '/blog',
            }
          ],
        },
        {
          title: 'リソース',
          items: [
            {
              label: 'リソース',
              to: '/docs/intro',
            }
          ],
        },
        {
          title: 'コンテンツ提供',
          items: [
            {
              label: 'Google Form',
              href: 'https://forms.gle/N5oUcdqSbW98inYs9',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
        {
          title: '501Aについて',
          items: [
            {
              label: 'ウエブサイト',
              href: 'https://501a.netlify.app',
            },
            {
              label: 'Instagram',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'GitHub',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} IBまなぶ, Inc. Developed By 501A.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/501A-Designs/ib-manabu',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/501A-Designs/ib-manabu',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  i18n: {
    defaultLocale: 'ja',
    locales: ['ja', 'en'],
  },
};
