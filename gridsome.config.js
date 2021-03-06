const path = require('path')

function addStyleResource (rule) {
  rule.use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        path.resolve(__dirname, './src/style/_variables.scss'),
      ],
    })
}

module.exports = {
  siteName: 'natelentz.dev',
  siteUrl: 'https://www.natelentz.dev',
  templates: {
    BlogPost: '/posts/:title',
    Tag: '/posts/tag/:id'
  },
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        baseDir: './blog',
        typeName: 'BlogPost',
        pathPrefix: '/posts',
        path: '*.md',
        refs: {
          tags: {
            typeName: 'Tag',
            create: true
          },
        },
      },
    },
    {
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: 'UA-78676024-2'
      },
    },
    {
      use: '@gridsome/plugin-sitemap',
      options: {
        cacheTime: 600000,
        exclude: ['/posts/test-test-1-2-3/'],
        config: {
          '/': {
            changefreq: 'weekly',
            priority: .8,
          },
          '/posts': {
            changefreq: 'weekly',
            priority: .5
          },
        },
      },
    },
  ],

  transformers: {
    remark: {
      plugins: [
        '@gridsome/remark-prismjs'
      ]
    },
  },

  chainWebpack (config) {
    // Load variables for all vue-files
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']

    // or if you use scss
    types.forEach(type => {
      addStyleResource(config.module.rule('scss').oneOf(type))
    })
  }
}
