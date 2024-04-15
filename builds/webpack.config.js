const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
  mode: 'production',
  entry: path.resolve(__dirname, '../packages/z-ui/index.ts'),
  output: {
    path: path.resolve(__dirname, '../lib'),
    filename: 'index.js',
    libraryTarget: 'umd', //可以支持commonjs和amd，不支持es6，可以在浏览器中直接使用
    library: 'z-ui'
  },
  externals: {
    vue: {  //忽略组件引用的vue变量
      root: 'Vue',
      commonjs: 'vue',
      commonjs2: 'vue'
    }
  },
  resolve: { //解析模块 对应的扩展名
    extensions: ['.ts', '.tsx', '.js', '.vue']
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.vue$/,
        use: 'vue-loader',
      },
      {
        test: /\.(svg|otf|ttf|woff|woff2|eot|gif|png)$/,
        use: 'url-loader'
      },
      {
        test: /\.(scss|css)$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },

    ]
  },
  plugins: [
    new VueLoaderPlugin()
  ]
}