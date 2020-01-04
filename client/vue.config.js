var path = require('path');
module.exports = {
  "transpileDependencies": [
  ],
  css: {
    loaderOptions: {
      sass: {
        sassOptions: {
          use: [
            'vue-style-loader',
            'css-loader',
            'sass-loader'
          ]
        }
      },
    },
  },
}