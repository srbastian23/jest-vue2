/* eslint-disable @typescript-eslint/no-var-requires */
const webpack = require('webpack')
const Jarvis = require('webpack-jarvis')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const StylelintPlugin = require('stylelint-webpack-plugin')
const ESLintPlugin = require('eslint-webpack-plugin')

process.env.VUE_APP_VERSION = require('./package.json').version

module.exports = {
  transpileDependencies: ['vuetify',],
  configureWebpack: {
    plugins: [
      new Jarvis({
        port: 1300,
      }),
      new BundleAnalyzerPlugin({
        analyzerMode: 'static',
        reportFilename: '../webpack_report/index.html',
        openAnalyzer: false,
      }),
      new StylelintPlugin({
        files: ['./src/**/*.s?(a|c)ss', './src/**/*.vue',],
        fix: true,
        emitError: true,
        emitWarning: true,
      }),
      new ESLintPlugin({
        files: './src/',
        extensions: ['js','ts','vue',],
        fix: true,
        emitError: true,
        emitWarning: true,
      }),
      new webpack.IgnorePlugin({
        resourceRegExp: /moment$/,
      }),
    ],
  },
  css: {
    loaderOptions: {
      scss: {
        additionalData: `
          @import "@/scss/_colors.scss";
          @import "@/scss/_fonts.scss";
          @import "@/scss/_spacings.scss";
        `,
      },
    },
  },
}
