module.exports = {
  theme: "cosmos",
  title: "Nibiru Chain",
  locales: {
    "/": {
      lang: "en-US"
    },
  },
  base: process.env.VUEPRESS_BASE || "/",
  head: [
    ['link', { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" }],
    // ['link', { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png" }],
    // ['link', { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16x16.png" }],
    ['link', { rel: "manifest", href: "/site.webmanifest" }],
    ['meta', { name: "msapplication-TileColor", content: "#2e3148" }],
    ['meta', { name: "theme-color", content: "#ffffff" }],
    // ['link', { rel: "icon", type: "image/svg+xml", href: "/favicon-svg.svg" }],
    ['link', { rel: "icon", type: "image/svg+xml", href: "/favicon.ico" }],
    ['link', { rel: "apple-touch-icon-precomposed", href: "/apple-touch-icon-precomposed.png" }],
  ],
  themeConfig: {
    repo: "cosmos/ibc-go",
    docsRepo: "cosmos/ibc-go",
    docsDir: "docs",
    editLinks: true,
    label: "ibc",
    // TODO
    //algolia: {
    //  id: "BH4D9OD16A",
    //  key: "ac317234e6a42074175369b2f42e9754",
    //  index: "ibc-go"
    //},
    // Logo in the top left corner, file in .vuepress/public/
    logo: {
      // src: "https://raw.githubusercontent.com/peterthehan/peterthehan/master/assets/twitter.svg",
      src: "/nibi-logo-onwhite.png",
    },
    versions: [
      // {
      //   "label": "main",
      //   "key": "main"
      // },
    ],
    topbar: {
      banner: true
    },
    sidebar: {
      auto: false,
      nav: [
        {
          title: "About Nibiru",
          children: [
            {
              title: "Overview",
              path: "/",
            },
            {
              title: "Nibiru Blog",
              path: "https://blog.nibiru.fi/"
            },
            {
              title: "FAQ",
              directory: false,
              path: "/about/faq.html"
            },
          ]
        },
        {
          title: "Nibiru Ecosystem",
          children: [
            {
              title: "Nibi-Perps",
              directory: false,
              path: "/ecosystem/nibi-perps.html"
            },
            {
              title: "Nibi-Swap AMM",
              directory: false,
              path: "/ecosystem/nibi-swap.html"
            },
            {
              title: "NUSD Stablecoin",
              directory: false,
              path: "/ecosystem/nusd-stablecoin.html"
            },
            {
              title: "Price Feed Oracles",
              directory: false,
              path: "/ecosystem/price-feed-oracles.html"
            },
            {
              title: "Governance",
              directory: true,
              path: "/ecosystem/gov"
            },
            {
              title: "Block Explorer",
              path: "https://explorer.testnet.nibiru.fi/"
            },
          ]
        },
        {
          title: "Protocol",
          children: [
            {
              title: "Specification Overview",
              directory: false,
              path: "/protocol/spec-overview.html"
            },
            {
              title: "Command-Line Interface (CLI)",
              directory: false,
              path: "/protocol/cli.html"
            },
            {
              title: "Module Reference",
              directory: true,
              path: "/protocol/x",
            },
            {
              title: "Joining Testnet",
              directory: false,
              path: "/protocol/testnet.html"
            },
            {
              title: "TypeScript SDK",
              directory: false,
              path: "/protocol/nibijs.html"
            },
            {
              title: "Python SDK",
              directory: false,
              path: "/protocol/py-sdk.html"
            },
          ]
        },
        {
          title: "Learn More",
          path: "learn",
          children: [
            {
              title: "Tokenomics",
              directory: false,
              path: "/learn/tokenomics.html"
            },
            {
              title: "Glossary",
              directory: false,
              path: "/learn/GLOSSARY.html"
            },
          ]
        }
      ]
    },
    gutter: {
      title: "Help & Support",
      editLink: true,
      chat: {
        title: "Discord",
        text: "Chat with Nibiru developers on Discord.",
        url: "https://discord.gg/sgPw8ZYfpQ",
        bg: "linear-gradient(225.11deg, #2E3148 0%, #161931 95.68%)"
      },
      github: {
        title: "Found an Issue?",
        text: "Help us improve this page by suggesting edits on GitHub."
      }
    },
    footer: {
      logo: "/nibi-logo-onwhite.png",
      question: {
        text: "Chat with Nibiru developers on <a href='https://discord.gg/sgPw8ZYfpQ' target='_blank'>Discord</a>."
      },
      textLink: {
        text: "nibiru.fi",
        url: "https://nibiru.fi"
      },
      services: [
        {
          service: "twitter",
          url: "https://twitter.com/NibiruChain"
        },
        {
          service: "medium",
          url: "https://blog.nibiru.fi/"
        },
        {
          service: "linkedin",
          url: "https://www.linkedin.com/company/nibiruchain"
        },
        {
          service: "github",
          url: "https://github.com/NibiruChain"
        },
        {
          service: "discord",
          url: "https://discord.gg/sgPw8ZYfpQ"
        },
        // {
        //   service: "reddit",
        //   url: "https://reddit.com/r/cosmosnetwork"
        // },
        // {
        //   service: "telegram",
        //   url: "https://t.me/cosmosproject"
        // },
        // {
        //   service: "youtube",
        //   url: "https://www.youtube.com/c/CosmosProject"
        // }
      ],
      smallprint:
        "The development of Nibiru is led primarily by [Nibi, Inc.](https://interchain.berlin/). Funding for this development comes primarily from the Interchain Foundation, a Swiss non-profit.",
      links: [
        {
          title: "Documentation",
          children: [
            {
              title: "Tendermint Core",
              url: "https://docs.tendermint.com"
            },
            {
              title: "Cosmos SDK",
              url: "https://docs.cosmos.network"
            },
            {
              title: "Inter-Blockchain Communication (IBC)",
              url: "https://ibc.cosmos.network/"
            },
          ]
        },
        {
          title: "Community",
          children: [
            {
              title: "🌴 Link Tree",
              url: "https://linktr.ee/nibiruchain"
            },
            {
              title: "Discord Chat",
              url: "https://discord.gg/sgPw8ZYfpQ"
            },
            {
              title: "Nibiru blog",
              url: "https://blog.nibiru.fi/"
            },
            {
              title: "Twitter",
              url: "https://twitter.com/NibiruChain"
            },
          ]
        },
        {
          title: "Contributing",
          children: [
            {
              title: "Contributing to the docs",
              url:
                "https://github.com/NibiruChain/docs/blob/main/docs/DOCS_README.md"
            },
            {
              title: "Source code on GitHub",
              url: "https://github.com/NibiruChain/docs/"
            }
          ]
        }
      ]
    }
  },
  plugins: [
    [
      "@vuepress/google-analytics",
      {
        ga: "UA-51029217-2"
      }
    ],
    [
      "sitemap",
      {
        hostname: "https://docs.nibiru.fi"
      }
    ]
  ]
};
