exports.config = {
  buildEs5: false,
  buildStats: true,
  emptyDist: false,
  emptyWWW: true,
  enableCache: true,
  namespace: 'resources-flow',
  generateDistribution: true,
  bundles: [
    { components: ['oce-output', 'oce-bin', 'oce-card', 'oce-kanban'] }
  ],
  // plugins: [
  //   require('./plugins/postcss')({
  //     plugins: [
  //       require('postcss-import')({
  //         skipDuplicates: true,
  //         path: [
  //           'src/styles/'
  //         ]
  //       }),
  //       require('postcss-url')(),
  //       require('postcss-cssnext')(),
  //       require('postcss-reporter')()
  //     ]
  //   })
  // ]
}

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
}
