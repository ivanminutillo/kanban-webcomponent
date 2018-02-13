exports.config = {
  buildEs5: false,
  buildStats: true,
  emptyDist: false,
  emptyWWW: true,
  enableCache: true,
  namespace: 'resources-flow',
  generateDistribution: true,
  bundles: [
    { components: ['oce-output', 'oce-bin', 'oce-card', 'oce-kanban', 'oce-modal'] }
  ]
}

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
}
