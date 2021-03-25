module.exports = {
  mode: 'development',
  devtool: 'inline-cheap-source-map',
  entry: {
    quickstarts: {
      import: __dirname + '/entry.js',
      filename: 'quickstarts.js',
      library: {
        name: 'quickstarts',
        type: 'umd'
      }
    }
  }
}
