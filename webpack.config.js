var rucksack = require('rucksack-css')
var webpack = require('webpack')
var path = require('path')
var env = JSON.stringify(process.env.NODE_ENV || 'development')

module.exports = {
  context: path.join(__dirname, './client'),
  entry: {
    jsx: './index.js',
    vendor: [
      'react',
      'react-dom'
    ]
  },
  output: {
    path: path.join(__dirname, './dist'),
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.html$/,
        loader: 'file?name=[name].[ext]'
      },
      {
        test: /\.(css|scss)$/,
        include: /client/,
        loaders: [
          'style-loader',
          'css-loader?modules&sourceMap&importLoaders=1&localIdentName=[local]___[hash:base64:5]',
          'postcss-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.css$/,
        exclude: /client/,
        loader: 'style!css'
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loaders: [
          'react-hot',
          'babel-loader'
        ]
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|woff|woff2)$/,
        loader: 'url-loader',
        query: {
          name:  env === 'development' ? '[path][name].[ext]?[hash]' : '[hash].[ext]',
          limit: 10000,
        },
      }
    ],
  },
  resolve: {
    modulesDirectories: [
      'src',
      'node_modules'
    ],
    extensions: ['', '.json', '.js', '.jsx'],
    alias: {
      ScrollMagic: 'scrollmagic/scrollmagic/uncompressed/ScrollMagic.js',
      ScrollMagicIndicator: 'scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators.js'
    }
  },
  postcss: [
    rucksack({
      autoprefixer: true
    })
  ],
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js'),
    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: env, BROWSER: true }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
  ],
  devServer: {
    contentBase: './client',
    hot: true
  }
}
