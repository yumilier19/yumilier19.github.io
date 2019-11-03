module.exports = {
    base: '/blog-demo/',
    title: 'blog-demo',
    dest:'blog-demo',
    description: 'Vuepress blog demo',
    themeConfig: {
        // 你的GitHub仓库，请正确填写
        repo: 'yumilier19/blog-demo',
        // 自定义仓库链接文字。
        repoLabel: 'My GitHub',
        nav: [
            { text: 'Home', link: '/' },
            { text: 'FirstBlog', link: '/blog/FirstBlog.md' },
            { text: 'sc',link:'/blog/sc.md'},
            { text: 'tr',link:'/blog/tr.md'}
        ],
        sidebar: [
          ['/', '首页'],
          ['/blog/FirstBlog.md', '我的第一篇博客'],
          ['/blog/sc.md','我的第二篇博客'],
          ['/blog/tr.md','我的第三篇博客']
        ],
        title: 'group1',
        collapsable: false,
        children: [
            ['/', 'title1'],
            ['/', 'title2']
        ],
        title: 'group2',
        collapsable: false,
        children: [
            ['/', 'title1'],
        ]
    }
  }  