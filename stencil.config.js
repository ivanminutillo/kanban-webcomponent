exports.config = {
  namespace: 'resources-flow',
  generateDistribution: true,
  bundles: [
    { components: ['oce-output', 'oce-bin', 'oce-card', 'oce-kanban'] }
  ]
}

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
}
