module.exports = {
  // 其它配置
  themeConfig: {
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