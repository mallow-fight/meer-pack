const webpackConfig = require('../build/webpack.config.fn')

// for example
module.exports = webpackConfig({
    entry: './components/index.js',
    mode: 'development',
    // mode: 'production',    
    outputConfig: {
        filename: 'bundle.js',
        path: 'dist',
        library: 'meer',
        libraryTarget: 'umd'
    }
})