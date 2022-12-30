1// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'cbsjz',
  tagline: '爱睡觉的cb烧鸡中zzZ',
  url: 'https://cbsjz.org',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/cbsjz_x64.jpg',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'cbsjz', // Usually your GitHub org/user name.
  projectName: 'cbsjz-docusaurus', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-CN',
    locales: ['zh-CN', 'en'],
    path: 'i18n',
    localeConfigs: {
      'zh-CN': {
        label: '简体中文',
        direction: 'ltr',
        htmlLang: 'zh-CN',
        calendar: 'chinese',
        path: 'zh-CN',
      },
      en: {
        label: 'English',
        direction: 'ltr',
        htmlLang: 'en-US',
        calendar: 'gregory',
        path: 'en',
      },
    },
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
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'cbsjz',
        logo: {
          alt: 'cbsjz Logo',
          src: 'img/cbsjz_x64.jpg',
        },
        items: [
          // {
          //   to: '/blog',
          //   label: '博客',
          //   position: 'right'
          // },
          // {
          //   type: 'doc',
          //   docId: 'intro',
          //   position: 'right',
          //   label: '文档',
          // },
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
              /*{
                label: "腾讯视频",
                href: "https://v.qq.com/vplus/fb379d4923f073908cd6e6189ae90664",
              },*/
              /*{
                label: "优酷",
                href: "https://i.youku.com/cbqfsjz",
              },*/
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
              {
                label: "抖音",
                href: "https://www.douyin.com/user/MS4wLjABAAAA-ybaYCaYP90D0zxUOUgsKGXOVgxMjx-ZXHGwPaQiuFQ",
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
          {
            label: "新浪微博",
            position: "right",
            href: "https://weibo.com/cbsjz",
          },
          /**
          {
            label: "Q群",
            position: "right",
            href: "https://jq.qq.com/?_wv=1027&k=zwdIaC4j",
            // items: [
            //   {
            //     label: "586557098",
            //     href: "https://jq.qq.com/?_wv=1027&k=zwdIaC4j",
            //   }
            // ],
          },
          */
          /** 本地化语言选择
          {
            type: 'localeDropdown',
            position: 'right',
            dropdownItemsAfter: [
            {
              to: 'https://my-site.com/help-us-translate',
              label: '帮助我们翻译',
            },
          },
          */
          /** html
          {
            type: 'html',
            position: 'right',
            value: '<button>提交反馈</button>',
          },
          */
          /** 搜索
          {
            type: 'search',
            position: 'right',
          },
          */
          {
            href: 'https://github.com/cbsjz/cbsjz-docusaurus',
            label: 'GitHub',
            position: 'right',
          },
        ],
        //自动隐藏顶部导航栏
        hideOnScroll: true,
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: "社交媒体",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/cbsjz/cbsjz-docusaurus",
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
                label: "QQ群",
                href: "https://ke.qq.com/course/2839093?tuin=3850fdc6",
              },
              // {
              //   label: "shaoji@cbsjz.net",
              //   href: "mailto:shaoji@cbsjz.net",
              // },
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
        copyright: `Copyright © ${new Date().getFullYear()} cbsjz, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      announcementBar: {
        id: 'support_us',
        content:
          '正在尝试翻修',
        backgroundColor: '#fafbfc',
        textColor: '#091E42',
        isCloseable: true,
      },
    }),

};

module.exports = config;
