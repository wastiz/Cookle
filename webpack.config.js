'use strict';

let path = require('path');

module.exports = {
  mode: 'development', //пока разрабатываем, ставим development, когда все готово production
  entry: './js/script.js',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/js'
  },
  watch: true,

  devtool: "source-map",

  module: {}
};
