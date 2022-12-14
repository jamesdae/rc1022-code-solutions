module.exports = {
  mode: 'none',
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            plugins: [
              '@babel/plugin-transform-block-scoping',
              '@babel/plugin-transform-arrow-functions'
            ]
          }
        }
      }
    ]
  },
  performance: {
    hints: false
  }
};
