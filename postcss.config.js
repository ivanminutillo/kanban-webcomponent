module.exports = {
    plugins: [
        require('postcss-import')({
            skipDuplicates: true,
            path: [
            'src/components/**/*'
            ]
        }),
        require('postcss-url')(),
        require('postcss-cssnext')(),
        require('postcss-reporter')()
    ]
}
