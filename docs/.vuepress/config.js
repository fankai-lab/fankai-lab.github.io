module.exports = {
  title: '泡狗', //站点标题
  description: '前端面试题库',//mate标签description，多用于搜索引擎抓取摘要
  // 其它配置
  themeConfig: {
    siteTitle: "泡狗",
    logo: "/javascript.jpg",
    searchMaxSuggestions: 10, // 对内置的搜索进行最多结果数量的限制
    nav: [
      { text: '首页', link: '/' },
      { text: '前端三剑客', items: [
        { text: 'HTML', link: '/html/' },
        { text: 'CSS', link: '/CSS/' },
        { text: 'JavaScript', link: '/JavaScript/' }
      ],},
      { text: 'Vue.jss', link: '/vue/' },
      { text: 'GitHub', link: 'https://github.com/fankai-lab/fankai-lab.github.io.git' }
    ],
    sidebar: [
      {
        title: '前端三剑客',
        collapsable: false,
        children: [
          '/CSS/',
          '/HTML/',
          '/JavaScript/'
        ]
      },
      {
        title: 'Vue.js',
        collapsable: false,
        children: [
          '/Vue/',
          '/Vue/Vuex.md',
          '/Vue/Vue-Router.md',
        ]
      }
    ]
  },
}