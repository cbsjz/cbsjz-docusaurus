// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'shaotori',
  tagline: '烧鸡中',
  favicon: 'img/shaotori-cbsjz.ico',

  // Set the production url of your site here
  url: 'https://shaotori.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'shaotori', // Usually your GitHub org/user name.
  projectName: 'shaotori-docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
    // path: 'i18n',
    // localeConfigs: {
    //   en: {
    //     label: 'English',
    //     direction: 'ltr',
    //     htmlLang: 'en-US',
    //     calendar: 'gregory',
    //     path: 'en',
    //   },
    //   fa: {
    //     label: 'فارسی',
    //     direction: 'rtl',
    //     htmlLang: 'fa-IR',
    //     calendar: 'persian',
    //     path: 'fa',
    //   },
    // },
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:'/',
            //'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:'/',
            //'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  //navbar footer prism
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'shaotori',
        logo: {
          alt: 'shaotori Logo',
          src: 'img/shaotori-cbsjz.ico',
        },
        items: [
          //left
          // {
          //   type: 'docSidebar',
          //   sidebarId: 'tutorialSidebar',
          //   position: 'left',
          //   label: 'Tutorial',
          // },
          // {to: '/blog', label: 'Blog', position: 'left'},

          //right
          {
            label: '视频',
            position: 'right',
            items: [
              {
                label: "哔哩哔哩",
                href: "https://space.bilibili.com/39060970",
              },
              {
                label: "YouTube",
                href: "https://www.youtube.com/@shaotori",
              },
	      {
                label: "爱奇艺",
                href: "https://www.iqiyi.com/u/2071982791",
              },
              /*{
                label: "腾讯视频",
                href: "https://v.qq.com/s/videoplus/740343263",
              },*/
              /*{
                label: "优酷",
                href: "https://www.youku.com/profile/index?uid=UMzk2NTE5MTQ4MA==",
              },*/
              /*{
                label: "AcFun",
                href: "https://www.acfun.cn/u/12816444.aspx",
              },*/
              {
                label: "抖音",
                href: "https://www.douyin.com/user/MS4wLjABAAAA-ybaYCaYP90D0zxUOUgsKGXOVgxMjx-ZXHGwPaQiuFQ",
              },
              /*{
                label: "西瓜视频",
                href: "https://www.ixigua.com/c/user/59410370157 ",
	      },*/
	      /*{
                label: "小红书",
                href: "https://www.xiaohongshu.com/user/profile/5fad2e3f000000000100152d",
              },*/
            ],
          },
          {
            label: "直播",
            position: "right",
            items: [
              {
                label: "哔哩哔哩直播",
                href: "https://live.bilibili.com/1225925",
              },
              /*{
                label: "爱奇艺直播",
                href: "https://gamelive.iqiyi.com/w/13413",
              },*/
              {
                label: "斗鱼直播",
                href: "https://www.douyu.com/8656608",
              },
              /*{
                label: "西瓜直播",
                href: "https://live.ixigua.com/room/6820631691665607438/",
              },*/
              /*{
                label: "YouTube Live",
                href: "https://www.youtube.com/channel/UCdhKtanGQo-Cy-XUT7STHHw/live",
              },*/
            ],
          },
          /**{
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
          },*/
          {
            label: "社交媒体",
            position: "right",
             items: [
               {
                 label: "QQ频道-烧鸡社",
                 href: "https://pd.qq.com/s/9ffm36qi",
               },
               {
                 label: "新浪微博",
                 href: "https://weibo.com/cbsjz",
               },
               {
                 label: "烧鸡REC",
                 href: "https://space.bilibili.com/400613608",
               },
             ],
          },
		      {
            type: 'localeDropdown',
            position: 'right',
		      },
          {
            href: 'https://github.com/shaotori/shaotori-docusaurus',
            label: 'GitHub',
            position: 'right',
          },
        ],
        //自动隐藏顶部导航栏
        hideOnScroll: true,
      },
      footer: {
        style: 'dark',
        // links: [
        //   {
        //     title: 'Docs',
        //     items: [
        //       {
        //         label: 'Tutorial',
        //         to: '/docs/intro',
        //       },
        //     ],
        //   },
        //   {
        //     title: 'Community',
        //     items: [
        //       {
        //         label: 'Stack Overflow',
        //         href: 'https://stackoverflow.com/questions/tagged/docusaurus',
        //       },
        //       {
        //         label: 'Discord',
        //         href: 'https://discordapp.com/invite/docusaurus',
        //       },
        //       {
        //         label: 'Twitter',
        //         href: 'https://twitter.com/docusaurus',
        //       },
        //     ],
        //   },
        //   {
        //     title: 'More',
        //     items: [
        //       {
        //         label: 'Blog',
        //         to: '/blog',
        //       },
        //       {
        //         label: 'GitHub',
        //         href: 'https://github.com/facebook/docusaurus',
        //       },
        //     ],
        //   },
        // ],
        links: [
          {
            title: "社交媒体",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/shaotori/",
              },
              {
                label: "哔哩哔哩",
                href: "https://space.bilibili.com/39060970",
              },
              {
                label: "新浪微博",
                href: "https://weibo.com/cbsjz",
              },
              {
                label: "QQ频道-烧鸡社",
                href: "https://pd.qq.com/s/9ffm36qi",
              },
              // {
              //   label: "shaoji@cbsjz.net",
              //   href: "mailto:shaoji@cbsjz.net",
              // },
            ],
          },
          {
            title: "联系方式",
            items: [
              {
                label: "企业微信",
                href: "https://shaotori.com/img/wechat.jpg",
              },
              {
                label: "email: shaotori@qq.com",
                href: "mailto: shaotori@qq.com"
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} shaotori.com, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
