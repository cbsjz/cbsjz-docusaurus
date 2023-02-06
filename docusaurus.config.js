const path = require("path");

module.exports = {
  title: "cbsjz.net",
  tagline: "",
  titleDelimiter: "-",
  url: "https://cbsjz.net",
  baseUrl: "/",
  favicon: "img/favicon.ico",
  organizationName: "cbsjz", // Usually your GitHub org/user name.
  projectName: "cbsjz.net", // Usually your repo name.
  stylesheets: ["https://fonts.font.im/css?family=Raleway:500,700"],
  themeConfig: {
    navbar: {
      title: "cbsjz",
      logo: {
        alt: "cbsjz",
        src: "img/logo.png",
        srcDark: "img/logo.png",
      },
      items: [
        {
          to: "tags",
          label: "博客",
          position: "right",
          items: [
            {
              label: "文章",
              to: "tags",
            },
          ],
        },
        {
          to: "/",
          label: "视频",
          position: "right",
          items: [
            {
              label: "爱奇艺",
              href: "https://www.iqiyi.com/u/2071982791",
            },
            {
              label: "哔哩哔哩",
              href: "https://space.bilibili.com/39060970",
            },
            {
              label: "腾讯视频",
              href: "https://v.qq.com/vplus/fb379d4923f073908cd6e6189ae90664",
            },
            {
              label: "优酷",
              href: "https://i.youku.com/cbqfsjz",
            },
            {
              label: "西瓜视频",
              href: "https://www.ixigua.com/c/user/59410370157 ",
            },
            {
              label: "AcFun",
              href: "https://www.acfun.cn/u/12816444.aspx",
            },
            {
              label: "YouTube",
              href: "https://www.youtube.com/channel/UCdhKtanGQo-Cy-XUT7STHHw/",
            },
          ],
        },
        {
          to: "/",
          label: "直播",
          position: "right",
          items: [
            {
              label: "哔哩哔哩直播",
              href: "https://space.bilibili.com/39060970",
            },
            {
              label: "爱奇艺直播",
              href: "https://gamelive.iqiyi.com/w/13413",
            },
            {
              label: "斗鱼直播",
              href: "https://www.douyu.com/8656608",
            },
            {
              label: "西瓜直播",
              href: "https://live.ixigua.com/room/6820631691665607438/",
            },
            {
              label: "YouTube Live",
              href: "https://www.youtube.com/channel/UCdhKtanGQo-Cy-XUT7STHHw/live",
            },
          ],
        },
        {
          to: "/",
          label: "录制组",
          position: "right",
          items: [
            {
              label: "哔哩哔哩",
              href: "https://space.bilibili.com/400613608",
            },
            {
              label: "爱奇艺",
              href: "https://www.iqiyi.com/u/1704091754",
            },
          ],
        },
        // {
        //   label: "新浪微博",
        //   position: "right",
        //   href: "https://weibo.com/cbsjz",
        // },
        // {
        //   label: "Q群",
        //   position: "right",
        //   href: "https://jq.qq.com/?_wv=1027&k=zwdIaC4j",
        //   // items: [
        //   //   {
        //   //     label: "586557098",
        //   //     href: "https://jq.qq.com/?_wv=1027&k=zwdIaC4j",
        //   //   }
        //   // ],
        // },
        // {
        //   label: "end",
        //   position: "right",
        //   to: "docs/resources/resources-intro",
        // },
        {
          href: "https://github.com/cbsjz/cbsjz.github.io",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        // {
        //   title: "Docs",
        //   items: [
        //     {
        //       label: "Style Guide",
        //       to: "docs/doc1"
        //     },
        //     {
        //       label: "Second Doc",
        //       to: "docs/doc2"
        //     }
        //   ]
        // },
        // {
        //   title: "Community",
        //   items: [
        //     {
        //       label: "Stack Overflow",
        //       href: "https://stackoverflow.com/questions/tagged/docusaurus"
        //     },
        //     {
        //       label: "Discord",
        //       href: "https://discordapp.com/invite/docusaurus"
        //     }
        //   ]
        // },
        {
          title: "Social",
          items: [
            {
              label: "博客",
              to: "tags",
            },
            {
              label: "GitHub",
              href: "https://github.com/cbsjz/cbsjz.github.io",
            },
            {
              label: "Bilibili 哔哩哔哩",
              href: "https://space.bilibili.com/39060970",
            },
            {
              label: "新浪微博",
              href: "/",
            },
            {
              label: "QQ群",
              href: "https://ke.qq.com/course/2839093?tuin=3850fdc6",
            },
            {
              label: "shaoji@cbsjz.net",
              href: "mailto:shaoji@cbsjz.net",
            },
          ],
        },
        {
          title: "友情链接",
          items: [
            {
              label: "超时光",
              to: "https://sgziyu23.com",
            },
            {
              label: "峰华",
              to: "https://zxuqian.cn/",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} <a href="http://cbsjz.github.io" style="text-decoration: none;color: #fff">cbsjz</a>, Inc. <br/> 
        by <a href="https://zxuqian.cn/" style="text-decoration: none;color: #fff">峰华 (张旭乾)</a> Built with Docusaurus.`
    },
    prism: {
      darkTheme: require("prism-react-renderer/themes/vsDark"),
      defaultLanguage: "javascript",
    },
    googleAnalytics: {
      trackingID: "UA-118572241-1",
      anonymizeIP: true, // Should IPs be anonymized?
    },
    gtag: {
      trackingID: "G-6PSESJX0BM",
      // Optional fields.
      anonymizeIP: true, // Should IPs be anonymized?
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          //editUrl: "https://github.com/zxuqian/zxuqian.cn/tree/master/docs",
        },
        blog: {
          path: "./blog",
          routeBasePath: "/",
          blogSidebarTitle: "近期文章",
          feedOptions: {
            type: "all",
            title: "cbsjz",
            copyright: `Copyright © ${new Date().getFullYear()} <a href="https://cbsjz.github.io" style="text-decoration: none;color: #fff">cbsjz</a>, Inc. <br/> 
              by <a href="https://zxuqian.cn/" style="text-decoration: none;color: #fff">峰华 (张旭乾)</a> Built with Docusaurus.`
          },
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        sitemap: {
          cacheTime: 600 * 1000, // 600 sec - cache purge period
          changefreq: "daily",
          priority: 0.5,
        },
      },
    ],
  ],
  themes: ["@docusaurus/theme-live-codeblock"],
  plugins: [
    //path.resolve(__dirname, "./src/plugin/plugin-baidu-analytics"),
    //path.resolve(__dirname, "./src/plugin/plugin-baidu-push"),
    // path.resolve(__dirname, "./src/plugin/plugin-google-adsense"),
  ],
};
