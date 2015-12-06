module.exports = function (config) {
  config.set({
    browsers: ['PhantomJS'],
    files: ['src/**/*.js', 'test/**/*.spec.js'],
    frameworks: ['mocha', 'chai', 'sinon'],
    preprocessors: {
      'src/**/*.js': ['babel','webpack'],
      'test/**/*.spec.js': ['babel', 'webpack', 'sourcemap']
    },
    babelPreprocessor: {
      options: {
        presets: ['es2015'],
        sourceMap: 'inline'
      },
      filename: function (file) {
        return file.originalPath.replace(/\.js$/, '.es5.js');
      },
      sourceFileName: function (file) {
        return file.originalPath;
      }
    },
    webpack: {
      module: {
         loaders: [
          {
            test: /\.spec.js$/,
            loader: 'babel-loader'

            query: {
                  cacheDirectory: true,
                  presets: ['es2015']
            }
          }
         ]
      }
    }
  });
};
