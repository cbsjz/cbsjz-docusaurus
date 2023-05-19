<<<<<<< HEAD
1// @ts-check
=======
// @ts-check
>>>>>>> kkt-next
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'shaotori',
  tagline: 'cb烧鸡中',
<<<<<<< HEAD
  url: 'https://shaotor.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/cbsjz_x64.jpg',

  headTags: [
    {
      tagName: 'meta',
      attributes: {
        name: 'baidu-site-verification',
        content: 'codeva-SV14Qnynf0',
      },
    },
  ],

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'cbsjz', // Usually your GitHub org/user name.
  projectName: 'cbsjz-docusaurus', // Usually your repo name.
=======
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
>>>>>>> kkt-next

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
<<<<<<< HEAD
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
=======
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
>>>>>>> kkt-next
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
<<<<<<< HEAD
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
=======
          editUrl:'/',
            //'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
>>>>>>> kkt-next
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
<<<<<<< HEAD
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
=======
          editUrl:'/',
            //'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
>>>>>>> kkt-next
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

<<<<<<< HEAD
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'shaotori',
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
=======
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
>>>>>>> kkt-next
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
                href: "https://www.youtube.com/@shaotori",
              },
              {
                label: "抖音",
                href: "https://www.douyin.com/user/MS4wLjABAAAA-ybaYCaYP90D0zxUOUgsKGXOVgxMjx-ZXHGwPaQiuFQ",
              },
            ],
          },
          {
<<<<<<< HEAD
            to: "/",
=======
>>>>>>> kkt-next
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
                 href: "https://qun.qq.com/qqweb/qunpro/share?_wv=3&_wwv=128&appChannel=share&inviteCode=1YLos5Pcj3J&businessType=9&jumpInfo=ChAXMiDtGIdOphKhWYhwFtDQEgN2cDE%3D&from=246610&biz=ka#/pc",
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
<<<<<<< HEAD
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
            href: 'https://github.com/shaotori/cbsjz-docusaurus',
=======
		      {
            type: 'localeDropdown',
            position: 'right',
		      },
          {
            href: 'https://github.com/shaotori/shaotori-docusaurus',
>>>>>>> kkt-next
            label: 'GitHub',
            position: 'right',
          },
        ],
        //自动隐藏顶部导航栏
        hideOnScroll: true,
      },
      footer: {
        style: 'dark',
<<<<<<< HEAD
=======
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
>>>>>>> kkt-next
        links: [
          {
            title: "社交媒体",
            items: [
              {
                label: "GitHub",
<<<<<<< HEAD
                href: "https://github.com/shaotori/cbsjz-docusaurus",
=======
                href: "https://github.com/shaotori/",
>>>>>>> kkt-next
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
                href: "https://qun.qq.com/qqweb/qunpro/share?_wv=3&_wwv=128&appChannel=share&inviteCode=1YLos5Pcj3J&businessType=9&jumpInfo=ChAXMiDtGIdOphKhWYhwFtDQEgN2cDE%3D&from=246610&biz=ka#/pc",
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
<<<<<<< HEAD
              {
                label: "超时光",
                to: "https://jq.qq.com/?_wv=1027&k=zwTBiDlW",
              },
              /*{
                label: "峰华",
                to: "https://zxuqian.cn/",
              },*/
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} shaotori, Inc. Built with Docusaurus.`,
=======
              // {
              //   label: "超时光",
              //   to: "https://jq.qq.com/?_wv=1027&k=zwTBiDlW",
              // },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} shaotori.com, Inc. Built with Docusaurus.`,
>>>>>>> kkt-next
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
<<<<<<< HEAD
      // announcementBar: {
      //   id: 'support_us',
      //   content:
      //     '正在尝试翻修',
      //   backgroundColor: '#fafbfc',
      //   textColor: '#091E42',
      //   isCloseable: true,
      // },
    }),

=======
    }),
>>>>>>> kkt-next
};

module.exports = config;
