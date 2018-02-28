const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')
module.exports = function webpackConfig(config) {
    const {mode, entry, outputConfig} = config
    const configObj = {
        mode,
        entry,
        output: {
            filename: outputConfig.filename,
            path: path.resolve(__dirname, '../../../' + outputConfig.path),
            // path: path.resolve(__dirname, '../' + outputConfig.path),
            library: outputConfig.library,
            libraryTarget: outputConfig.libraryTarget
        },
        plugins: [
            new CleanWebpackPlugin(['dist'])
        ]
    }
    if(mode === 'development') {
        configObj.devtool = 'inline-source-map'
    }
    return configObj
}