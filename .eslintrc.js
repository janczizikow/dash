module.exports = {
  'parser': 'babel-eslint',
  'env': {
    'browser': true,
    'jest': true,
    'es6': true,
    'node': true,
  },
  'extends': [
    'airbnb',
    'prettier',
  ],
  'plugins': [
    'prettier',
  ],
  'rules': {
    'react/jsx-filename-extension': [1, {
      'extensions': [ '.js', '.jsx']
    }],
    'react/require-default-props': 0,
    'prettier/prettier': ['error', {
      'singleQuote': true,
      'trailingComma': 'es5'
    }],
    //https://github.com/yannickcr/eslint-plugin-react/issues/1848
    'react/jsx-one-expression-per-line': 0
  },
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true,
    }
  }
}