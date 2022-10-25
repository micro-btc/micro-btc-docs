import { useConfig } from 'nextra-theme-docs'

/* eslint sort-keys: error */
/**
 * @type {import('nextra-theme-docs').DocsThemeConfig}
 */
export default {
  project: {
    link: 'https://github.com/micro-btc/microbtc-docs'
  },
  chat: {
    icon: <strong></strong>
  },
  logo: <strong>micro-btc</strong>,
  titleSuffix: ' - micro-btc',
  sidebar: {
    defaultMenuCollapsed: true,
  },
  footer: {
    text: <span>MIT {new Date().getFullYear()} © <a href="https://microbtc.dev" target="_blank">Micro BTC</a></span>,
  },
  docsRepositoryBase:
    'https://github.com/shuding/nextra/blob/core/examples/docs',
  editLink: {
    text: 'Edit this page on GitHub'
  },
  getNextSeoProps() {
    const { frontMatter } = useConfig()
    return {
      additionalLinkTags: [
        {
          href: '/apple-icon-180x180.png',
          rel: 'apple-touch-icon',
          sizes: '180x180'
        },
        {
          href: '/android-icon-192x192.png',
          rel: 'icon',
          sizes: '192x192',
          type: 'image/png'
        },
        {
          href: '/favicon-96x96.png',
          rel: 'icon',
          sizes: '96x96',
          type: 'image/png'
        },
        {
          href: '/favicon-32x32.png',
          rel: 'icon',
          sizes: '32x32',
          type: 'image/png'
        },
        {
          href: '/favicon-16x16.png',
          rel: 'icon',
          sizes: '16x16',
          type: 'image/png'
        }
      ],
      additionalMetaTags: [
        { content: 'en', httpEquiv: 'Content-Language' },
        { content: 'Nextra', name: 'apple-mobile-web-app-title' },
        { content: '#fff', name: 'msapplication-TileColor' },
        { content: '/ms-icon-144x144.png', name: 'msapplication-TileImage' }
      ],
      description:
        frontMatter.description || 'Nextra: the Next.js site builder',
      openGraph: {
        images: [
          { url: frontMatter.image || 'https://nextra.vercel.app/og.png' }
        ]
      },
      titleTemplate: '%s – micro-btc',
      twitter: {
        cardType: 'summary_large_image',
        site: 'https://nextra.vercel.app'
      }
    }
  },
  unstable_faviconGlyph: '✦'
}
