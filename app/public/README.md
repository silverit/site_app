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
    "build": "webpack --progress --colors --watch --config ./webpack.config.js"
    ...
},
...
```
webpack --watch: webpack sẽ tự động kiểm tra các file có trong config, khi có sự thay đổi sẽ tự động compile lại.

Tham khảo thêm webpack.
https://webpack.github.io/docs/

5. Chạy:

`npm run build`


Tới đây thì chúng ta xem như đã tạo môi trường làm việc với webpack và node module. Tiếp theo chúng ta sẽ làm việc với redux. Let's go!
==

1. Cài mấy module sau đây vào: react, redux, react-redux, react-dom, react-router, react-router-redux.

