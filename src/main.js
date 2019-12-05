// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
import '~/assets/style/index.scss'
require("typeface-cabin");
require("typeface-poppins");

import DefaultLayout from '~/layouts/Default.vue'

export default function (Vue, { router, head, isClient }) {
  head.htmlAttrs = { lang: 'en' }

  Vue.component('Layout', DefaultLayout)
}
