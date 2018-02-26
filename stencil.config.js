exports.config = {
  buildEs5: true,
  buildStats: true,
  emptyDist: false,
  emptyWWW: true,
  enableCache: true,
  namespace: 'oce-kanban',
  generateDistribution: true,
  bundles: [
    { components: ['oce-output', 'oce-bin', 'oce-card', 'oce-kanban', 'oce-modal'] }
  ]
}

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
}
