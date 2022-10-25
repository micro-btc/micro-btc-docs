import { useConfig } from 'nextra-theme-docs'

/* eslint sort-keys: error */
/**
 * @type {import('nextra-theme-docs').DocsThemeConfig}
 */
export default {
  project: {
    link: 'https://github.com/paulmillr/micro-btc-signer'
  },
  search: {
    component: null
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
    text: <span>MIT {new Date().getFullYear()} © <a href="https://github.com/micro-btc" target="_blank">micro-btc</a></span>,
  },
  docsRepositoryBase:
    'https://github.com/micro-btc/micro-btc-docs',
  editLink: {
    text: 'Edit this page on GitHub'
  },
  head: ({ locale, title, config, meta }) => {
    <>
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />
      
      <meta name="description" content="micro-btc: the minimalist JS Bitcoin library" />
      <meta property="og:title" content="micro-btc: the minimalist JS Bitcoin library" />
      <meta property="og:description" content="micro-btc: the minimalist JS Bitcoin library" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="apple-mobile-web-app-title" content="micro-btc" />
    </>
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
        { content: 'micro-btc', name: 'apple-mobile-web-app-title' },
        { content: '#fff', name: 'msapplication-TileColor' },
        { content: '/ms-icon-144x144.png', name: 'msapplication-TileImage' }
      ],
      description:
        frontMatter.description || 'micro-btc: the minimal JS library for Bitcoin',
      openGraph: {
        images: [
          { url: frontMatter.image || 'https://www.micro-btc.dev/og.png' }
        ]
      },
      titleTemplate: 'Micro-BTC - %s',
      twitter: {
        cardType: 'summary_large_image',
        site: 'https://www.micro-btc.dev'
      }
    }
  },
  unstable_faviconGlyph: '✦'
}
