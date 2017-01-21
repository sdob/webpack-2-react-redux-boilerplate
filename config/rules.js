const path = require('path');

// We're exporting a function here that takes a base directory
// and returns an object containing the rules
module.exports = function(dirname) {

  // Rule: compile JSX
  const jsxRule = {
    test: /\.jsx?$/,
    include: [ path.resolve(dirname, 'app') ],
    use: [ 'babel-loader' ],
  };

  // Rule: compile SASS
  const sassRule = {
    test: /\.scss$/,
    include: [ path.resolve(dirname, 'app') ],
    use: [
      'style-loader',
      'css-loader',
      'sass-loader',
    ],
  };

  const gifRule = {
    test: /\.gif$/,
    include: [ path.resolve(dirname, 'app') ],
    use: [
      'url-loader?mimetype=image/gif',
    ],
  };

  const pngRule = {
    test: /\.png/,
    include: [ path.resolve(dirname, 'app') ],
    use: [
      'url-loader?mimetype=image/png',
    ],
  };

  return {
    gif: gifRule,
    jsx: jsxRule,
    png: pngRule,
    sass: sassRule,
  };
};
