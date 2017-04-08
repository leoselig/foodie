import { resolve } from 'path';

export default function configureWebpackBase() {
  return {
    entry: './',
    output: {
      path: resolve('./public')
    },
    module: {
      loaders: [ {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader'
      } ]
    }
  };
}
