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
  siteName: 'Nate Lentz',
  plugins: [
    {
      use: 'gridsome-source-cosmicjs',
      options: {
        bucketSlug: process.env.COSMIC_BUCKET_SLUG ,
        objectTypes: [`posts`, `settings`],
        apiAccess: {
          read_key: process.env.COSMIC_READ_KEY || ''
        }
      },
    }
  ],
  chainWebpack (config) {
    // Load variables for all vue-files
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']

    // or if you use scss
    types.forEach(type => {
      addStyleResource(config.module.rule('scss').oneOf(type))
    })
	}
}