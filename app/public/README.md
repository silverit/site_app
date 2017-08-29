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

4. Thêm nội dung như sau vào file package.json: 

```
...
"scripts": {
    "start": "webpack-dev-server --progress --colors --hot --config ./webpack.config.js",
    "build": "webpack --progress --colors --config ./webpack.config.js"
    ...
},
...
```
Tham khảo thêm webpack.
https://webpack.github.io/docs/
5. Chạy:

`npm run build`


