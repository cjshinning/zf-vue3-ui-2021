module.exports = {
  presets: [ //babel解析预设，反着执行
    "@babel/preset-env",
    "@babel/preset-typescript"
  ],
  overrides: [
    {
      test: /\.vue$/,
      plugins: [
        '@babel/plugin-transform-typescript'
      ]
    }
  ]
}