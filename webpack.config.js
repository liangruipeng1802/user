var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    app: './day0712/entry.jsx',   // 主入口  ---- 类似于vue-cli中的src/main.js
    // vendors: './md2.js' // 第三方的js库文件
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    host:"0.0.0.0", //别人可以以ip地址的形式访问你的项目
    port: 8000,//指定服务器端口号
    proxy:{
    	'/local': {
        target: 'http://jsonplaceholder.typicode.com',
        changeOrigin: true,
        pathRewrite: {
          '^/local': ''
        }
     },
     '/ele': {
        target: 'https://h5.ele.me',
        changeOrigin: true,
        pathRewrite: {
          '^/ele': ''
        }
      }
    }
  },
  module: {
    rules: [
      {
        test: /.js|jsx$/,
        loader: 'babel-loader', // 从右向左执行
        exclude: /node_modules/,
        include: path.resolve(__dirname, './'),
//         query: {
//           presets: ['env', 'react'],   // babel-laoder可以解析任何版本的js文件
//           plugins: [[
//             "transform-runtime",
//             {
//               "helpers": false,
//               "polyfill": false,
//               "regenerator": true,
//               "moduleName": "babel-runtime"
//             }
//             ]]
//         }
      },
      {
      	test: /\.css$/,
      	loader: 'style-loader!css-loader' // 从右向左执行
      },
      {
        test: /.scss$/,
        loader: 'style-loader!css-loader!sass-loader' // 从右向左执行
      },
      {
      	test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
      	loader: 'url-loader',
      	options: {
      		limit: 10000
      	}
      },
      {
      	test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
      	loader: 'url-loader',
      	options: {
      		limit: 10000
      	}
      },
      {
      	test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
      	loader: 'url-loader',
      	options: {
      		limit: 10000
      	}
      }
    ]
  },
  resolve:{
  	alias:{
  		'@':path.resolve(__dirname,'day0712/src')
  	}
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
    new HtmlWebpackPlugin({template: './index.html'})
  ]
}