const webpackConfig = require('./build/webpack.config.fn')

module.exports = webpackConfig

// for example
// ({
//     entry: './components/index.js',
//     mode: 'development',
//     outputConfig: {
//         filename: 'bundle.js',
//         path: '../dist'
//     }
//     // mode: 'production'
// })
