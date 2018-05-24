const varsConfig = require('./src/stylesheets/variables')

module.exports = {
  parser: 'sugarss',
  plugins: {
    precss: {},
    'postcss-simple-vars': {
      variables() {
        return varsConfig
      }
    },
    'postcss-size': {},
    autoprefixer: {
      browsers: ['> 1%', 'last 2 versions']
    },
    'postcss-responsive-type': {},
    'postcss-nested': {},
    'postcss-mixins': {},
    'postcss-each': {},
    'postcss-svg': {
      paths: ['./src/images'],
      ei: false,
      svgo: true
    },
    'postcss-pseudo-class-enter': {}
  }
}
