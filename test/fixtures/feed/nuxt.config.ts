export default defineNuxtConfig({
  modules: [
    '../../../src/module'
  ],

  feed: {
    sources: [
      {
        path: '/feed.xml',
        cacheTime: 60 * 15,
        type: 'rss2'
      },
      {
        path: '/feed.atom',
        cacheTime: 60 * 15,
        type: 'atom1'
      },
      {
        path: '/feed.json',
        cacheTime: 60 * 15,
        type: 'json1'
      }
    ]
  }
})
