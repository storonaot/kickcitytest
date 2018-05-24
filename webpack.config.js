const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

const NODE_ENV = process.env.NODE_ENV || 'development'

module.exports = {
  context: __dirname,
  entry: ['./src/javascripts/index.js', './src/stylesheets/manifest.js'],
  output: {
    path: path.resolve(__dirname, './public'),
    filename: '[name].bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: [path.resolve(__dirname, 'node_modules')],
        loader: 'babel-loader'
      },
      {
        test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$|\.wav$|\.mp3$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 102400,
              name: '[path][name].[ext]?[hash:base64]'
            }
          }
        ]
      }
    ]
  },
  resolve: {
    modules: [path.resolve(__dirname, './node_modules'), './src'],
    extensions: ['.js', '.sss', '.jsx']
  },
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new HtmlWebpackPlugin({
      template: './index.html'
    }),
    new CleanWebpackPlugin(['public'], {
      root: path.join(__dirname),
      verbose: true,
      dry: false
    }),
    new webpack.ProvidePlugin({
      React: 'react',
      _: 'lodash',
      PropTypes: 'prop-types'
    })
  ]
}

if (NODE_ENV === 'development') {
  module.exports.module.rules.push(
    {
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    },
    {
      test: /\.sss$/,
      use: [
        'style-loader',
        'css-loader',
        {
          loader: 'postcss-loader',
          options: {
            config: {
              path: path.resolve(__dirname, './postcss.config.js')
            }
          }
        }
      ]
    }
  )

  module.exports.devServer = {
    contentBase: '/public',
    historyApiFallback: true,
    hot: true,
    inline: true,
    port: 8080,
    host: 'localhost'
  }
} else if (NODE_ENV === 'production') {
  module.exports.output.filename = '[name]-[chunkhash].bundle.js'
  module.exports.output.chunkFilename = '[id]-[chunkhash].bundle.js'
  module.exports.output.publicPath = './'
  module.exports.module.rules.push(
    {
      test: /\.css$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: [
          {
            loader: 'css-loader',
            options: { minimize: true }
          }
        ]
      })
    },
    {
      test: /\.sss$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: [
          {
            loader: 'css-loader',
            options: {
              minimize: true
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              config: {
                path: path.resolve(__dirname, './postcss.config.js')
              }
            }
          }
        ]
      })
    }
  )

  module.exports.plugins.push(
    new UglifyJSPlugin(),
    new ExtractTextPlugin({
      filename: '[name].bundle.[chunkhash].css',
      allChunks: true
    })
  )
}
