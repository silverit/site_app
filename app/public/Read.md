1. Tạo file package.json

`npm init -y`

2. Cài webpack và webpack-server

`npm install --save-dev webpack webpack-dev-server`

3. Một file webpack.config.js trong public và copy nội dung sau vào:

```
const webpack = require('webpack')
module.exports = {
  entry: './index.js',

  output: {
    path: __dirname + '/js/build',
    publicPath: '/',
    filename: 'app.js'
  },

  devServer: {
    contentBase: './js/build'
  },
}
```
